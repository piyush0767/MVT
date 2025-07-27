// ========== GLOBAL DATA ==========
let routeData = {}; // Holds all route + society + password info
let mccAdmins = {}; // Holds MCC admin info

// ========== INIT LOGIC ==========
const MilkRouteTracker = {
  init: function () {
    if (!localStorage.getItem("initialized")) {
      // Sample Route Data
      routeData = {
        "1801": {
          password: "Milk1801",
          societies: ["Green Park", "Sunrise Nagar", "Shanti Vihar"]
        },
        "1802": {
          password: "Milk1802",
          societies: ["Radha Colony", "Laxmi Enclave"]
        }
      };

      // Sample MCC Admins
      mccAdmins = {
        Khushipur: { password: "MCC123", routes: ["1801"] },
        Devipur: { password: "MCC456", routes: ["1802"] }
      };

      localStorage.setItem("routeData", JSON.stringify(routeData));
      localStorage.setItem("mccAdmins", JSON.stringify(mccAdmins));
      localStorage.setItem("initialized", "yes");
      showToast("✅ Sample data loaded!");
    } else {
      loadRouteData();
    }
  }
};

// ========== LOAD FROM STORAGE ==========
function loadRouteData() {
  routeData = JSON.parse(localStorage.getItem("routeData") || "{}");
  mccAdmins = JSON.parse(localStorage.getItem("mccAdmins") || "{}");
}

// ========== SAVE TO STORAGE ==========
function saveRouteData() {
  localStorage.setItem("routeData", JSON.stringify(routeData));
}

// ========== DRIVER LOGIN ==========
function driverLogin() {
  const route = document.getElementById("routeNumber").value.trim();
  const password = document.getElementById("password").value.trim();
  const shift = document.getElementById("shiftSelector").value;

  if (!route || !password || !shift) return showToast("Please fill all fields", "error");

  if (!routeData[route] || routeData[route].password !== password) {
    return showToast("Invalid route number or password", "error");
  }

  // Success
  document.getElementById("driverLoginSection").style.display = "none";
  document.querySelector(".driver-section").style.display = "block";
  document.getElementById("routeHeader").innerText = route;
  document.getElementById("shiftHeader").innerText = shift;
  document.getElementById("timeHeader").innerText = new Date().toLocaleTimeString();

  populateSocieties(route);
}

// ========== POPULATE SOCIETIES ==========
function populateSocieties(route) {
  const list = document.getElementById("societyList");
  list.innerHTML = "";

  routeData[route].societies.forEach((society, i) => {
    const li = document.createElement("li");
    li.className = "society";
    li.innerHTML = `
      <strong>${society}</strong><br/>
      <button onclick="markTime('${route}', ${i}, 'arrival')">Arrival</button>
      <button onclick="markTime('${route}', ${i}, 'dispatch')">Dispatch</button>
      <div id="status-${route}-${i}" style="font-size: 12px; margin-top: 4px;"></div>
    `;
    list.appendChild(li);

    updateStatus(route, i);
  });
}

// ========== MARK TIME ==========
function markTime(route, i, type) {
  const key = `time-${route}-${i}-${type}`;
  const time = new Date().toLocaleTimeString();
  localStorage.setItem(key, time);
  updateStatus(route, i);
}

function updateStatus(route, i) {
  const arrival = localStorage.getItem(`time-${route}-${i}-arrival`);
  const dispatch = localStorage.getItem(`time-${route}-${i}-dispatch`);
  let html = "";
  if (arrival) html += `🟢 Arrival: ${arrival}<br/>`;
  if (dispatch) html += `🔵 Dispatch: ${dispatch}`;
  document.getElementById(`status-${route}-${i}`).innerHTML = html;
}

// ========== ADMIN LOGIN ==========
function adminLogin() {
  const name = document.getElementById("mccName").value.trim();
  const password = document.getElementById("mccPassword").value.trim();

  if (!name || !password) return showToast("Please fill all fields", "error");

  if (!mccAdmins[name] || mccAdmins[name].password !== password) {
    return showToast("Invalid MCC name or password", "error");
  }

  // Success
  document.getElementById("adminLoginSection").style.display = "none";
  document.querySelector(".admin-section").style.display = "block";
  updateRouteDropdown(name);
}

// ========== ROUTE DROPDOWN ==========
function updateRouteDropdown(mccName) {
  const dropdown = document.getElementById("routeSelector");
  dropdown.innerHTML = "";

  const routes = mccAdmins[mccName].routes || [];

  routes.forEach(route => {
    const option = document.createElement("option");
    option.value = route;
    option.innerText = `Route ${route}`;
    dropdown.appendChild(option);
  });

  loadSocietiesForEdit(routes[0]);
}

// ========== SOCIETY LIST FOR ADMIN ==========
function loadSocietiesForEdit(route) {
  const container = document.getElementById("societyListAdmin");
  container.innerHTML = "";

  (routeData[route]?.societies || []).forEach((society, index) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <input type="text" value="${society}" />
      <button onclick="deleteSociety('${route}', ${index})">🗑</button>
    `;
    const input = div.querySelector("input");
    input.addEventListener("blur", () => {
      routeData[route].societies[index] = input.value.trim();
      saveRouteData();
    });
    container.appendChild(div);
  });
}

// ========== ADD SOCIETY ==========
function addSociety() {
  const route = document.getElementById("routeSelector").value;
  const name = document.getElementById("newSocietyName").value.trim();

  if (!name) return showToast("Enter society name", "error");

  routeData[route].societies.push(name);
  saveRouteData();
  document.getElementById("newSocietyName").value = "";
  loadSocietiesForEdit(route);
  showToast("Society added", "info");
}

// ========== DELETE SOCIETY ==========
function deleteSociety(route, index) {
  routeData[route].societies.splice(index, 1);
  saveRouteData();
  loadSocietiesForEdit(route);
  showToast("Society deleted", "info");
}

// ========== ADD ROUTE ==========
function addRoute() {
  const route = document.getElementById("newRouteNumber").value.trim();
  if (!route) return showToast("Enter route number", "error");
  if (routeData[route]) return showToast("Route already exists", "error");

  const password = prompt("Set password for this route:");
  if (!password) return showToast("Password required", "error");

  routeData[route] = { password, societies: [] };
  saveRouteData();
  document.getElementById("newRouteNumber").value = "";
  showToast("Route added", "info");
}

// ========== LANGUAGE SWITCH ==========
function loadLanguage() {
  const lang = localStorage.getItem("language") || "en";
  document.getElementById("languageToggle").value = lang;
  applyLanguage(lang);
}

function switchLanguage(lang) {
  localStorage.setItem("language", lang);
  applyLanguage(lang);
}

function applyLanguage(lang) {
  const text = {
    en: {
      driverLogin: "Driver Login",
      adminLogin: "Admin Login",
      route: "Route Number",
      pass: "Password",
      shift: "Select Shift",
      login: "Login"
    },
    hi: {
      driverLogin: "ड्राइवर लॉगिन",
      adminLogin: "प्रशासक लॉगिन",
      route: "रूट नंबर",
      pass: "पासवर्ड",
      shift: "शिफ्ट चुनें",
      login: "लॉगिन"
    }
  };

  const t = text[lang];
  document.getElementById("driverLoginTitle").innerText = t.driverLogin;
  document.getElementById("adminLoginTitle").innerText = t.adminLogin;
  document.getElementById("routeLabel").innerText = t.route;
  document.getElementById("passwordLabel").innerText = t.pass;
  document.getElementById("shiftLabel").innerText = t.shift;
  document.getElementById("driverLoginButton").innerText = t.login;
  document.getElementById("adminLoginButton").innerText = t.login;
}

// ========== LOGOUT ==========
function logout() {
  location.reload();
}

// ========== TOAST ==========
function showToast(message, type = "info") {
  const toast = document.getElementById("toast");
  toast.innerText = message;
  toast.style.background = type === "error" ? "#f44336" : "#4CAF50";
  toast.className = "toast show";
  setTimeout(() => toast.classList.remove("show"), 3000);
}

// ========== INIT ==========
document.addEventListener("DOMContentLoaded", () => {
  MilkRouteTracker.init();
  loadLanguage();
});

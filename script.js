// ========== MilkRouteTracker App ==========
const MilkRouteTracker = {
  routeData: {
    "1801": {
      password: "Milk1801",
      societies: ["Shiv Shakti", "Gokul Dham", "Green Valley"]
    }
  },
  mccAdmins: {
    "admin1801": "adminpass"
  },

  init: function () {
    if (!localStorage.getItem("initialized")) {
      localStorage.setItem("routeData", JSON.stringify(this.routeData));
      localStorage.setItem("mccAdmins", JSON.stringify(this.mccAdmins));
      localStorage.setItem("initialized", "yes");
      alert("✅ Sample data loaded.\nLogin with:\nRoute: 1801\nPassword: Milk1801");
    }
  }
};

// ========== Load Data ==========
let routeData = {};
function loadRouteData() {
  const stored = localStorage.getItem("routeData");
  routeData = stored ? JSON.parse(stored) : {};
}

// ========== Save Data ==========
function saveRouteData() {
  localStorage.setItem("routeData", JSON.stringify(routeData));
}

// ========== Driver Login ==========
function driverLogin() {
  const route = document.getElementById("routeNumber").value.trim();
  const password = document.getElementById("password").value;
  const shift = document.getElementById("shiftSelector").value;

  const data = JSON.parse(localStorage.getItem("routeData") || "{}");

  if (!data[route]) {
    showToast("❌ Route not found", "error");
    alert("Route not found.");
    return;
  }

  if (data[route].password !== password) {
    showToast("❌ Wrong password", "error");
    alert("Incorrect password.");
    return;
  }

  // ✅ Success
  document.querySelector(".driver-section").classList.remove("hidden");
  document.getElementById("driverRoute").innerText = route;
  document.getElementById("shiftDisplay").innerText = "Shift: " + shift;
  document.getElementById("loginTime").innerText = "Login Time: " + new Date().toLocaleTimeString();

  document.getElementById("driverLoginSection").classList.add("hidden");
  document.getElementById("adminLoginSection").classList.add("hidden");

  showSocietyList(route, shift);
  showToast("✅ Login successful", "info");
}

// ========== Show Society List ==========
function showSocietyList(route, shift) {
  const list = document.getElementById("societyList");
  list.innerHTML = "";

  const routeSocieties = routeData[route].societies || [];
  routeSocieties.forEach((name, i) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <strong>${name}</strong><br>
      <button onclick="markTime('${route}', ${i}, 'arrival')">Arrival</button>
      <button onclick="markTime('${route}', ${i}, 'dispatch')">Dispatch</button>
      <div id="status-${i}"></div>
      <hr>
    `;
    list.appendChild(div);
  });
}

// ========== Mark Arrival/Dispatch ==========
function markTime(route, index, type) {
  const now = new Date().toLocaleTimeString();
  const id = `status-${index}`;
  const status = document.getElementById(id);

  status.innerHTML += `${type === "arrival" ? "🟢 Arrived" : "🔵 Dispatched"} at ${now}<br>`;
}

// ========== Admin Login ==========
function adminLogin() {
  const username = document.getElementById("adminUsername").value.trim();
  const password = document.getElementById("adminPassword").value;

  const mccAdmins = JSON.parse(localStorage.getItem("mccAdmins") || "{}");

  if (mccAdmins[username] === password) {
    document.querySelector(".admin-section").classList.remove("hidden");
    document.getElementById("adminLoginSection").classList.add("hidden");
    showToast("✅ Admin login success", "info");
    updateRouteDropdown();
  } else {
    showToast("❌ Invalid admin credentials", "error");
  }
}

// ========== Update Route Dropdown in Admin Panel ==========
function updateRouteDropdown() {
  const dropdown = document.getElementById("routeSelector");
  dropdown.innerHTML = "";

  Object.keys(routeData).forEach(route => {
    const option = document.createElement("option");
    option.value = route;
    option.text = route;
    dropdown.appendChild(option);
  });

  loadSocietiesForEdit();
}

// ========== Load Societies for Editing ==========
function loadSocietiesForEdit() {
  const route = document.getElementById("routeSelector").value;
  const container = document.getElementById("societyEditor");
  container.innerHTML = "";

  if (!routeData[route]) return;

  routeData[route].societies.forEach((name, index) => {
    const input = document.createElement("input");
    input.value = name;
    input.onblur = () => {
      routeData[route].societies[index] = input.value.trim();
      saveRouteData();
    };

    const del = document.createElement("button");
    del.innerText = "❌";
    del.onclick = () => {
      routeData[route].societies.splice(index, 1);
      saveRouteData();
      loadSocietiesForEdit();
    };

    container.appendChild(input);
    container.appendChild(del);
    container.appendChild(document.createElement("br"));
  });
}

// ========== Add New Route ==========
function addRoute() {
  const route = document.getElementById("newRouteNumber").value.trim();
  if (!route || routeData[route]) return showToast("❌ Invalid or duplicate route", "error");

  const password = prompt("Set a password for this route:");
  if (!password) return;

  routeData[route] = { password, societies: [] };
  saveRouteData();
  updateRouteDropdown();
  showToast("✅ Route added", "info");
}

// ========== Add Society to Route ==========
function addSociety() {
  const route = document.getElementById("routeSelector").value;
  const name = document.getElementById("newSocietyName").value.trim();
  if (!name) return;

  routeData[route].societies.push(name);
  saveRouteData();
  loadSocietiesForEdit();
  document.getElementById("newSocietyName").value = "";
  showToast("✅ Society added", "info");
}

// ========== Language Toggle ==========
let currentLang = "en";
function toggleLanguage() {
  const texts = {
    en: {
      route: "Route Number",
      password: "Password",
      login: "Login",
      shift: "Select Shift",
      morning: "Morning",
      evening: "Evening",
      admin: "Admin Login"
    },
    hi: {
      route: "रूट नंबर",
      password: "पासवर्ड",
      login: "लॉगिन",
      shift: "शिफ्ट चुनें",
      morning: "सुबह",
      evening: "शाम",
      admin: "प्रशासक लॉगिन"
    }
  };

  currentLang = currentLang === "en" ? "hi" : "en";
  const t = texts[currentLang];
  document.getElementById("labelRoute").innerText = t.route;
  document.getElementById("labelPassword").innerText = t.password;
  document.getElementById("driverLoginButton").innerText = t.login;
  document.getElementById("shiftLabel").innerText = t.shift;
  document.getElementById("shiftSelector").options[0].text = t.morning;
  document.getElementById("shiftSelector").options[1].text = t.evening;
  document.getElementById("adminLoginTitle").innerText = t.admin;
}

// ========== Toast ==========
function showToast(message, type = "info") {
  const toast = document.getElementById("toast");
  toast.className = `toast ${type}`;
  toast.innerText = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3000);
}

// ========== Start ==========
document.addEventListener("DOMContentLoaded", () => {
  MilkRouteTracker.init();
  loadRouteData();
  loadLanguage?.();
});

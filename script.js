// ========== LOCAL STORAGE UTILITIES ==========
function loadRouteData() {
  const saved = localStorage.getItem("routeData");
  if (saved) return JSON.parse(saved);
  return {
    "1801": { password: "Milk1801", societies: ["Society 1", "Society 2"] },
    "1802": { password: "Milk1802", societies: ["Society A", "Society B"] }
  };
}

function saveRouteData() {
  localStorage.setItem("routeData", JSON.stringify(routeData));
}

// ========== INIT ==========
let routeData = loadRouteData();

const mccAdmins = [
  { username: "admin", password: "admin123" }
];

// ========== DRIVER LOGIN ==========
function driverLogin() {
  const route = document.getElementById("routeNumber").value.trim();
  const password = document.getElementById("password").value;
  const shift = document.getElementById("shiftSelector").value;

  if (routeData[route] && routeData[route].password === password) {
    document.querySelector("#driverLoginSection").classList.add("hidden");
    document.querySelector("#adminLoginSection").classList.add("hidden");
    document.querySelector(".driver-section").classList.remove("hidden");

    document.getElementById("driverRoute").textContent = `Route: ${route}`;
    document.getElementById("shiftDisplay").textContent = `Shift: ${shift}`;
    document.getElementById("loginTime").textContent = `Login Time: ${new Date().toLocaleTimeString()}`;

    const societies = routeData[route].societies;
societyList.innerHTML = "";

const statusKey = `status_${route}_${shift}`;
const savedStatus = JSON.parse(localStorage.getItem(statusKey)) || {};

societies.forEach((soc, index) => {
  const div = document.createElement("div");
  div.innerHTML = `
    <b>${index + 1}. ${soc}</b>
    <button onclick="markStatus('${route}','${shift}','${soc}','arrival', this)">Arrival</button>
    <button onclick="markStatus('${route}','${shift}','${soc}','departure', this)">Departure</button>
    <span id="status_${route}_${shift}_${soc.replace(/\s+/g, '_')}"></span>
  `;
  societyList.appendChild(div);

  // Restore saved status
  const status = savedStatus[soc] || {};
  const span = document.getElementById(`status_${route}_${shift}_${soc.replace(/\s+/g, '_')}`);
  if (status.arrival) span.innerText += "🟢 Arrived ";
  if (status.departure) span.innerText += "🔴 Departed";
});
  } else {
    showToast("Invalid route or password", true);
  }
}

// ========== ADMIN LOGIN ==========
function adminLogin() {
  const username = document.getElementById("adminUsername").value;
  const password = document.getElementById("adminPassword").value;

  const match = mccAdmins.find(a => a.username === username && a.password === password);

  if (match) {
    document.querySelector("#driverLoginSection").classList.add("hidden");
    document.querySelector("#adminLoginSection").classList.add("hidden");
    document.querySelector(".admin-section").classList.remove("hidden");

    populateRouteSelector();
  } else {
    showToast("Invalid admin credentials", true);
  }
}

// ========== ADMIN FUNCTIONS ==========
function populateRouteSelector() {
  const selector = document.getElementById("routeSelector");
  selector.innerHTML = "";

  Object.keys(routeData).forEach(route => {
    const option = document.createElement("option");
    option.value = route;
    option.textContent = route;
    selector.appendChild(option);
  });

  loadSocietiesForEdit();
}

function loadSocietiesForEdit() {
  const route = document.getElementById("routeSelector").value;
  const editor = document.getElementById("societyEditor");
  editor.innerHTML = "";

  routeData[route].societies.forEach((soc, index) => {
    const div = document.createElement("div");
    div.innerHTML = `${soc} <button onclick="deleteSociety(${index})">Delete</button>`;
    editor.appendChild(div);
  });
}

function addSociety() {
  const newSoc = document.getElementById("newSocietyName").value.trim();
  const route = document.getElementById("routeSelector").value;

  if (newSoc) {
    routeData[route].societies.push(newSoc);
    saveRouteData();
    loadSocietiesForEdit();
    document.getElementById("newSocietyName").value = "";
  }
}

function deleteSociety(index) {
  const route = document.getElementById("routeSelector").value;
  routeData[route].societies.splice(index, 1);
  saveRouteData();
  loadSocietiesForEdit();
}

function addRoute() {
  const newRoute = document.getElementById("newRouteNumber").value.trim();
  if (!routeData[newRoute]) {
    routeData[newRoute] = {
      password: "Milk" + newRoute,
      societies: []
    };
    saveRouteData();
    populateRouteSelector();
    document.getElementById("newRouteNumber").value = "";
  } else {
    showToast("Route already exists", true);
  }
}

// ========== LANGUAGE TOGGLE ==========
function toggleLanguage() {
  const labelRoute = document.getElementById("labelRoute");
  if (labelRoute.textContent === "Route Number") {
    labelRoute.textContent = "मार्ग संख्या";
    document.getElementById("labelPassword").textContent = "पासवर्ड";
    document.getElementById("shiftLabel").textContent = "पाली चुनें";
    document.getElementById("driverLoginButton").textContent = "लॉगिन";
    document.getElementById("adminLoginTitle").textContent = "प्रशासक लॉगिन";
  } else {
    labelRoute.textContent = "Route Number";
    document.getElementById("labelPassword").textContent = "Password";
    document.getElementById("shiftLabel").textContent = "Select Shift";
    document.getElementById("driverLoginButton").textContent = "Login";
    document.getElementById("adminLoginTitle").textContent = "Admin Login";
  }
}
function bulkAddRoute() {
  const routeNumber = document.getElementById("bulkRouteNumber").value.trim();
  const rawText = document.getElementById("bulkSocieties").value.trim();

  if (!routeNumber || !rawText) {
    showToast("Please enter both route number and societies.", true);
    return;
  }

  // Handle: comma, newline, tab (Excel columns), mixed delimiters
  let societies = rawText
    .split(/[\n,\t]+/)
    .map(s => s.trim())
    .filter(s => s.length > 0);

  if (societies.length === 0) {
    showToast("No valid societies provided.", true);
    return;
  }

  // Load existing route data
  let data = JSON.parse(localStorage.getItem("routeData")) || {};

  // Add or overwrite the route
  data[routeNumber] = {
    password: `Milk${routeNumber}`,
    societies: societies
  };

  // Save updated data
  localStorage.setItem("routeData", JSON.stringify(data));

  // Refresh dropdown
  populateRouteSelector();

  // Clear input fields
  document.getElementById("bulkRouteNumber").value = "";
  document.getElementById("bulkSocieties").value = "";

  showToast(`✅ Route ${routeNumber} added with ${societies.length} societies.`, false);
}
function markStatus(route, shift, society, type, btn) {
  const statusKey = `status_${route}_${shift}`;
  let savedStatus = JSON.parse(localStorage.getItem(statusKey)) || {};

  if (!savedStatus[society]) savedStatus[society] = {};
  savedStatus[society][type] = true;

  localStorage.setItem(statusKey, JSON.stringify(savedStatus));

  const statusSpan = document.getElementById(`status_${route}_${shift}_${society.replace(/\s+/g, '_')}`);
  statusSpan.innerText = "";
  if (savedStatus[society].arrival) statusSpan.innerText += "🟢 Arrived ";
  if (savedStatus[society].departure) statusSpan.innerText += "🔴 Departed";

  showToast(`${type.charAt(0).toUpperCase() + type.slice(1)} marked for ${society}`);
}
// ========== TOAST ==========
function showToast(msg, isError = false) {
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.className = "toast show " + (isError ? "error" : "info");
  setTimeout(() => toast.classList.remove("show"), 3000);
}

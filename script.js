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
  const date = new Date().toISOString().slice(0, 10); // today's date
localStorage.setItem("currentRoute", route);
localStorage.setItem("currentShift", shift);
localStorage.setItem("currentDate", date);

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

    showAdminTab('routes'); // ✅ Open default tab

    // 🟢 Add all route dropdown populators:
    populateRouteSelector();              // Optional (used somewhere?)
    populateSummaryRouteFilter();         // ✅ Summary filters
    populateSummaryRouteDropdown();       // ✅ Summary dropdown
    populateAdminRouteDropdown();         // ✅ Logs dropdown
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

  if (!routeData[route] || !routeData[route].societies) return;

  routeData[route].societies.forEach((soc, index) => {
    const div = document.createElement("div");
    div.innerHTML = `${soc} <button onclick="deleteSociety(${index})">Delete</button>`;
    editor.appendChild(div);
  });

  // ✅ Also show driver status table for this route
  showAdminStatus(route);
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
function populateAdminRouteDropdown() {
  const routeData = JSON.parse(localStorage.getItem("routeData") || "{}");
  const selector = document.getElementById("adminRouteFilter");
  selector.innerHTML = '<option value="">All Routes</option>';
  for (let route in routeData) {
    const opt = document.createElement("option");
    opt.value = route;
    opt.textContent = route;
    selector.appendChild(opt);
  }
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
  const date = new Date().toISOString().slice(0, 10); // today's date
  const time = new Date().toLocaleTimeString();

  const statusKey = `status_${route}_${shift}_${date}`;
  const savedStatus = JSON.parse(localStorage.getItem(statusKey)) || {};

  if (!savedStatus[society]) {
    savedStatus[society] = {};
  }

  savedStatus[society][type] = time;

  localStorage.setItem(statusKey, JSON.stringify(savedStatus));

  const span = document.getElementById(`status_${route}_${shift}_${society.replace(/\s+/g, '_')}`);
  span.innerText = "";

  if (savedStatus[society].arrival) {
    span.innerText += `🟢 Arrived at ${savedStatus[society].arrival} `;
  }
  if (savedStatus[society].departure) {
    span.innerText += `🔴 Departed at ${savedStatus[society].departure}`;
  }
}
function showAdminStatus(routeNumber) {
  const data = JSON.parse(localStorage.getItem("routeData")) || {};
  const status = JSON.parse(localStorage.getItem("arrivalDispatchStatus") || "{}");
  const route = data[routeNumber];
  const shift = "Morning"; // or allow shift selection later

  if (!route) return;

  let html = `<table border="1" cellpadding="8" style="border-collapse: collapse; width: 100%;">
                <tr>
                  <th>Society</th>
                  <th>Arrival</th>
                  <th>Dispatch</th>
                </tr>`;

  route.societies.forEach(society => {
    const societyKey = `${routeNumber}_${shift}_${society}`;
    const stat = status[societyKey] || { arrival: false, dispatch: false };

    html += `<tr>
      <td>${society}</td>
      <td style="text-align:center;">${stat.arrival ? "✅" : "❌"}</td>
      <td style="text-align:center;">${stat.dispatch ? "✅" : "❌"}</td>
    </tr>`;
  });

  html += `</table>`;
  document.getElementById("adminStatusView").innerHTML = html;
}
function populateFilterRoutes() {
  const routeDropdown = document.getElementById("filterRoute");
  routeDropdown.innerHTML = `<option value="">All Routes</option>`; // Reset

  const data = JSON.parse(localStorage.getItem("routeData")) || {};

  Object.keys(data).forEach(route => {
    const option = document.createElement("option");
    option.value = route;
    option.textContent = route;
    routeDropdown.appendChild(option);
  });
}
function applyAdminFilters() {
  const date = document.getElementById("filterDate").value;
  const route = document.getElementById("filterRoute").value;
  const shift = document.getElementById("filterShift").value;

  const tableDiv = document.getElementById("adminStatusTable");
  tableDiv.innerHTML = "";

  if (!date) {
    showToast("Please select a date first", true);
    return;
  }

  let html = `<table border="1" cellspacing="0" cellpadding="5">
    <tr>
      <th>#</th>
      <th>Route</th>
      <th>Shift</th>
      <th>Society</th>
      <th>Arrival</th>
      <th>Departure</th>
    </tr>`;

  let count = 0;

  const routeData = JSON.parse(localStorage.getItem("routeData")) || {};

  Object.keys(routeData).forEach(routeKey => {
    if (route && route !== routeKey) return;

    ["Morning", "Evening"].forEach(shiftType => {
      if (shift && shift !== shiftType) return;

      const statusKey = `status_${routeKey}_${shiftType}_${date}`;
      const statusObj = JSON.parse(localStorage.getItem(statusKey)) || {};

      Object.keys(statusObj).forEach(society => {
        const status = statusObj[society];
        if (status.arrival || status.departure) {
          count++;
          html += `
            <tr>
              <td>${count}</td>
              <td>${routeKey}</td>
              <td>${shiftType}</td>
              <td>${society}</td>
              <td>${status.arrival || ""}</td>
              <td>${status.departure || ""}</td>
            </tr>
          `;
        }
      });
    });
  });

  html += "</table>";

  if (count === 0) {
    tableDiv.innerHTML = "⚠️ No records found for the selected filters.";
  } else {
    tableDiv.innerHTML = html;
  }
}
// ✅ DAILY VISIT SUMMARY FUNCTIONS

function populateSummaryRouteFilter() {
  const routeDropdown = document.getElementById("summaryRouteFilter");
  routeDropdown.innerHTML = `<option value="">All Routes</option>`;

  const routeData = JSON.parse(localStorage.getItem("routeData") || "{}");
  Object.keys(routeData).forEach(route => {
    const opt = document.createElement("option");
    opt.value = route;
    opt.textContent = route;
    routeDropdown.appendChild(opt);
  });
}

function loadAdminSummary() {
  const selectedDate = document.getElementById("summaryDateFilter").value;
  const selectedRoute = document.getElementById("summaryRouteFilter").value;

  const logs = JSON.parse(localStorage.getItem("driverLogs") || "[]");
  const summaryTable = document.querySelector("#summaryTable tbody");
  summaryTable.innerHTML = "";

  const filtered = logs.filter(log =>
    (!selectedDate || log.date === selectedDate) &&
    (!selectedRoute || log.route === selectedRoute)
  );

  filtered.forEach(entry => {
    const tr = document.createElement("tr");

    const arrival = entry.arrival || "-";
    const departure = entry.departure || "-";
    let duration = "-";

    if (entry.arrival && entry.departure) {
      const start = new Date(`1970-01-01T${entry.arrival}`);
      const end = new Date(`1970-01-01T${entry.departure}`);
      const diff = (end - start) / 60000; // minutes

      if (!isNaN(diff) && diff >= 0) {
        const hrs = Math.floor(diff / 60);
        const mins = Math.floor(diff % 60);
        duration = `${hrs}h ${mins}m`;
      }
    }

    tr.innerHTML = `
      <td>${entry.society}</td>
      <td>${arrival}</td>
      <td>${departure}</td>
      <td>${duration}</td>
    `;

    summaryTable.appendChild(tr);
  });
}

function exportCSV() {
  const rows = [["Society", "Arrival Time", "Departure Time", "Duration"]];
  const trs = document.querySelectorAll("#summaryTable tbody tr");

  trs.forEach(tr => {
    const cells = tr.querySelectorAll("td");
    const row = Array.from(cells).map(td => td.textContent.trim());
    rows.push(row);
  });

  const csvContent = rows.map(e => e.join(",")).join("\n");
  const blob = new Blob([csvContent], { type: "text/csv" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "visit_summary.csv";
  a.click();
}
function filterDriverLogs() {
  const date = document.getElementById("adminDate").value;
  const route = document.getElementById("adminRouteFilter").value;
  const shift = document.getElementById("adminShiftFilter").value;

  const logs = JSON.parse(localStorage.getItem("driverLogs") || "[]");

  // Filter logs
  const filtered = logs.filter(log =>
    (!date || log.date === date) &&
    (!route || log.route === route) &&
    (!shift || log.shift === shift)
  );

  const container = document.getElementById("adminStatusTable");
  container.innerHTML = "";

  if (filtered.length === 0) {
    container.innerHTML = "<p>No logs found.</p>";
    return;
  }

  const table = document.createElement("table");
  table.innerHTML = `
    <tr>
      <th>Date</th>
      <th>Route</th>
      <th>Shift</th>
      <th>Society</th>
      <th>Arrival</th>
      <th>Departure</th>
    </tr>
  `;

  filtered.forEach(log => {
    table.innerHTML += `
      <tr>
        <td>${log.date}</td>
        <td>${log.route}</td>
        <td>${log.shift}</td>
        <td>${log.society}</td>
        <td>${log.arrivalTime || "-"}</td>
        <td>${log.departureTime || "-"}</td>
      </tr>
    `;
  });

  container.appendChild(table);
}
function loadAdminSummary() {
  const date = document.getElementById("summaryDateFilter").value;
  const route = document.getElementById("summaryRouteFilter").value;
  const tbody = document.querySelector("#summaryTable tbody");
  tbody.innerHTML = "";

  if (!date || !route) {
    alert("Please select both date and route.");
    return;
  }

  const logs = JSON.parse(localStorage.getItem("driverLogs") || "[]");

  const filteredLogs = logs.filter(log =>
    log.date === date && log.route === route
  );

  filteredLogs.forEach(log => {
    const row = document.createElement("tr");

    const duration = log.arrivalTime && log.departureTime
      ? getDuration(log.arrivalTime, log.departureTime)
      : "";

    row.innerHTML = `
      <td>${log.society}</td>
      <td>${log.arrivalTime || "-"}</td>
      <td>${log.departureTime || "-"}</td>
      <td>${duration}</td>
    `;
    tbody.appendChild(row);
  });
}

function getDuration(start, end) {
  const s = new Date("1970-01-01T" + start);
  const e = new Date("1970-01-01T" + end);
  const diff = (e - s) / 60000; // minutes
  return isNaN(diff) ? "" : `${Math.floor(diff)} mins`;
}
function populateSummaryRouteDropdown() {
  const select = document.getElementById("summaryRouteFilter");
  select.innerHTML = '<option value="">Select Route</option>';

  const data = JSON.parse(localStorage.getItem("routeData") || "{}");
  for (let route in data) {
    const option = document.createElement("option");
    option.value = route;
    option.textContent = route;
    select.appendChild(option);
  }
}
const MilkRouteTracker = {
  init: function () {
    // Load data or sample defaults
    if (!localStorage.getItem("routeData")) {
      saveRouteData(); // Save default hardcoded routeData
    }

    // Populate dropdowns once
    populateRouteSelector();
    populateFilterRoutes();
    populateAdminRouteDropdown();
    populateSummaryRouteDropdown();
    populateSummaryRouteFilter();

    console.log("✅ MilkRouteTracker initialized.");
  }
};
function showAdminTab(tabName) {
  document.querySelectorAll('.admin-tab').forEach(tab => tab.classList.add('hidden'));

  const selectedTab = document.getElementById('adminTab-' + tabName);
  if (selectedTab) {
    selectedTab.classList.remove('hidden');

    if (tabName === 'routes') {
      renderRouteManagementUI(); // 🔁 Show routes when tab is opened
    }
  }
}
function renderRouteManagementUI() {
  const container = document.getElementById("routeManagementArea");
  container.innerHTML = ''; // Clear "Loading..."

  const heading = document.createElement("h3");
  heading.textContent = "Select Route to Edit Societies";
  container.appendChild(heading);

  const dropdown = document.createElement("select");
  dropdown.id = "routeSelectDropdown";
  container.appendChild(dropdown);

  // Load routes from localStorage
  const routeData = JSON.parse(localStorage.getItem("routeData") || "{}");

  // Add route options
  Object.keys(routeData).forEach(route => {
    const option = document.createElement("option");
    option.value = route;
    option.textContent = route;
    dropdown.appendChild(option);
  });

  // Add message if no routes
  if (Object.keys(routeData).length === 0) {
    const msg = document.createElement("p");
    msg.textContent = "No routes found. Add routes in Settings.";
    container.appendChild(msg);
  }

  // Add a button to edit selected route
  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit Societies";
  editBtn.onclick = () => {
    const selectedRoute = dropdown.value;
    alert("Route selected: " + selectedRoute);
    // (You can replace this alert with society editing logic later)
  };
  container.appendChild(editBtn);
}
// ========== TOAST ==========
function showToast(msg, isError = false) {
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.className = "toast show " + (isError ? "error" : "info");
  setTimeout(() => toast.classList.remove("show"), 3000);
}

// 🟢 Initial load
window.onload = function () {
  MilkRouteTracker.init(); // 🔁 Only call this — it includes everything needed
  document.querySelector(".driver-section").classList.add("hidden");
  document.querySelector(".admin-section").classList.add("hidden");
};

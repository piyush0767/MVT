// ========== DATA INITIALIZATION ==========
const MilkRouteTracker = {
  // Initialize sample data if not exists
  init: function() {
    if (!localStorage.getItem("initialized")) {
      localStorage.setItem("routeData", JSON.stringify(this.routeData));
      localStorage.setItem("mccAdmins", JSON.stringify(this.mccAdmins));
      localStorage.setItem("initialized", "yes");
      alert("✅ Sample data loaded! Try logging in now.");
    } else {
      // Load existing data
      const storedRoutes = localStorage.getItem("routeData");
      if (storedRoutes) this.routeData = JSON.parse(storedRoutes);
    }
  },

  // MCC Admin data
  mccAdmins: {
    "Khushipur": {
      password: "Khushi123",
      routes: ["1801", "1802", "1803", "1805", "1808", "1809", "1810", "1811",
              "1812", "1813", "1814", "1815", "1816", "1817", "1818", "1819",
              "1820", "1821", "1822", "1823", "1824", "1825", "1826", "1827",
              "1828", "1830", "1831", "1834"]
    },
    "Shivpur": {
      password: "admin456",
      routes: ["1805", "1808", "1809"]
    }
  },

  // Complete Route Data
  routeData: {
    "1801": {
    password: "Milk1801",
    societies: [
      "CHADIYA D.U. ASSOCIATION",
      "SHIKHADI D.U. ASSOCIATION",
      "ASHOGAPUR D.U. ASSOCIATION",
      "BHOR KALA D U ASSOCIATION",
      "KALYANPUR D U ASSOCIATION",
      "DOMANPUR D.U. ASSOCIATION",
      "MAI HARDOPUR D.U. ASSOCIATION"
    ]
  },
  "1802": {
    password: "Milk1802",
    societies: [
      "DUBANI D.U. ASSOCIATION",
      "LAPSEE D.U. ASSOCIATION",
      "PIPARADAN D.U. ASSOCIATION",
      "MEWALI D.U. ASSOCIATION",
      "JIGNAUDEE D U ASSOCIATION",
      "BAISUKHIYA D.U. ASSOCIATION",
      "KOLHAN D.U. ASSOCIATION"
    ]
  },
  "1803": {
    password: "Milk1803",
    societies: [
      "PREMAAPUR D.U. ASSOCIATION",
      "NAYAPURA HASINPUR D.U. ASSOCIATION",
      "HASINPUR D.U. ASSOCIATION",
      "RAMHADH KALAN D.U. ASSOCIATION",
      "SEEKHAD D.U. ASSOCIATION"
    ]
  },
  "1805": {
    password: "Milk1805",
    societies: [
      "MATIYARI D U ASSOCIATION",
      "MUKTAPOUR D.U. ASSOCIATION",
      "BHARATPUR D.U. ASSOCIATION",
      "JADDUPUR D.U. ASSOCIATION",
      "SONBARSA D.U. ASSOCIATION",
      "UPRAUTH D.U. ASSOCIATION",
      "UCHETHA D.U. ASSOCIATION"
    ]
  },
  "1808": {
    password: "Milk1808",
    societies: [
      "JALALPUR D.U. ASSOCIATION",
      "BAJHA D.U. ASSOCIATION",
      "SEMARI D.U. ASSOCIATION",
      "MARUI D.U. ASSOCIATION",
      "MAHAMALPUR D U ASSOCIATION",
      "GAHARWARI D.U. ASSOCIATION",
      "BADHAINI D.U. ASSOCIATION"
    ]
  },
  "1809": {
    password: "Milk1809",
    societies: [
      "HARDARA D.U. ASSOCIATION",
      "MITAEE D.U. ASSOCIATION",
      "DILMAN DEVRIYA D U ASSOCIATION",
      "TILANGA  D.U. ASSOCIATION",
      "KHUTAHA  D.U. ASSOCIATION",
      "SINHAR KALA D.U. ASSOCIATION"
    ]
  },
  "1810": {
    password: "Milk1810",
    societies: [
      "KARDHANA D.U. ASSOCIATION",
      "MILKI CHAK D.U. ASSOCIATION",
      "BARKI D.U. ASSOCIATION",
      "ADAMAPUR MAHANAG D.U. ASSOCIATION",
      "TATEHARA D.U. ASSOCIATION",
      "KALLIPUR D.U. ASSOCIATION"
    ]
  },
  "1811": {
    password: "Milk1811",
    societies: [
      "BAGAHI D.U. ASSOCIATION",
      "SAHASPURA D.U. ASSOCIATION",
      "JALALPUR MAFI D U ASSOCIATION",
      "BAGHEDA D U ASSOCIATION",
      "NAKAHARA  D.U. ASSOCIATION",
      "BELA D.U. ASSOCIATION"
    ]
  },
  "1812": {
    password: "Milk1812",
    societies: [
      "JHAUWA D.U. ASSOCIATION",
      "SARWARKHANI D.U. ASSOCIATION",
      "RAMAIPUR  D U ASSOCIATION",
      "PALLAHIYA D.U. ASSOCIATION",
      "AUSANPUR D.U. ASSOCIATION",
      "LATHAYA D.U. ASSOCIATION",
      "SAUPUR D.U. ASSOCIATION"
    ]
  },
  "1813": {
    password: "Milk1813",
    societies: [
      "VISHWANATHPUR D.U. ASSOCIATION",
      "TIKAPUR D.U. ASSOCIATION",
      "MADHOPUR D.U. ASSOCIATION",
      "BADAULI D.U. ASSOCIATION",
      "LACHHA PATTI D.U. ASSOCIATION",
      "BELVARIYA D.U. ASSOCIATION"
    ]
  },
  "1814": {
    password: "Milk1814",
    societies: [
      "BARAINI D.U. ASSOCIATION",
      "KEVATAVEER D.U. ASSOCIATION",
      "BARAINEE 2 D.U. ASSOCIATION",
      "BANAPUR D.U. ASSOCIATION",
      "MAJHAWA D.U. ASSOCIATION",
      "PUREY GAUN D U ASSOCIATION",
      "GADHAULI D U ASSOCIATION"
    ]
  },
  "1815": {
    password: "Milk1815",
    societies: [
      "ARJUNPUR D.U. ASSOCIATION",
      "NIVADA D.U. ASSOCIATION",
      "KHARARIYA D.U. ASSOCIATION",
      "BAULIYA D.U. ASSOCIATION",
      "GADDOPUR D.U. ASSOCIATION",
      "FATTEHPUR D.U. ASSOCIATION"
    ]
  },
  "1816": {
    password: "Milk1816",
    societies: [
      "BAGHAN D.U. ASSOCIATION",
      "NIYAMAT PUR KALA D.U. ASSOCIATION",
      "SUJAULI D.U. ASSOCIATION"
    ]
  },
  "1817": {
    password: "Milk1817",
    societies: [
const routeData = {
  "1801": {
    password: "Milk1801",
    societies: [
      "CHADIYA D.U. ASSOCIATION",
      "SHIKHADI D.U. ASSOCIATION",
      "ASHOGAPUR D.U. ASSOCIATION",
      "BHOR KALA D U ASSOCIATION",
      "KALYANPUR D U ASSOCIATION",
      "DOMANPUR D.U. ASSOCIATION",
      "MAI HARDOPUR D.U. ASSOCIATION"
    ]
  },
  "1802": {
    password: "Milk1802",
    societies: [
      "DUBANI D.U. ASSOCIATION",
      "LAPSEE D.U. ASSOCIATION",
      "PIPARADAN D.U. ASSOCIATION",
      "MEWALI D.U. ASSOCIATION",
      "JIGNAUDEE D U ASSOCIATION",
      "BAISUKHIYA D.U. ASSOCIATION",
      "KOLHAN D.U. ASSOCIATION"
    ]
  },
  "1803": {
    password: "Milk1803",
    societies: [
      "PREMAAPUR D.U. ASSOCIATION",
      "NAYAPURA HASINPUR D.U. ASSOCIATION",
      "HASINPUR D.U. ASSOCIATION",
      "RAMHADH KALAN D.U. ASSOCIATION",
      "SEEKHAD D.U. ASSOCIATION"
    ]
  },
  "1805": {
    password: "Milk1805",
    societies: [
      "MATIYARI D U ASSOCIATION",
      "MUKTAPOUR D.U. ASSOCIATION",
      "BHARATPUR D.U. ASSOCIATION",
      "JADDUPUR D.U. ASSOCIATION",
      "SONBARSA D.U. ASSOCIATION",
      "UPRAUTH D.U. ASSOCIATION",
      "UCHETHA D.U. ASSOCIATION"
    ]
  },
  "1808": {
    password: "Milk1808",
    societies: [
      "JALALPUR D.U. ASSOCIATION",
      "BAJHA D.U. ASSOCIATION",
      "SEMARI D.U. ASSOCIATION",
      "MARUI D.U. ASSOCIATION",
      "MAHAMALPUR D U ASSOCIATION",
      "GAHARWARI D.U. ASSOCIATION",
      "BADHAINI D.U. ASSOCIATION"
    ]
  },
  "1809": {
    password: "Milk1809",
    societies: [
      "HARDARA D.U. ASSOCIATION",
      "MITAEE D.U. ASSOCIATION",
      "DILMAN DEVRIYA D U ASSOCIATION",
      "TILANGA  D.U. ASSOCIATION",
      "KHUTAHA  D.U. ASSOCIATION",
      "SINHAR KALA D.U. ASSOCIATION"
    ]
  },
  "1810": {
    password: "Milk1810",
    societies: [
      "KARDHANA D.U. ASSOCIATION",
      "MILKI CHAK D.U. ASSOCIATION",
      "BARKI D.U. ASSOCIATION",
      "ADAMAPUR MAHANAG D.U. ASSOCIATION",
      "TATEHARA D.U. ASSOCIATION",
      "KALLIPUR D.U. ASSOCIATION"
    ]
  },
  "1811": {
    password: "Milk1811",
    societies: [
      "BAGAHI D.U. ASSOCIATION",
      "SAHASPURA D.U. ASSOCIATION",
      "JALALPUR MAFI D U ASSOCIATION",
      "BAGHEDA D U ASSOCIATION",
      "NAKAHARA  D.U. ASSOCIATION",
      "BELA D.U. ASSOCIATION"
    ]
  },
  "1812": {
    password: "Milk1812",
    societies: [
      "JHAUWA D.U. ASSOCIATION",
      "SARWARKHANI D.U. ASSOCIATION",
      "RAMAIPUR  D U ASSOCIATION",
      "PALLAHIYA D.U. ASSOCIATION",
      "AUSANPUR D.U. ASSOCIATION",
      "LATHAYA D.U. ASSOCIATION",
      "SAUPUR D.U. ASSOCIATION"
    ]
  },
  "1813": {
    password: "Milk1813",
    societies: [
      "VISHWANATHPUR D.U. ASSOCIATION",
      "TIKAPUR D.U. ASSOCIATION",
      "MADHOPUR D.U. ASSOCIATION",
      "BADAULI D.U. ASSOCIATION",
      "LACHHA PATTI D.U. ASSOCIATION",
      "BELVARIYA D.U. ASSOCIATION"
    ]
  },
  "1814": {
    password: "Milk1814",
    societies: [
      "BARAINI D.U. ASSOCIATION",
      "KEVATAVEER D.U. ASSOCIATION",
      "BARAINEE 2 D.U. ASSOCIATION",
      "BANAPUR D.U. ASSOCIATION",
      "MAJHAWA D.U. ASSOCIATION",
      "PUREY GAUN D U ASSOCIATION",
      "GADHAULI D U ASSOCIATION"
    ]
  },
  "1815": {
    password: "Milk1815",
    societies: [
      "ARJUNPUR D.U. ASSOCIATION",
      "NIVADA D.U. ASSOCIATION",
      "KHARARIYA D.U. ASSOCIATION",
      "BAULIYA D.U. ASSOCIATION",
      "GADDOPUR D.U. ASSOCIATION",
      "FATTEHPUR D.U. ASSOCIATION"
    ]
  },
  "1816": {
    password: "Milk1816",
    societies: [
      "BAGHAN D.U. ASSOCIATION",
      "NIYAMAT PUR KALA D.U. ASSOCIATION",
      "SUJAULI D.U. ASSOCIATION"
    ]
  },
  "1817": {
    password: "Milk1817",
    societies: [
      "KOLANA D.U. ASSOCIATION",
      "PAHARI D.U. ASSOCIATION",
      "RUPAUDHA D.U. ASSOCIATION",
      "RAMPUR D.U. ASSOCIATION"
    ]
  },
  "1818": {
    password: "Milk1818",
    societies: [
      "JAMUI D.U. ASSOCIATION",
      "BHOJPUR PAHADI D.U. ASSOCIATION",
      "PARSANPUR D.U. ASSOCIATION",
      "AAMGHAT D.U. ASSOCIATION",
      "CHAPGHNA D.U. ASSOCIATION",
      "KAMHARI D.U. ASSOCIATION",
      "TIGODA D.U. ASSOCIATION"
    ]
  },
  "1819": {
    password: "Milk1819",
    societies: [
      "NAUDIHAWA D.U. ASSOCIATION",
      "PAHARIPAR D.U. ASSOCIATION",
      "UKHDAND D.U. ASSOCIATION",
      "GAHIRA D.U. ASSOCIATION",
      "UMARIYA D.U. ASSOCIATION",
      "NAUGADAWAN D.U. ASSOCIATION",
      "BIROHIYA D.U. ASSOCIATION",
      "GAURA D.U. ASSOCIATION"
    ]
  },
  "1820": {
    password: "Milk1820",
    societies: [
      "KACHARIYAN D.U. ASSOCIATION",
      "KHAJURI D.U. ASSOCIATION",
      "VEHADA D.U. ASSOCIATION",
      "MAHGAON D.U. ASSOCIATION",
      "VIKRAMPUR KALA D.U. ASSOCIATION",
      "SAREEPUR D.U. ASSOCIATION",
      "THEGEEPUR D.U. ASSOCIATION"
    ]
  },
  "1821": {
    password: "Milk1821",
    societies: [
      "DEWAHI D.U. ASSOCIATION",
      "NEVADHIYA D.U. ASSOCIATION",
      "KANAURAGHAT D.U. ASSOCIATION",
      "SARAIYA PATTI D.U. ASSOCIATION",
      "BELWAN D.U. ASSOCIATION",
      "MISHRAKAPURA D.U. ASSOCIATION"
    ]
  },
  "1822": {
    password: "Milk1822",
    societies: [
      "MUGWAR D.U. ASSOCIATION",
      "JYA PUR D.U. ASSOCIATION",
      "BAHADURPUR D.U. ASSOCIATION",
      "KUWAKALA D.U. ASSOCIATION",
      "NUNAUTEE D.U. ASSOCIATION",
      "KUSAMI D.U. ASSOCIATION",
      "TENDUA KALA D.U. ASSOCIATION",
      "BARAGAWAN D.U. ASSOCIATION",
      "DHADHORPUR D.U. ASSOCIATION"
    ]
  },
  "1823": {
    password: "Milk1823",
    societies: [
      "GAHIYA D.U. ASSOCIATION",
      "SAGARPUR D.U. ASSOCIATION",
      "KAMASIN D.U. ASSOCIATION",
      "MAWAIYA D.U. ASSOCIATION",
      "MUZAHRA KHURD D.U. ASSOCIATION",
      "MUJEHARA KALA  D.U. ASSOCIATION",
      "BALLIPARWA D.U. ASSOCIATION"
    ]
  },
  "1824": {
    password: "Milk1824",
    societies: [
      "DILAWALPUR D.U. ASSOSIATION",
      "JAGAPATTI D.U. ASSOCIATION",
      "BAIRWAN D.U. ASSOCIATION",
      "PEDUKA D.U. ASSOCIATION",
      "KURSATO D.U. ASSOCIATION",
      "BESAHUPUR D.U. ASSOCIATION",
      "GHATMPUR D.U. ASSOCIATION",
      "KANERI D.U. ASSOCIATION"
    ]
  },
  "1825": {
    password: "Milk1825",
    societies: [
      "MAJHLI PATTI D.U. ASSOCIATION",
      "CHINDILIKH D.U. ASSOCIATION",
      "LAKHANPUR D.U. ASSOCIATION",
      "DERWA D.U. ASSOCIATION",
      "DHAURAHARA D.U. ASSOCIATION",
      "MALLEPUR D.U. ASSOCIATION",
      "BARJI KALA D.U. ASSOCIATION",
      "MADAN PATTI D.U. ASSOCIATION"
    ]
  },
  "1826": {
    password: "Milk1826",
    societies: [
      "MEDIA D.U. ASSOCIATION",
      "KARSANA D.U. ASSOCIATION",
      "SHAHENSHAH PUR D.U. ASSOCIATION",
      "TIKARI D.U. ASSOCIATION",
      "USMANPURA D.U. ASSOCIATION",
      "ADHALPURA D.U. ASSOCIATION",
      "JAGARDEVPUR D.U. ASSOCIATION",
      "KURAHUAN D.U. ASSOCIATION",
      "BANDEPUR D.U. ASSOCIATION"
    ]
  },
  "1827": {
    password: "Milk1827",
    societies: [
      "LACHIRAMPUR D.U. ASSOCIATION",
      "NAHVANIPUR D.U. ASSOCIATION",
      "NARASADA D.U. ASSOCIATION",
      "BENIPUR  D.U. ASSOCIATION",
      "DILAWELPUR 2 D.U. ASSOCIATION",
      "CHHOTI KHAJURI D.U. ASSOCIATION",
      "SAKALPUR D.U. ASSOCIATION"
    ]
  },
  "1828": {
    password: "Milk1828",
    societies: [
      "RAKHI NEWADA D.U. ASSOCIATION",
      "KOILAR D.U. ASSOCIATION",
      "KHAMAUNA D.U. ASSOCIATION",
      "BALRAMPUR D.U. ASSOCIATION",
      "KUNDI D.U. ASSOCIATION",
      "BALUA D.U. ASSOCIATION",
      "HARSOS D.U. ASSOCIATION"
    ]
  },
  "1830": {
    password: "Milk1830",
    societies: [
      "KORRI D.U. ASSOCIATION",
      "BANAULI D.U. ASSOCIATION",
      "RUPAPUR D.U. ASSOCIATION",
      "GEGARAV D U ASSOCIATION",
      "KARENUA D.U. ASSOCIATION",
      "BHOGAON D.U. ASSOCIATION",
      "THATHRA D.U. ASSOCIATION",
      "SAHASEPUR D.U. ASSOCIATION"
    ]
  },
  "1831": {
    password: "Milk1831",
    societies: [
      "JOSRA D U ASSOCIATION",
      "CHAPAUR KALA D.U. ASSOCIATION",
      "JIUTEE D.U. ASSOCIATION",
      "PATTI KA PURA D.U. ASSOCIATION",
      "JAMAURI D.U. ASSOCIATION"
    ]
  },
  "1834": {
    password: "Milk1834",
    societies: [
      "JAKHINI D.U. ASSOCIATION",
      "KANDAWA D.U. ASSOCIATION",
      "BAIRAMPUR D.U. ASSOCIATION",
      "CHAUKIYA D.U. ASSOCIATION",
      "RAMPUR DABAHI D.U. ASSOCIATION",
      "SARIYA PASCHIMI D.U. ASSOCIATION"
    ]
  }
};
  // Current session data
  currentSession: {
    mccName: "",
    driverRoute: "",
    shift: ""
  },

  // ========== CORE FUNCTIONS ==========
  saveData: function() {
    localStorage.setItem("routeData", JSON.stringify(this.routeData));
  },

// Enhanced Driver Login Function
driverLogin: function() {
  // Get input values
  const route = document.getElementById("routeNumber").value.trim();
  const password = document.getElementById("password").value;
  const shift = document.getElementById("shiftSelector").value;

  // Validate inputs
  if (!route || !password || !shift) {
    this.showToast("Please fill all fields", "error");
    return;
  }

  // Check credentials
  if (!this.routeData[route] || this.routeData[route].password !== password) {
    this.showToast("Invalid Route No or Password", "error");
    return;
  }

  // Start session
  this.currentSession = {
    driverRoute: route,
    shift: shift,
    loginTime: new Date().toISOString(),
    societies: {}
  };

  // Update UI
  this.showDriverDashboard(route, shift);
  this.renderSocietyList(route);
},

// Show driver dashboard
showDriverDashboard: function(route, shift) {
  document.querySelector(".login-section").classList.add("hidden");
  document.querySelector(".driver-section").classList.remove("hidden");
  
  document.getElementById("driverRoute").textContent = route;
  document.getElementById("shiftDisplay").textContent = `Shift: ${shift}`;
  document.getElementById("loginTime").textContent = `Login: ${new Date().toLocaleTimeString()}`;
},

// Render society list with tracking
renderSocietyList: function(route) {
  const societyList = document.getElementById("societyList");
  societyList.innerHTML = "";

  this.routeData[route].societies.forEach((society, index) => {
    const societyItem = document.createElement("div");
    societyItem.className = "society-item";
    societyItem.innerHTML = `
      <div class="society-info">
        <span class="society-name">${index + 1}. ${society}</span>
        <div class="time-display">
          <span class="arrival-time hidden">Arrived: --:--</span>
          <span class="dispatch-time hidden">Dispatched: --:--</span>
        </div>
      </div>
      <div class="society-actions">
        <button class="arrival-btn" data-id="${index}">
          <span class="icon">✅</span>
          <span class="text">Arrived</span>
        </button>
        <button class="dispatch-btn" data-id="${index}">
          <span class="icon">📤</span>
          <span class="text">Dispatch</span>
        </button>
      </div>
    `;
    societyList.appendChild(societyItem);
  });

  // Add event listeners
  this.setupSocietyButtons();
},

// Setup button handlers with touch support
setupSocietyButtons: function() {
  // Handle both click and touch events
  const handleAction = (e, actionType) => {
    const button = e.currentTarget;
    const societyIndex = button.getAttribute("data-id");
    const time = new Date().toLocaleTimeString();
    
    // Update UI
    button.classList.add("active");
    const timeDisplay = button.closest(".society-item").querySelector(`.${actionType}-time`);
    timeDisplay.textContent = `${actionType === "arrival" ? "Arrived" : "Dispatched"}: ${time}`;
    timeDisplay.classList.remove("hidden");
    
    // Store in session
    if (!this.currentSession.societies[societyIndex]) {
      this.currentSession.societies[societyIndex] = {};
    }
    this.currentSession.societies[societyIndex][actionType] = time;
  };

  // Arrival buttons
  document.querySelectorAll(".arrival-btn").forEach(btn => {
    btn.addEventListener("click", (e) => handleAction(e, "arrival"));
    btn.addEventListener("touchend", (e) => {
      e.preventDefault();
      handleAction(e, "arrival");
    });
  });

  // Dispatch buttons
  document.querySelectorAll(".dispatch-btn").forEach(btn => {
    btn.addEventListener("click", (e) => handleAction(e, "dispatch"));
    btn.addEventListener("touchend", (e) => {
      e.preventDefault();
      handleAction(e, "dispatch");
    });
  });
},

// Show toast notification (better than alert)
showToast: function(message, type = "info") {
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.textContent = message;
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.classList.add("fade-out");
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}
  // MCC Admin login function
  mccAdminLogin: function() {
    const mccName = document.getElementById("mccName").value.trim();
    const mccPassword = document.getElementById("mccPassword").value;

    if (this.mccAdmins[mccName] && this.mccAdmins[mccName].password === mccPassword) {
      this.currentSession.mccName = mccName;
      
      // Update UI
      document.querySelector(".login-section").classList.add("hidden");
      document.querySelector(".admin-section").classList.remove("hidden");
      document.getElementById("adminRoute").textContent = mccName;

      this.renderAdminRoutes(mccName);
      this.populateRouteDropdown();
    } else {
      alert("Invalid MCC Name or Password");
    }
  },

  // ========== ADMIN FUNCTIONS ==========
  renderAdminRoutes: function(mccName) {
    const routeContainer = document.getElementById("routeData");
    routeContainer.innerHTML = "";

    const adminRoutes = this.mccAdmins[mccName]?.routes || [];
    
    adminRoutes.forEach(route => {
      const routeBlock = document.createElement("div");
      routeBlock.className = "route-block";
      routeBlock.innerHTML = `<h3>Route ${route}</h3>`;

      const societies = this.routeData[route]?.societies || [];
      if (societies.length === 0) {
        routeBlock.innerHTML += "<p>No societies found.</p>";
      } else {
        const list = document.createElement("ul");
        societies.forEach(society => {
          const item = document.createElement("li");
          item.textContent = society;
          list.appendChild(item);
        });
        routeBlock.appendChild(list);
      }

      routeContainer.appendChild(routeBlock);
    });
  },

  populateRouteDropdown: function() {
    const dropdown = document.getElementById("routeSelectToEdit");
    dropdown.innerHTML = '<option value="">Select Route</option>';
    
    for (const route in this.routeData) {
      const option = document.createElement("option");
      option.value = route;
      option.textContent = route;
      dropdown.appendChild(option);
    }
  },

  // ========== INITIALIZATION ==========
  setupEventListeners: function() {
    // Mobile-friendly touch events
    document.getElementById("driverLoginBtn").addEventListener("touchend", (e) => {
      e.preventDefault();
      this.driverLogin();
    });

    document.getElementById("adminLoginBtn").addEventListener("touchend", (e) => {
      e.preventDefault();
      this.mccAdminLogin();
    });

    // Click events for desktop
    document.getElementById("driverLoginBtn").addEventListener("click", () => {
      this.driverLogin();
    });

    document.getElementById("adminLoginBtn").addEventListener("click", () => {
      this.mccAdminLogin();
    });

    // Form submission prevention
    document.querySelectorAll("form").forEach(form => {
      form.addEventListener("submit", (e) => e.preventDefault());
    });
  }
};

// Initialize the application when DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
  MilkRouteTracker.init();
  MilkRouteTracker.setupEventListeners();
});

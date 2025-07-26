const mccAdmins = {
  "Khushipur": {
    password: "admin123",
    routes: [
      "1801", "1802", "1803", "1805", "1808", "1809", "1810", "1811",
      "1812", "1813", "1814", "1815", "1816", "1817", "1818", "1819",
      "1820", "1821", "1822", "1823", "1824", "1825", "1826", "1827",
      "1828", "1830", "1831", "1834"
      ]
  },
  "Shivpur": {
    password: "admin456",
    routes: ["1805", "1808", "1809"]
  }
};
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

function driverLogin() {
  const route = document.getElementById("routeNumber").value.trim();
  const password = document.getElementById("password").value;
  const shift = document.getElementById("shiftSelector").value;

  if (routeData[route] && routeData[route].password === password) {
    document.querySelector(".login-section").classList.add("hidden");
    document.querySelector(".driver-section").classList.remove("hidden");

    document.getElementById("driverRoute").textContent = route;
    document.getElementById("shiftDisplay").textContent = `Shift: ${shift}`;

    const societyList = document.getElementById("societyList");
    societyList.innerHTML = "";

    routeData[route].societies.forEach(society => {
      const div = document.createElement("div");
      div.className = "society";

      const name = document.createElement("span");
      name.textContent = society;

      const arrivalBtn = document.createElement("button");
      arrivalBtn.textContent = "✅";
      arrivalBtn.onclick = () => arrivalBtn.classList.toggle("active");

      const dispatchBtn = document.createElement("button");
      dispatchBtn.textContent = "📤";
      dispatchBtn.onclick = () => dispatchBtn.classList.toggle("active");

      div.appendChild(name);
      div.appendChild(arrivalBtn);
      div.appendChild(dispatchBtn);

      societyList.appendChild(div);
    });

    // Optional for later: use in admin view
    sessionStorage.setItem("driverRoute", route);
    sessionStorage.setItem("driverShift", shift);

  } else {
    alert("Invalid Route No or Password");
  }
}
function mccAdminLogin() {
  const mccName = document.getElementById("mccName").value.trim();
  const mccPassword = document.getElementById("mccPassword").value;

  const adminData = mccAdmins[mccName];

  if (adminData && adminData.password === mccPassword) {
    document.querySelector(".login-section").classList.add("hidden");
    document.querySelector(".admin-section").classList.remove("hidden");

    document.getElementById("adminRoute").textContent = mccName;

    const routeContainer = document.getElementById("routeData");
    routeContainer.innerHTML = "";

    adminData.routes.forEach(route => {
      const routeBlock = document.createElement("div");
      routeBlock.innerHTML = `<h3>Route ${route}</h3>`;

      const societies = routeData[route]?.societies || [];
      societies.forEach(society => {
        const societyDiv = document.createElement("div");
        societyDiv.className = "society";
        societyDiv.innerHTML = `<span>${society}</span>`;
        routeBlock.appendChild(societyDiv);
      });

      routeContainer.appendChild(routeBlock);
      populateRouteDropdown();
    });

  } else {
    alert("Invalid MCC Name or Password");
  }
}
function showAdminPanel(mccName, routes) {
  document.querySelector(".login-section").classList.add("hidden");
  document.querySelector(".admin-panel").classList.remove("hidden");

  document.getElementById("adminMccName").textContent = mccName;
  
  const container = document.getElementById("adminRoutesContainer");
  container.innerHTML = "";

  routes.forEach(route => {
    const routeDiv = document.createElement("div");
    routeDiv.className = "route-card";
    routeDiv.innerHTML = `<h3>Route: ${route}</h3>`;

    const socList = routeData[route]?.societies || [];
    if (socList.length === 0) {
      routeDiv.innerHTML += "<p>No societies found.</p>";
    } else {
      const ul = document.createElement("ul");
      socList.forEach(soc => {
        const li = document.createElement("li");
        li.textContent = soc;
        ul.appendChild(li);
      });
      routeDiv.appendChild(ul);
    }

    container.appendChild(routeDiv);
  });
}
function populateRouteDropdown() {
  const dropdown = document.getElementById("routeSelectToEdit");
  dropdown.innerHTML = '<option value="">Select Route</option>';
  for (let route in routeData) {
    const option = document.createElement("option");
    option.value = route;
    option.textContent = route;
    dropdown.appendChild(option);
  }
}

function addRoute() {
  const newRoute = document.getElementById("newRouteNumber").value.trim();
  if (newRoute && !routeData[newRoute]) {
    routeData[newRoute] = { societies: [] };
    populateRouteDropdown();
    alert(`Route ${newRoute} added.`);
  } else {
    alert("Invalid or duplicate route number.");
  }
}

function loadSocietiesForEdit() {
  const route = document.getElementById("routeSelectToEdit").value;
  const area = document.getElementById("editSocietiesArea");
  area.innerHTML = "";

  if (!route) return;

  routeData[route].societies.forEach((society, index) => {
    const div = document.createElement("div");
    div.style.marginBottom = "6px";

    const input = document.createElement("input");
    input.type = "text";
    input.value = society;
    input.style.marginRight = "10px";

    const saveBtn = document.createElement("button");
    saveBtn.textContent = "💾";
    saveBtn.onclick = () => {
      routeData[route].societies[index] = input.value.trim();
      alert("Society name updated.");
    };

    const delBtn = document.createElement("button");
    delBtn.textContent = "🗑";
    delBtn.onclick = () => {
      routeData[route].societies.splice(index, 1);
      loadSocietiesForEdit();
    };

    div.appendChild(input);
    div.appendChild(saveBtn);
    div.appendChild(delBtn);

    area.appendChild(div);
  });
}

function addSociety() {
  const route = document.getElementById("routeSelectToEdit").value;
  const societyName = document.getElementById("newSocietyName").value.trim();
  if (route && societyName) {
    routeData[route].societies.push(societyName);
    document.getElementById("newSocietyName").value = "";
    loadSocietiesForEdit();
  } else {
    alert("Select route and enter valid society name.");
  }
}

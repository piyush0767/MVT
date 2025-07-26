const routeData = {
  1801: {
    password: "Milk1801",
    name: "Khushipur",
    societies: ["Amarpur", "Rajapur", "Dhannipur"]
  },
  1802: {
    password: "Milk1802",
    name: "Rameshpur",
    societies: ["Lakhanpur", "Basantpur", "Chandpur"]
  }
};

function driverLogin() {
  const route = document.getElementById("routeNumber").value;
  const password = document.getElementById("password").value;

  if (routeData[route] && routeData[route].password === password) {
    document.querySelector(".login-section").classList.add("hidden");
    document.querySelector(".driver-section").classList.remove("hidden");
    document.getElementById("driverRoute").textContent = route;

    const societyList = document.getElementById("societyList");
    societyList.innerHTML = "";

    routeData[route].societies.forEach(society => {
      const div = document.createElement("div");
      div.className = "society";

      const name = document.createElement("span");
      name.textContent = society;

      const arrivalBtn = document.createElement("button");
      arrivalBtn.textContent = "✅";
      arrivalBtn.onclick = () => arrivalBtn.classList.add("active");

      const dispatchBtn = document.createElement("button");
      dispatchBtn.textContent = "📤";
      dispatchBtn.onclick = () => dispatchBtn.classList.add("active");

      div.appendChild(name);
      div.appendChild(arrivalBtn);
      div.appendChild(dispatchBtn);

      societyList.appendChild(div);
    });
  } else {
    alert("Invalid Route No or Password");
  }
}

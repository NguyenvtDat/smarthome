const bedRoom1 = document.querySelector(".bed-room-1");
const bedRoom2 = document.querySelector(".bed-room-2");
const bathRoom = document.querySelector(".bath-room");
const livingRoom = document.querySelector(".living-room");
const kitchen = document.querySelector(".kitchen");
const devices = document.querySelector(".devices");
const indoorTemp = document.querySelector(".indoor-temp");
let fanStatus = "0";
let deviceStatus = {
  lvFan: 0,
  lvLight: 0,
  kcLight: 0,
  br1Light: 0,
  br2Light: 0,
  bathLight: 0,
  bathWaterHeat: 0,
  temp: 0,
};

const url =
  "https://pro.openweathermap.org/data/2.5/forecast/daily?units=metric&q=Hanoi&cnt=5&appid=ba2bf79275214cd1e6c99f6d085fade1&lang=vi";
//uppercase
function ucFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
function tempAlert() {
  var el = document.createElement("div");
  el.classList.add("alert");
  el.innerHTML = "Đang xử lí";
  setTimeout(function () {
    el.parentNode.removeChild(el);
  }, 800);
  document.body.appendChild(el);
}
let monthNames = new Array(
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12"
);

let dayNames = new Array(
  "Chủ nhật",
  "Thứ Hai",
  "Thứ Ba",
  "Thứ tư",
  "Thứ Năm",
  "Thứ Sáu",
  "Thứ Bảy"
);

//ngay gio

function ngaythang() {
  let now = new Date();

  thisYear = now.getFullYear();

  thisDay = dayNames[now.getDay()];

  document.querySelector(".date").innerHTML =
    thisDay +
    ", " +
    now.getDate() +
    " tháng " +
    monthNames[now.getMonth()] +
    " " +
    thisYear;
}
gio();
ngaythang();
setInterval(gio, 10000);
function gio() {
  var time = new Date();
  var gio = pad(parseInt(time.getHours()));
  var phut = pad(parseInt(time.getMinutes()));

  document.querySelector(".time").innerHTML = gio + ":" + phut;
}
function pad(n) {
  return (n < 10 ? "0" : "") + n;
}

let test = "lvFan";
// Dieu khien thiet bi
function changeStatus(device) {
  if (deviceStatus[device] == 0) {
    fanStatus = "1";
  } else {
    fanStatus = "0";
  }
  if (deviceStatus[device] == 0) {
    document.querySelector(`.${device}-switch`).checked = false;
    document.querySelector(`.${device}`).style.backgroundColor = "#1c284f";
    document.querySelector(`.${device}-icon-bgd`).style.backgroundColor =
      "#142047";
    document.querySelector(`.${device}-icon`).style.color = "#ffffff";
  } else {
    document.querySelector(`.${device}-switch`).checked = true;
    document.querySelector(`.${device}`).style.backgroundColor = "#1babfc";
    document.querySelector(`.${device}-icon-bgd`).style.backgroundColor =
      "#ffffff";
    document.querySelector(`.${device}-icon`).style.color = "#1babfc";
  }
}

// Chon phong
bedRoom1.addEventListener("click", displayBedRoom1);
function displayBedRoom1() {
  bedRoom1.style.color = "whitesmoke";
  bedRoom2.style.color = "#414a73";
  bathRoom.style.color = "#414a73";
  livingRoom.style.color = "#414a73";
  kitchen.style.color = "#414a73";

  devices.innerHTML = `
<div class="devices-btn br1Light">
  <div class="divices-icon br1Light-icon-bgd"><i class="fas fa-lightbulb br1Light-icon"></i></div>
  <div class="divices-name">
    <p>Đèn</p>
  </div>
  <div class="divices-switch">
    <label class="switch">
      <input type="checkbox" class = "br1Light-switch" disabled />
      <span class="slider round">
        <p class="devices-off">Off</p>
        <p class="devices-on">On</p>
      </span>
    </label>
  </div>
</div>`;
  document.querySelector(".br1Light").addEventListener("click", () => {
    socket.emit("command", "br1Light");
    tempAlert();
  });
  changeStatus("br1Light");
}

bedRoom2.addEventListener("click", displayBedRoom2);
function displayBedRoom2() {
  bedRoom1.style.color = "#414a73";
  bedRoom2.style.color = "whitesmoke";
  bathRoom.style.color = "#414a73";
  livingRoom.style.color = "#414a73";
  kitchen.style.color = "#414a73";

  devices.innerHTML = `
  <div class="devices-btn br2Light">
  <div class="divices-icon br2Light-icon-bgd"><i class="fas fa-lightbulb br2Light-icon"></i></div>
  <div class="divices-name">
    <p>Đèn</p>
  </div>
  <div class="divices-switch">
    <label class="switch">
      <input type="checkbox" class = "br2Light-switch" disabled />
      <span class="slider round">
        <p class="devices-off">Off</p>
        <p class="devices-on">On</p>
      </span>
    </label>
  </div>
</div>`;
  document.querySelector(".br2Light").addEventListener("click", () => {
    socket.emit("command", "br2Light");
  });
  changeStatus("br2Light");
}

bathRoom.addEventListener("click", displayBathRoom);
function displayBathRoom() {
  bedRoom1.style.color = "#414a73";
  bedRoom2.style.color = "#414a73";
  bathRoom.style.color = "whitesmoke";
  livingRoom.style.color = "#414a73";
  kitchen.style.color = "#414a73";

  devices.innerHTML = `<div class="devices-btn bathWaterHeat">
  <div class="divices-icon bathWaterHeat-icon-bgd">
  <i class="fas fa-hot-tub bathWaterHeat-icon"></i>
  </div>
  <div id="control-fan" class="divices-name">
    <p>Bình nóng lạnh</p>
  </div>
  <div class="divices-switch" >
    <label class="switch">
      <input type="checkbox" class="bathWaterHeat-switch" disabled/>
      <span class="slider round">
        <p class="devices-off">Off</p>
        <p class="devices-on">On</p>
      </span>
    </label>
  </div>
</div>
<div class="devices-btn bathLight">
  <div class="divices-icon bathLight-icon-bgd"><i class="fas fa-lightbulb bathLight-icon"></i></div>
  <div class="divices-name">
    <p>Đèn</p>
  </div>
  <div class="divices-switch">
    <label class="switch">
      <input type="checkbox" class = "bathLight-switch" disabled/>
      <span class="slider round">
        <p class="devices-off">Off</p>
        <p class="devices-on">On</p>
      </span>
    </label>
  </div>
</div>`;
  document.querySelector(".bathLight").addEventListener("click", () => {
    socket.emit("command", "bathLight");
    tempAlert();
  });
  document.querySelector(".bathWaterHeat").addEventListener("click", () => {
    socket.emit("command", "bathWaterHeat");
    tempAlert();
  });
  changeStatus("bathLight");
  changeStatus("bathWaterHeat");
}

livingRoom.addEventListener("click", displayLivingRoom);
function displayLivingRoom() {
  bedRoom1.style.color = "#414a73";
  bedRoom2.style.color = "#414a73";
  bathRoom.style.color = "#414a73";
  livingRoom.style.color = "whitesmoke";
  kitchen.style.color = "#414a73";

  devices.innerHTML = `<div class="devices-btn lvFan">
  <div class="divices-icon lvFan-icon-bgd">
    <i class="fas fa-fan lvFan-icon"></i>
  </div>
  <div id="control-fan" class="divices-name">
    <p>Quạt</p>
  </div>
  <div class="divices-switch">
    <label class="switch">
      <input type="checkbox" class="lvFan-switch" disabled/>
      <span class="slider round">
        <p class="devices-off">Off</p>
        <p class="devices-on">On</p>
      </span>
    </label>
  </div>
</div>
<div class="devices-btn lvLight">
  <div class="divices-icon lvLight-icon-bgd"><i class="fas fa-lightbulb lvLight-icon"></i></div>
  <div class="divices-name">
    <p>Đèn</p>
  </div>
  <div class="divices-switch">
    <label class="switch">
      <input type="checkbox" class = "lvLight-switch" disabled/>
      <span class="slider round">
        <p class="devices-off">Off</p>
        <p class="devices-on">On</p>
      </span>
    </label>
  </div>
</div>`;
  changeStatus("lvFan");
  changeStatus("lvLight");
  document.querySelector(".lvFan").addEventListener("click", () => {
    socket.emit("command", "lvFan");
    tempAlert();
  });
  document.querySelector(".lvLight").addEventListener("click", () => {
    socket.emit("command", "lvLight");
    tempAlert();
  });
}

kitchen.addEventListener("click", displayKitchen);
function displayKitchen() {
  bedRoom1.style.color = "#414a73";
  bedRoom2.style.color = "#414a73";
  bathRoom.style.color = "#414a73";
  livingRoom.style.color = "#414a73";
  kitchen.style.color = "whitesmoke";

  devices.innerHTML = `
<div class="devices-btn kcLight">
  <div class="divices-icon kcLight-icon-bgd"><i class="fas fa-lightbulb kcLight-icon"></i></div>
  <div class="divices-name">
    <p>Đèn</p>
  </div>
  <div class="divices-switch">
    <label class="switch">
      <input type="checkbox" class="kcLight-switch" disabled/>
      <span class="slider round">
        <p class="devices-off">Off</p>
        <p class="devices-on">On</p>
      </span>
    </label>
  </div>
</div>`;
  changeStatus("kcLight");
  document.querySelector(".kcLight").addEventListener("click", () => {
    socket.emit("command", "kcLight");
    tempAlert();
  });
}

displayLivingRoom();

//weather
function showWeather(data) {
  //today
  let weatherData = document.querySelector(".weather-display");
  document.querySelector(
    ".today-weather"
  ).src = `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@4x.png`;

  document.querySelector(".today-weather-descrip").innerHTML = ucFirstLetter(
    data.list[0].weather[0].description
  );

  weatherData.innerHTML = data.list
    .map((day, idx) => {
      let now = new Date(day.dt * 1000);
      let thisDay = dayNames[now.getDay()];
      return `<div class="weather-day">
    <img
      class="weather-day${idx}"
      src="https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png"
      alt=""
    />
    <div class="day-content">
      <p class="day-in-week day${idx}">${thisDay}</p>
      <p class="weather-descrip day-weather-descrip">${ucFirstLetter(
        day.weather[0].description
      )}</p>
    </div>
    <div class="day-temp">
      <p class="day-max-temp">${Math.round(day.temp.max)}</p>
      <p>&deg;/</p>
      <p class="day-min-temp">${Math.round(day.temp.min)}</p>
      <p>&deg;</p>
    </div>
  </div>`;
    })
    .join(" ");

  document.querySelector(".day0").innerHTML = "Hôm nay";
  document.querySelector(".day1").innerHTML = "Ngày mai";
  //weather detail
  document.querySelector(".wind-speed").innerHTML =
    data.list[0].speed + " km/h";

  document.querySelector(".humidity-percent").innerHTML =
    data.list[0].humidity + "%";
}

function fetchWeather() {
  fetch(url)
    .then((res) => {
      if (!res.ok) throw new Error(res.statusText);
      return res.json();
    })
    .then((data) => {
      console.log(data);
      showWeather(data);
    })
    .catch(console.err);
}

fetchWeather();

// communicate to server

const socket = io();

socket.on("message", (msg) => {
  console.log(msg);
});
socket.on("updateStatus", (msg) => {
  for (let key in msg.msg) {
    deviceStatus[key] = msg.msg[key];
    try {
      changeStatus(key);
    } catch (error) {}
  }
  indoorTemp.innerHTML = deviceStatus.temp + "&deg;C";
});
socket.on("espStatus", (msg) => {
  console.log(msg);
  const idicator = document.querySelector(".device-indicator");
  const connectStatus = document.querySelector(".device-connect-status");
  if (msg.msg == 1) {
    idicator.style.backgroundColor = "green";
    connectStatus.innerHTML = "Đã kết nối";
  } else {
    idicator.style.backgroundColor = "red";
    connectStatus.innerHTML = "Mất kết nối";
  }
});
socket.on("test", (msg) => {
  console.log(msg);
});

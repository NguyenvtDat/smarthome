const bedRoom1 = document.querySelector(".bed-room-1");
const bedRoom2 = document.querySelector(".bed-room-2");
const bathRoom = document.querySelector(".bath-room");
const livingRoom = document.querySelector(".living-room");
const kitchen = document.querySelector(".kitchen");
const devices = document.querySelector(".devices");
let fanStatus = 0;
const url =
  "https://pro.openweathermap.org/data/2.5/forecast/daily?units=metric&q=Hanoi&cnt=5&appid=ba2bf79275214cd1e6c99f6d085fade1&lang=vi";
//uppercase
function ucFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
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
setInterval(gio, 6000);
function gio() {
  var time = new Date();
  var gio = pad(parseInt(time.getHours()));
  var phut = pad(parseInt(time.getMinutes()));
  var giay = pad(parseInt(time.getSeconds()));

  document.querySelector(".time").innerHTML = gio + ":" + phut;
}
function pad(n) {
  return (n < 10 ? "0" : "") + n;
}

document
  .querySelector(".devices-btn.fan")
  .addEventListener("click", changeStatus);

// Dieu khien thiet bi
function changeStatus() {
  if (fanStatus == 0) {
    fanStatus = 1;
  } else {
    fanStatus = 0;
  }
  if (fanStatus == 0) {
    document.querySelector("#fan-switch").checked = false;
    document.querySelector(".fan").style.backgroundColor = "#1c284f";
    document.querySelector(".fan-icon-bgd").style.backgroundColor = "#142047";
    document.querySelector(".fa-fan").style.color = "#ffffff";
  } else {
    document.querySelector("#fan-switch").checked = true;
    document.querySelector(".fan").style.backgroundColor = "#1babfc";
    document.querySelector(".fan-icon-bgd").style.backgroundColor = "#ffffff";
    document.querySelector(".fa-fan").style.color = "#1babfc";
  }
  console.log(fanStatus);
}
document.getElementById("fan-switch").disabled = true;

// Chon phong
bedRoom1.addEventListener("click", displayBedRoom1);
function displayBedRoom1() {
  bedRoom1.style.color = "whitesmoke";
  bedRoom2.style.color = "#414a73";
  bathRoom.style.color = "#414a73";
  livingRoom.style.color = "#414a73";
  kitchen.style.color = "#414a73";

  devices.innerHTML = `<div class="devices-btn fan">
  <div class="divices-icon fan-icon-bgd">
    <i class="fas fa-fan"></i>
  </div>
  <div id="control-fan" class="divices-name">
    <p>Quạt</p>
  </div>
  <div class="divices-switch">
    <label class="switch">
      <input type="checkbox" id="fan-switch" />
      <span class="slider round">
        <p class="devices-off">Off</p>
        <p class="devices-on">On</p>
      </span>
    </label>
  </div>
</div>
<div class="devices-btn light">
  <div class="divices-icon"><i class="fas fa-lightbulb"></i></div>
  <div class="divices-name">
    <p>Đèn</p>
  </div>
  <div class="divices-switch">
    <label class="switch">
      <input type="checkbox" />
      <span class="slider round">
        <p class="devices-off">Off</p>
        <p class="devices-on">On</p>
      </span>
    </label>
  </div>
</div>`;

  document
    .querySelector(".devices-btn.fan")
    .addEventListener("click", changeStatus);
}

bedRoom2.addEventListener("click", displayBedRoom2);
function displayBedRoom2() {
  bedRoom1.style.color = "#414a73";
  bedRoom2.style.color = "whitesmoke";
  bathRoom.style.color = "#414a73";
  livingRoom.style.color = "#414a73";
  kitchen.style.color = "#414a73";

  devices.innerHTML = `<div class="devices-btn fan">
  <div class="divices-icon fan-icon-bgd">
    <i class="fas fa-fan"></i>
  </div>
  <div id="control-fan" class="divices-name">
    <p>Quạt</p>
  </div>
  <div class="divices-switch">
    <label class="switch">
      <input type="checkbox" id="fan-switch" />
      <span class="slider round">
        <p class="devices-off">Off</p>
        <p class="devices-on">On</p>
      </span>
    </label>
  </div>
</div>
<div class="devices-btn light">
  <div class="divices-icon"><i class="fas fa-lightbulb"></i></div>
  <div class="divices-name">
    <p>Đèn</p>
  </div>
  <div class="divices-switch">
    <label class="switch">
      <input type="checkbox" />
      <span class="slider round">
        <p class="devices-off">Off</p>
        <p class="devices-on">On</p>
      </span>
    </label>
  </div>
</div>`;

  document
    .querySelector(".devices-btn.fan")
    .addEventListener("click", changeStatus);
}

bathRoom.addEventListener("click", displayBathRoom);
function displayBathRoom() {
  bedRoom1.style.color = "#414a73";
  bedRoom2.style.color = "#414a73";
  bathRoom.style.color = "whitesmoke";
  livingRoom.style.color = "#414a73";
  kitchen.style.color = "#414a73";

  devices.innerHTML = `<div class="devices-btn fan">
  <div class="divices-icon fan-icon-bgd">
    <i class="fas fa-fan"></i>
  </div>
  <div id="control-fan" class="divices-name">
    <p>Bình nóng lạnh</p>
  </div>
  <div class="divices-switch">
    <label class="switch">
      <input type="checkbox" id="fan-switch" />
      <span class="slider round">
        <p class="devices-off">Off</p>
        <p class="devices-on">On</p>
      </span>
    </label>
  </div>
</div>
<div class="devices-btn light">
  <div class="divices-icon"><i class="fas fa-lightbulb"></i></div>
  <div class="divices-name">
    <p>Đèn</p>
  </div>
  <div class="divices-switch">
    <label class="switch">
      <input type="checkbox" />
      <span class="slider round">
        <p class="devices-off">Off</p>
        <p class="devices-on">On</p>
      </span>
    </label>
  </div>
</div>`;

  document
    .querySelector(".devices-btn.fan")
    .addEventListener("click", changeStatus);
}

livingRoom.addEventListener("click", displayLivingRoom);
function displayLivingRoom() {
  bedRoom1.style.color = "#414a73";
  bedRoom2.style.color = "#414a73";
  bathRoom.style.color = "#414a73";
  livingRoom.style.color = "whitesmoke";
  kitchen.style.color = "#414a73";

  devices.innerHTML = `<div class="devices-btn fan">
  <div class="divices-icon fan-icon-bgd">
    <i class="fas fa-fan"></i>
  </div>
  <div id="control-fan" class="divices-name">
    <p>Quạt</p>
  </div>
  <div class="divices-switch">
    <label class="switch">
      <input type="checkbox" id="fan-switch" />
      <span class="slider round">
        <p class="devices-off">Off</p>
        <p class="devices-on">On</p>
      </span>
    </label>
  </div>
</div>
<div class="devices-btn light">
  <div class="divices-icon"><i class="fas fa-lightbulb"></i></div>
  <div class="divices-name">
    <p>Đèn</p>
  </div>
  <div class="divices-switch">
    <label class="switch">
      <input type="checkbox" />
      <span class="slider round">
        <p class="devices-off">Off</p>
        <p class="devices-on">On</p>
      </span>
    </label>
  </div>
</div>`;

  document
    .querySelector(".devices-btn.fan")
    .addEventListener("click", changeStatus);
}

kitchen.addEventListener("click", displayKitchen);
function displayKitchen() {
  bedRoom1.style.color = "#414a73";
  bedRoom2.style.color = "#414a73";
  bathRoom.style.color = "#414a73";
  livingRoom.style.color = "#414a73";
  kitchen.style.color = "whitesmoke";

  devices.innerHTML = `<div class="devices-btn fan">
  <div class="divices-icon fan-icon-bgd">
    <i class="fas fa-fan"></i>
  </div>
  <div id="control-fan" class="divices-name">
    <p>Quạt</p>
  </div>
  <div class="divices-switch">
    <label class="switch">
      <input type="checkbox" id="fan-switch" />
      <span class="slider round">
        <p class="devices-off">Off</p>
        <p class="devices-on">On</p>
      </span>
    </label>
  </div>
</div>
<div class="devices-btn light">
  <div class="divices-icon"><i class="fas fa-lightbulb"></i></div>
  <div class="divices-name">
    <p>Đèn</p>
  </div>
  <div class="divices-switch">
    <label class="switch">
      <input type="checkbox" />
      <span class="slider round">
        <p class="devices-off">Off</p>
        <p class="devices-on">On</p>
      </span>
    </label>
  </div>
</div>`;

  document
    .querySelector(".devices-btn.fan")
    .addEventListener("click", changeStatus);
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

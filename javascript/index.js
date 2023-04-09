function updateTime(timezone) {
  let city = timezone.split("/")[1].toLowerCase();
  let cityElement = document.querySelector(`#${city}`);
  if (cityElement) {
    let cityDate = cityElement.querySelector(".date");
    cityDate.innerHTML = moment().tz(`${timezone}`).format("MMMM Do YYYY");

    let cityTime = cityElement.querySelector(".time");
    cityTime.innerHTML = moment()
      .tz(`${timezone}`)
      .format("h:mm:ss [<small>] A [</small>]");
  }
}

updateTime("America/Los_Angeles");
updateTime("America/Montreal");
updateTime("Africa/Cairo");

let intervalForLosAngeles = "America/Los_angeles";
let intervalForMontreal = "America/Montreal";
let intervalForCairo = "Africa/Cairo";

setInterval(updateTime, 1000, intervalForLosAngeles);
setInterval(updateTime, 1000, intervalForMontreal);
setInterval(updateTime, 1000, intervalForCairo);

function updateCityTime(event) {
  let selectedTimeZone = event.target.value;
  if (selectedTimeZone === "current") {
    selectedTimeZone = moment.tz.guess();
  }
  let cityName = selectedTimeZone.replace("_", " ").split("/")[1];
  let selectedCityDate = moment()
    .tz(`${selectedTimeZone}`)
    .format("MMMM Do YYYY");
  let selectedCityTime = moment()
    .tz(`${selectedTimeZone}`)
    .format("h:mm:ss [<small>] A [</small>]");
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
          <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${selectedCityDate}</div>
          </div>
          <div class="time">${selectedCityTime}</div>
        </div>`;
}

let citySelectElement = document.querySelector("#city");
citySelectElement.addEventListener("change", updateCityTime);

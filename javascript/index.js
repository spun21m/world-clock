function updateTime(timezone) {
  let city = timezone.split("/")[1].toLowerCase();
  let cityElement = document.querySelector(`#${city}`);
  let cityDate = cityElement.querySelector(".date");
  cityDate.innerHTML = moment().tz(`${timezone}`).format("MMMM Do YYYY");

  let cityTime = cityElement.querySelector(".time");
  cityTime.innerHTML = moment()
    .tz(`${timezone}`)
    .format("h:mm:ss [<small>] A [</small>]");
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

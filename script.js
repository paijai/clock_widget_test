const clock = document.querySelector(".js-clock"),
  hour = clock.querySelector("#hour"),
  ampm = clock.querySelector("#ampm"),
  minute = clock.querySelector("#minute");

function paintTime() {
  const time = getTime();
  hour.innerText = addZero(time["hour"]);
  ampm.innerText = time["ampmtext"];
  minute.innerText = addZero(time["minute"]);
  if (time["ampmtext"] === "pm" && !ampm.classList.contains("pm")) {
    ampm.classList.toggle("pm");
  }
}
function addZero(time) {
  if (time < 10) {
    time = "0"+time;
  }
  return time;
}

function ampmInspect(hour) {
  if (hour > 12) {
    hour -= 12;
    return [hour, "pm"]
  } else {
    return [hour, "am"]
  }
}
function getTime() {
  const date = new Date();
  const minute = date.getMinutes();
  const hourInfo = ampmInspect(date.getHours())
  const hour = hourInfo[0];
  const ampmtext = hourInfo[1];
  const second =date.getSeconds();
  return {
    hour,
    minute,
    ampmtext,
    second
  }
}

function init() {
  paintTime();
  setInterval(paintTime, 10000);
}

init();
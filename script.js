let date = document.getElementById("date");
let hou = document.getElementById("hou");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let ampm = document.getElementById("ampm");

let now = new Date();
date.innerText = now.toLocaleDateString();

function showTime() {
  let now = new Date();
  let hours = now.getHours();

  if (hours >= 12) {
    ampm.innerText = "PM";
    hours = hours === 12 ? 12 : hours - 12;
  } else {
    ampm.innerText = "AM";
    hours = hours === 0 ? 12 : hours;
  }

  hou.innerText = (hours < 10 ? "0" + hours : hours) + " :";

  if (now.getMinutes() < 10) {
    min.innerText = "0" + now.getMinutes() + " :";
  } else {
    min.innerText = now.getMinutes() + " :";
  }

  if (now.getSeconds() < 10) {
    sec.innerText = "0" + now.getSeconds();
  } else {
    sec.innerText = now.getSeconds();
  }
}

showTime();

setInterval(() => {
  showTime();
}, 1000);
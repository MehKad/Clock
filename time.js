let h = document.querySelector(".hours");
let m = document.querySelector(".minutes");
let s = document.querySelector(".seconds");

let hou = document.querySelector(".hou");
let min = document.querySelector(".min");
let sec = document.querySelector(".sec");

setInterval(() => {
  h.innerHTML = new Date().getHours();
  m.innerHTML = new Date().getMinutes();
  s.innerHTML = new Date().getSeconds();

  hou.style.strokeDashoffset = 440 - (440 * new Date().getHours()) / 24;
  min.style.strokeDashoffset = 440 - (440 * new Date().getMinutes()) / 60;
  sec.style.strokeDashoffset = 440 - (440 * new Date().getSeconds()) / 60;
});

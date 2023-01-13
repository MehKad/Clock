let h = document.querySelector(".hours");
let m = document.querySelector(".minutes");
let s = document.querySelector(".seconds");

let hou = document.querySelector(".hou");
let min = document.querySelector(".min");
let sec = document.querySelector(".sec");

let h_dots = document.querySelector(".h_dots");
let m_dots = document.querySelector(".m_dots");
let s_dots = document.querySelector(".s_dots");

setInterval(() => {
  hh = new Date().getHours();
  mm = new Date().getMinutes();
  ss = new Date().getSeconds();

  h.innerHTML = hh;
  m.innerHTML = mm;
  s.innerHTML = ss;

  hou.style.strokeDashoffset = 440 - (440 * hh) / 24;
  min.style.strokeDashoffset = 440 - (440 * mm) / 60;
  sec.style.strokeDashoffset = 440 - (440 * ss) / 60;

  h_dots.style.transform = `rotate(${hh * 15}deg)`;
  m_dots.style.transform = `rotate(${mm * 6}deg)`;
  s_dots.style.transform = `rotate(${ss * 6}deg)`;
});

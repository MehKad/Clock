let h = document.querySelector(".hours");
let m = document.querySelector(".minutes");
let s = document.querySelector(".seconds");

h.innerHTML = new Date().getHours();
m.innerHTML = new Date().getMinutes();
s.innerHTML = new Date().getSeconds();

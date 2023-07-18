let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");

window.addEventListener("load",  () => {
  let date;
  setInterval(() => {
    date = new Date();
    const hr = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();
    hour.innerText = `${hr < 10 ? "0" + hr : hr}`;
    minute.innerText = `${min < 10 ? "0" + min : min}`;
    second.innerText = `${sec < 10 ? "0" + sec : sec}`;
  }, 1000);
});
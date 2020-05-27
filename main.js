const hourHand = document.querySelector('.hour');
const minuteHand = document.querySelector('.minute');
const secondHand = document.querySelector('.second');

setInterval(setClock, 1000);

function setClock() {
  let currentTime = new Date();
  let hour = currentTime.getHours();
  let minute = currentTime.getMinutes();
  let second = currentTime.getSeconds();

  let secondRatio = (second * 360) / 60;
  let minuteRatio = minute * 6 + secondRatio / 60;
  let hourRatio = hour * 30 + minuteRatio / 12;

  secondHand.style.transform = `translateX(-50%) rotate(${secondRatio}deg)`;
  minuteHand.style.transform = `translateX(-50%)  rotate(${minuteRatio}deg)`;
  hourHand.style.transform = ` translateX(-50%)  rotate(${hourRatio}deg)`;
}

setClock();

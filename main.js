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

  secondHand.style.transform = ` translate(-50%, 20%) rotate(${secondRatio}deg)`;
  minuteHand.style.transform = ` translateX(-50%) rotate(${minuteRatio}deg)`;
  hourHand.style.transform = `  translateX(-50%) rotate(${hourRatio}deg)`;
}

setClock();

// change dark mode
const container = document.getElementById('container');
const switcher = document.getElementById('switch');

let isDarkMode = false;

switcher.addEventListener('click', () => {
  if (!isDarkMode) {
    switcher.classList.add('active');
    container.classList.remove('light');
    container.classList.add('dark');
    isDarkMode = true;
  } else {
    switcher.classList.remove('active');
    container.classList.remove('dark');
    container.classList.add('light');
    isDarkMode = false;
  }
});

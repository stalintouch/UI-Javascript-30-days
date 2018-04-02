const secondsHand = document.querySelector(".second-hand");
const minutesHand = document.querySelector(".min-hand");
const hoursHand = document.querySelector(".hour-hand");

function getTime() {
  const time = new Date();
  return {
    hours: time.getHours() > 12 ? time.getHours() - 12 : time.getHours(),
    minutes: time.getMinutes(),
    seconds: time.getSeconds()
  };
}

function setClock(hands) {
  const time = getTime();
  let count = 0;
  for (const indicator in time) {
    if(indicator === 'hours'){
      hands[count].style.transform = `rotate(${time[indicator] / 60 * 360 +
        0}deg)`;
    } else {
      hands[count].style.transform = `rotate(${time[indicator] / 60 * 360 +
        90}deg)`;
    }
    count++;
  }
}

function clock(getTime) {
  setClock([hoursHand, minutesHand, secondsHand]);
}

setInterval(clock.bind(null, getTime), 1000);

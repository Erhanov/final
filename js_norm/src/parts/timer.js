function timer() {
  const deadline = '2019-03-10';

  let getTimeRemain = endTime => {
    let zeroPlus = date => {
      if (date < 10 && date >= 0) date = '0' + date;
      return date;
    };

    let t = Date.parse(endTime) - Date.parse(new Date()),
        seconds = zeroPlus(Math.floor(t / 1000 % 60)),
        minutes = zeroPlus(Math.floor(t / 1000 / 60 % 60)),
        hours = zeroPlus(Math.floor(t / (1000 * 60 * 60)));

    if (seconds < 0) {
      return {
        'total': t,
        'hours': '00',
        'minutes': '00',
        'seconds': '00'
      };
    } else {
      return {
        'total': t,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
      };
    }
  };

  let setClock = (id, endTime) => {
    let timer = document.getElementById(id),
        hours = document.querySelector('.hours'),
        minutes = document.querySelector('.minutes'),
        seconds = document.querySelector('.seconds'),
        timeInterval = setInterval(updateClock, 1000);
    console.log(getTimeRemain());

    function updateClock() {
      let t = getTimeRemain(endTime);
      hours.textContent = t.hours;
      minutes.textContent = t.minutes;
      seconds.textContent = t.seconds;

      if (t.total < 0) {
        clearInterval(timeInterval);
      }
    }
  };

  setClock('timer', deadline);
}

;
module.exports = timer;
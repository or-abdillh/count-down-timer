let daysEl = document.getElementById('days'),
    hoursEl = document.getElementById('hours'),
    minutesEl = document.getElementById('minutes'),
    secondsEl = document.getElementById('seconds'),
    dateEl = document.querySelector('.until p');

function countdown(date) {
  const target = new Date(date).getTime();
  
  const timerStart = setInterval( () => {
    let diff = target - new Date().getTime(),
        days = Math.floor(diff / 86400000),
        hours = Math.floor( (diff - ( days * 86400000 )) / 3600000 ),
        minutes = Math.floor( (diff - ( days * 86400000 + hours * 3600000 )) / 60000 ),
        seconds = Math.floor( (diff - ( days * 86400000 + hours * 3600000 + minutes * 60000 )) / 1000 )
    
    if ( days < 0 ) clearInterval(timerStart);
    else printScreen(days, hours, minutes, seconds, date);
  }, 1000);
}

function printScreen (days, hours, minutes, seconds, date) {
    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;
    dateEl.innerHTML = `To : ${date}`;
}

const countDownTo = "13 May 2021 21:00";
countdown(countDownTo);
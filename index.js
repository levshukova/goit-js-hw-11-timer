const refs = {
  days: document.querySelector('[data-value="days"]'),
  hours: document.querySelector('[data-value="hours"]'),
  mins: document.querySelector('[data-value="mins"]'),
  secs: document.querySelector('[data-value="secs"]'),
  timer: document.querySelector("#timer-1"),
};

class CountdownTimer {
  constructor({ targetDate }) {
    this.targetDate = targetDate;
    this.start();
  }
  start() {
    this.runTimer();
    setInterval(() => {
      this.runTimer();
    }, 1000);
  }
  getRemainingTime() {
    const currentTime = Date.now();
    const remainingTime = this.targetDate - currentTime;
    return remainingTime;
  }

  getTimeComponents(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    return { days, hours, mins, secs };
  }

  pad(value) {
    return String(value).padStart(2, "0");
  }
  updateClockface({ days, hours, mins, secs }) {
    refs.days.textContent = `${days}`;
    refs.hours.textContent = `${hours}`;
    refs.mins.textContent = `${mins}`;
    refs.secs.textContent = `${secs}`;
  }
  runTimer() {
    this.updateClockface(this.getTimeComponents(this.getRemainingTime()));
  }
}

const timer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Oct 31, 2020"),
});

// const render = (time) => {
//   refs.timer.innerHTML = `<div class="field">
//         <span class="value" data-value="days">${days}</span>
//         <span class="label">Days</span>
//     </div>

//     <div class="field">
//         <span class="value" data-value="${hours}">11</span>
//         <span class="label">Hours</span>
//     </div>

//     <div class="field">
//         <span class="value" data-value="${mins}">11</span>
//         <span class="label">Minutes</span>
//     </div>

//     <div class="field">
//         <span class="value" data-value="${secs}">11</span>
//         <span class="label">Seconds</span>
//     </div>`;
// };

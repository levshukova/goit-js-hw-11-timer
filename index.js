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
    this.getRemainingTime();
    setInterval(() => {
      this.getRemainingTime();
    }, 1000);
  }
  getRemainingTime() {
    const currentTime = Date.now();
    const remainingTime = this.targetDate - currentTime;
    this.getTimeComponents(remainingTime);
  }

  getTimeComponents(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    this.render(days, hours, mins, secs);
  }

  pad(value) {
    return String(value).padStart(2, "0");
  }

  render(days, hours, mins, secs) {
    refs.timer.innerHTML = `<div class="field">
        <span class="value" data-value="days">${days}</span>
        <span class="label">Days</span>
    </div>

    <div class="field">
        <span class="value" data-value="hours">${hours}</span>
        <span class="label">Hours</span>
    </div>

    <div class="field">
        <span class="value" data-value="mins">${mins}</span>
        <span class="label">Minutes</span>
    </div>

    <div class="field">
        <span class="value" data-value="secs">${secs}</span>
        <span class="label">Seconds</span>
    </div>`;
  }
}

const timer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Oct 31, 2020"),
});

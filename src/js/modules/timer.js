function timer() {
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + 3);
  //   const endDate = new Date("Feb 26, 2025, 16:54:59");

  const daysElement = document.querySelector("#days");
  const hoursElement = document.querySelector("#hours");
  const minutesElement = document.querySelector("#minutes");
  const secondsElement = document.querySelector("#seconds");

  let timeInterval;

  function updateTimer() {
    const now = new Date();
    const timeDifference = endDate - now;

    if (timeDifference <= 0) {
      daysElement.innerText = "0";
      hoursElement.innerText = "0";
      minutesElement.innerText = "0";
      secondsElement.innerText = "0";
      clearInterval(timeInterval);
      return;
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    daysElement.innerText = days < 10 ? "0" + days : days;
    hoursElement.innerText = hours < 10 ? "0" + hours : hours;
    minutesElement.innerText = minutes < 10 ? "0" + minutes : minutes;
    secondsElement.innerText = seconds < 10 ? "0" + seconds : seconds;
  }

  updateTimer();

  timeInterval = setInterval(updateTimer, 1000);
}

timer();

export default timer;

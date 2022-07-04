let date = new Date("July 10, 2022, 00:00:00");

let counter = setInterval(() => {
  let dateNow = new Date().getTime();

  let dateDiff = date - dateNow;

  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));

  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));

  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = days;
  hours < 10
    ? (document.querySelector(".hours").innerHTML = `0${hours}`)
    : (document.querySelector(".hours").innerHTML = hours);
  minutes < 10
    ? (document.querySelector(".minutes").innerHTML = `0${minutes}`)
    : (document.querySelector(".minutes").innerHTML = minutes);
  seconds < 10
    ? (document.querySelector(".seconds").innerHTML = `0${seconds}`)
    : (document.querySelector(".seconds").innerHTML = seconds);

  if (dateDiff <= 0) {
    clearInterval(counter);
    let colors = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "0",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];
    setInterval(() => {
      let color = "";
      for (let i = 0; i < 6; i++) {
        color += colors[Math.floor(Math.random() * colors.length)];
      }
      document.querySelector(".text-h1").innerHTML = "مبروووووك العيد 🎉🎉";
      document.querySelector(".text-h1").style.color = `#${color}`;
    }, 100);
  }
}, 1000);

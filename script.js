const data = [
  {
    title: "Work",
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
  {
    title: "Play",
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    title: "Study",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    title: "Exercise",
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    title: "Social",
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    title: "Self Care",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
];
console.log(data);

const dailyButton = document.getElementById("btn-daily");
const weeklyButton = document.getElementById("btn-weekly");
const monthlyButton = document.getElementById("btn-monthly");

dailyButton.addEventListener("click", () => {
  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    document.getElementById(element.title + "-current").textContent =
      element.timeframes.daily.current + "hrs";
    document.getElementById(element.title + "-previous").textContent =
      "Last day - " + element.timeframes.daily.previous + "hrs";
  }
});

weeklyButton.addEventListener("click", () => {
  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    document.getElementById(element.title + "-current").textContent =
      element.timeframes.weekly.current + "hrs";
    document.getElementById(element.title + "-previous").textContent =
      "Last week - " + element.timeframes.weekly.previous + "hrs";
  }
});

monthlyButton.addEventListener("click", () => {
  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    document.getElementById(element.title + "-current").textContent =
      element.timeframes.monthly.current + "hrs";
    document.getElementById(element.title + "-previous").textContent =
      "Last month - " + element.timeframes.monthly.previous + "hrs";
  }
});

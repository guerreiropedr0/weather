export const toTwelveHour = (hour) => {
  // The hour will be a string with this format "hour:minutes"
  const betterHour = Number(hour);

  switch (true) {
    case (betterHour === 0):
    case (betterHour === 24):
      return '12 AM';

    case (betterHour < 12):
      return `${betterHour} AM`;

    case (betterHour === 12):
      return '12 PM';

    case (betterHour >= 12):
      return `${betterHour - 12} PM`;

    default:
      return hour;
  }
};

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const formatDate = (date) => {
  // The date will be a string with this format "year-month-day"

  // Get the month
  const dateMonth = Number(date.slice(6, 7) - 1);

  // Get the day
  const dateDay = Number(date.slice(8, 10));

  return `${months[dateMonth]} ${dateDay}`;
};

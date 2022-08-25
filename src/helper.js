export const toTwelveHour = (time) => {
  // The hour will be a string with this format "hour:minutes"

  const betterTime = time.split(':');
  const hour = Number(betterTime[0]);
  const minute = betterTime[1];

  let result = '';

  switch (true) {
    case (hour === 0):
    case (hour === 24):
      result += '12 AM';
      break;

    case (hour < 12):
      result += `${hour} AM`;
      break;

    case (hour === 12):
      result += '12 PM';
      break;

    case (hour > 12):
      result += `${hour - 12} PM`;
      break;

    default:
      result += hour;
      break;
  }

  if (minute === '00') {
    return result;
  }

  return `${result[1] !== ' ' ? result.slice(0, 2) : result.slice(0, 1)}:${minute} ${result.slice(-2)}`;
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

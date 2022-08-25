const toTwelveHour = (hour) => {
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

export default toTwelveHour;

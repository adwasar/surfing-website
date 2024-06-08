const msInDay = 1000 * 60 * 60 * 24;
const msInHours = 1000 * 60 * 60;
const month: string[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const formatDateDMonth = (date: Date): string => {
  return `${date.getDate()} ${month[date.getMonth()]}`;
};

export const periodDays = (begin: Date, end: Date): number => {
  const periodMs = end.getTime() - begin.getTime();

  return Math.floor(periodMs / msInDay);
};

export const periodHours = (begin: Date, end: Date): number => {
  const periodMs = end.getTime() - begin.getTime();

  return Math.floor(periodMs / msInHours);
};

export const remainingHours = (begin: Date, end: Date): number => {
  const periodMs = end.getTime() - begin.getTime();
  const remainingMs = periodMs % msInDay;

  return Math.floor(remainingMs / msInHours);
};

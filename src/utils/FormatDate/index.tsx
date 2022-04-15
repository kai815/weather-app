import dayjs from 'dayjs';
import ja from 'dayjs/locale/ja';
dayjs.locale(ja);

export const formatDate = (date: Date) => {
  const dayjsDate = dayjs(date);
  const month = dayjsDate.format('MMMM');
  const day = dayjsDate.format('DD');
  const weekDay = dayjsDate.format('ddd');
  return `${month}${day}日(${weekDay})`;
};

import {
  sortCollection,
  convertDate,
  DATE_TYPES,
} from '../../utils';

const sortByDates = (
  { startedDate: startedDateA },
  { startedDate: startedDateB }
) => {
  return convertDate(startedDateB, DATE_TYPES.number) - convertDate(startedDateA, DATE_TYPES.number);
};

export const sortRunningJobs = jobs => {
  return sortCollection(jobs, [sortByDates]);
};

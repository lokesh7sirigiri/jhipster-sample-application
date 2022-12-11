import dayjs from 'dayjs/esm';

import { Language } from 'app/entities/enumerations/language.model';

import { IJobHistory, NewJobHistory } from './job-history.model';

export const sampleWithRequiredData: IJobHistory = {
  id: 95113,
};

export const sampleWithPartialData: IJobHistory = {
  id: 80171,
  endDate: dayjs('2022-12-10T16:02'),
};

export const sampleWithFullData: IJobHistory = {
  id: 71556,
  startDate: dayjs('2022-12-11T13:34'),
  endDate: dayjs('2022-12-10T21:25'),
  language: Language['TELUGU'],
};

export const sampleWithNewData: NewJobHistory = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);

import { createSelector } from 'reselect';
import { StudentUploadListState } from './action';
import { RootState } from '../index';

const getState = (state: RootState): StudentUploadListState =>
  state.studentUploadList;

export const getStudentUploadList = createSelector(
  [getState],
  (state: StudentUploadListState) => state.studentUploadList,
);

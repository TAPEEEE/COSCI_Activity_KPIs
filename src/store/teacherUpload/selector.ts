import { createSelector } from 'reselect';
import { TeacherUploadListState } from './action';
import { RootState } from '../index';

const getState = (state: RootState): TeacherUploadListState =>
  state.teacherUploadList;

export const getTeacherUploadList = createSelector(
  [getState],
  (state: TeacherUploadListState) => state.teacherUploadList,
);

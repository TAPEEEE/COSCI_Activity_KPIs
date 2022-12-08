import { createSelector } from 'reselect';
import { TeacherRegisterState } from './action';
import { RootState } from '../index';

const getState = (state: RootState): TeacherRegisterState =>
  state.teacherRegister;

export const getTeacherUploadList = createSelector(
  [getState],
  (state: TeacherRegisterState) => state.teacherRegister,
);

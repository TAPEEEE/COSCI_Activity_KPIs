import { createSelector } from 'reselect';
import { TeacherLoginState } from './action';
import { RootState } from '../index';

const getState = (state: RootState): TeacherLoginState => state.teacherLogin;

export const getTeacherUploadList = createSelector(
  [getState],
  (state: TeacherLoginState) => state.teacherLogin,
);

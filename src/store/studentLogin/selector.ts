import { createSelector } from 'reselect';
import { StudentLoginState } from './action';
import { RootState } from '../index';

const getState = (state: RootState): StudentLoginState => state.studentLogin;

export const getStudentUploadList = createSelector(
  [getState],
  (state: StudentLoginState) => state.studentLogin,
);

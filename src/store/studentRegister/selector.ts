import { createSelector } from 'reselect';
import { StudentRegisterState } from './action';
import { RootState } from '../index';

const getState = (state: RootState): StudentRegisterState =>
  state.studentRegister;

export const getStudentUploadList = createSelector(
  [getState],
  (state: StudentRegisterState) => state.studentRegister,
);

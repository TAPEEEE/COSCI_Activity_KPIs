import { Reducer } from 'react';
import {
  StudentLoginState,
  StudentLoginAction,
  StudentLoginActionType,
} from './action';

const initialState: StudentLoginState = {
  studentLogin: [],
};

export const StudentLoginReducer: Reducer<
  StudentLoginState,
  StudentLoginAction
> = (state = initialState, action) => {
  switch (action.type) {
    case StudentLoginActionType.UpdateStudentLogin:
      return { ...state, studentUploadList: action.payload.studentLogin };
    default:
      return state;
  }
};

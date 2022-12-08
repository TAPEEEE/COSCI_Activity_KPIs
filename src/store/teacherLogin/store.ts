import { Reducer } from 'react';
import {
  TeacherLoginState,
  TeacherLoginAction,
  TeacherLoginActionType,
} from './action';

const initialState: TeacherLoginState = {
  teacherLogin: [],
};

export const TeacherLoginReducer: Reducer<
  TeacherLoginState,
  TeacherLoginAction
> = (state = initialState, action) => {
  switch (action.type) {
    case TeacherLoginActionType.UpdateTeacherLogin:
      return { ...state, teacherUploadList: action.payload.teacherLogin };
    default:
      return state;
  }
};

import { Reducer } from 'react';
import {
  TeacherRegisterState,
  TeacherRegisterAction,
  TeacherRegisterActionType,
} from './action';

const initialState: TeacherRegisterState = {
  teacherRegister: [],
};

export const TeacherRegisterReducer: Reducer<
  TeacherRegisterState,
  TeacherRegisterAction
> = (state = initialState, action) => {
  switch (action.type) {
    case TeacherRegisterActionType.UpdateTeacherRegister:
      return { ...state, teacherRegister: action.payload.teacherRegister };
    default:
      return state;
  }
};

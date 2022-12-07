import { Reducer } from 'react';
import {
  StudentRegisterState,
  StudentRegisterAction,
  StudentRegisterActionType,
} from './action';

const initialState: StudentRegisterState = {
  studentRegister: [],
};

export const StudentRegisterReducer: Reducer<
  StudentRegisterState,
  StudentRegisterAction
> = (state = initialState, action) => {
  switch (action.type) {
    case StudentRegisterActionType.UpdateStudentRegister:
      return { ...state, studentUploadList: action.payload.studentRegister };
    default:
      return state;
  }
};

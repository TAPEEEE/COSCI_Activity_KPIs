import { Reducer } from 'react';
import {
  StudentUploadListState,
  StudentUploadListAction,
  StudentUploadListActionType,
} from './action';

const initialState: StudentUploadListState = {
  studentUploadList: [],
};

export const StudentUploadListReducer: Reducer<
  StudentUploadListState,
  StudentUploadListAction
> = (state = initialState, action) => {
  switch (action.type) {
    case StudentUploadListActionType.UpdateStudentUploadList:
      return { ...state, studentUploadList: action.payload.studentUploadList };
    default:
      return state;
  }
};

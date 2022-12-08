import { Reducer } from 'react';
import {
  TeacherUploadListState,
  TeacherUploadListAction,
  TeacherUploadListActionType,
} from './action';

const initialState: TeacherUploadListState = {
  teacherUploadList: [],
};

export const TeacherUploadListReducer: Reducer<
  TeacherUploadListState,
  TeacherUploadListAction
> = (state = initialState, action) => {
  switch (action.type) {
    case TeacherUploadListActionType.UpdateTeacherUploadList:
      return { ...state, teacherUploadList: action.payload.teacherUploadList };
    default:
      return state;
  }
};

import { TeacherUploadData } from '../../service/teacherUpload/types/PostTeacherUploadListResponse';

export interface TeacherUploadListState {
  teacherUploadList: TeacherUploadData[];
}

export enum TeacherUploadListActionType {
  UpdateTeacherUploadList = 'STUDENTUPLOAD/UPDATE_LIST',
}

export interface TeacherUploadListUpdateTeacherUploadListAction {
  type: TeacherUploadListActionType.UpdateTeacherUploadList;
  payload: { teacherUploadList: TeacherUploadData[] };
}

export type TeacherUploadListAction =
  TeacherUploadListUpdateTeacherUploadListAction;

export const updateTeacherUploadList = (
  teacherUploadList: TeacherUploadData[],
): TeacherUploadListUpdateTeacherUploadListAction => {
  return {
    type: TeacherUploadListActionType.UpdateTeacherUploadList,
    payload: { teacherUploadList },
  };
};

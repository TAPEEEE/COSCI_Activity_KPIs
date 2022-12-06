import { StudentUploadData } from '../../service/studentUpload/types/PostStudentUploadListResponse';

export interface StudentUploadListState {
  studentUploadList: StudentUploadData[];
}

export enum StudentUploadListActionType {
  UpdateStudentUploadList = 'STUDENTUPLOAD/UPDATE_LIST',
}

export interface StudentUploadListUpdateStudentUploadListAction {
  type: StudentUploadListActionType.UpdateStudentUploadList;
  payload: { studentUploadList: StudentUploadData[] };
}

export type StudentUploadListAction =
  StudentUploadListUpdateStudentUploadListAction;

export const updateStudentUploadList = (
  studentUploadList: StudentUploadData[],
): StudentUploadListUpdateStudentUploadListAction => {
  return {
    type: StudentUploadListActionType.UpdateStudentUploadList,
    payload: { studentUploadList },
  };
};

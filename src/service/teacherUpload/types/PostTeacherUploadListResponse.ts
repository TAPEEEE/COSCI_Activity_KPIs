export interface TeacherUploadData {
  user_id: string;
  name: string;
  major: string;
  teacher: string;
  register_check: string;
}

export interface TeacherUploadListResponseData {
  data: TeacherUploadData[];
}

export interface TeacherUploadList {
  result: string;
  message: string;
  data: TeacherUploadListResponseData;
}

type PostTeacherUploadListResponse = TeacherUploadList;

export default PostTeacherUploadListResponse;

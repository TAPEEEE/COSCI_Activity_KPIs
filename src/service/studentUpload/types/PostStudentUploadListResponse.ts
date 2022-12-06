export interface StudentUploadData {
  user_id: string;
  name: string;
  major: string;
  teacher: string;
  register_check: string;
}

export interface StudentUploadListResponseData {
  data: StudentUploadData[];
}

export interface StudentUploadList {
  result: string;
  message: string;
  data: StudentUploadListResponseData;
}

type PostStudentUploadListResponse = StudentUploadList;

export default PostStudentUploadListResponse;

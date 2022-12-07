import { AxiosResponse } from 'axios';
import { ServiceApi } from '../ServiceApi';
import instance from '../instance';
import { PostStudentUploadListRequest } from './types/PostStudentUploadListRequest';
import PostStudentUploadListResponse from './types/PostStudentUploadListResponse';

export const postStudentUploadList = async (
  body: PostStudentUploadListRequest,
): Promise<AxiosResponse<PostStudentUploadListResponse>> => {
  const response = await instance.post<PostStudentUploadListResponse>(
    `${ServiceApi.STUDENT_UPLOAD}`,
    body,
  );
  return response;
};

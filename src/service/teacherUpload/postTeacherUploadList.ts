import { AxiosResponse } from 'axios';
import { ServiceApi } from '../ServiceApi';
import instance from '../instance';
import { PostTeacherUploadListRequest } from './types/PostSTeacherUploadListRequest';
import PostTeacherUploadListResponse from './types/PostTeacherUploadListResponse';

export const postTeacherUploadList = async (
  body: PostTeacherUploadListRequest,
): Promise<AxiosResponse<PostTeacherUploadListResponse>> => {
  const response = await instance.post<PostTeacherUploadListResponse>(
    `${ServiceApi.TEACHER_UPLOAD}`,
    body,
  );
  return response;
};

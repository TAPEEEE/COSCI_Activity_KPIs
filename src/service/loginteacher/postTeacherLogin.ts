import { AxiosResponse } from 'axios';
import { ServiceApi } from '../ServiceApi';
import instance from '../instance';
import { PostTeacherLoginRequest } from './types/PostTeacherLoginRequest';
import PostTeacherLoginResponse from './types/PostTeacherLoginResponse';

export const postTeacherLogin = async (
  body: PostTeacherLoginRequest,
): Promise<AxiosResponse<PostTeacherLoginResponse>> => {
  const response = await instance.post<PostTeacherLoginResponse>(
    `${ServiceApi.TEACHER_LOGIN}`,
    body,
  );
  return response;
};

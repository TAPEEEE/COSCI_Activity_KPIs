import { AxiosResponse } from 'axios';
import { ServiceApi } from '../ServiceApi';
import instance from '../instance';
import { PostStudentLoginRequest } from './types/PostStudentLoginRequest';
import PostStudentLoginResponse from './types/PostStudentLoginResponse';

export const postStudentLogin = async (
  body: PostStudentLoginRequest,
): Promise<AxiosResponse<PostStudentLoginResponse>> => {
  const response = await instance.post<PostStudentLoginResponse>(
    `${ServiceApi.STUDENT_LOGIN}`,
    body,
  );
  return response;
};

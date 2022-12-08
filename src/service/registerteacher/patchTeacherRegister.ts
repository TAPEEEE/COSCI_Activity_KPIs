import { AxiosResponse } from 'axios';
import { ServiceApi } from '../ServiceApi';
import instance from '../instance';
import { PatchTeacherRegisterRequest } from './types/PatchTeacherRegisterRequest';
import PatchTeacherRegisterResponse from './types/PatchTeacherRegisterResponse';

export const patchTeacherRegister = async (
  body: PatchTeacherRegisterRequest,
): Promise<AxiosResponse<PatchTeacherRegisterResponse>> => {
  const response = await instance.patch<PatchTeacherRegisterResponse>(
    `${ServiceApi.TEACHER_REGISTER}`,
    body,
  );
  return response;
};

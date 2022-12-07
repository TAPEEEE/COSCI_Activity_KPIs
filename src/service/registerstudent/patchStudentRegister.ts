import { AxiosResponse } from 'axios';
import { ServiceApi } from '../ServiceApi';
import instance from '../instance';
import { PatchStudentRegisterRequest } from './types/PatchStudentRegisterRequest';
import PatchStudentRegisterResponse from './types/PatchStudentRegisterResponse';

export const patchStudentRegister = async (
  body: PatchStudentRegisterRequest,
): Promise<AxiosResponse<PatchStudentRegisterResponse>> => {
  const response = await instance.patch<PatchStudentRegisterResponse>(
    `${ServiceApi.STUDENT_REGISTER}`,
    body,
  );
  return response;
};

import { AxiosResponse } from 'axios';
import { ServiceApi } from '../ServiceApi';
import instance from '../instance';
import GetActivityListResponse from './types/GetActivityListResponse';

export const getActivityList = async (): Promise<
  AxiosResponse<GetActivityListResponse>
> => {
  const response = await instance.get<GetActivityListResponse>(
    `${ServiceApi.ACTIVITY_GET}`,
  );
  return response;
};

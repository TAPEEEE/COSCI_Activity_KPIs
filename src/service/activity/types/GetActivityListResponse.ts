export interface ActivityData {
  name_event: string;
  start_date: string;
  end_date: string;
  event_type: string;
  event_img: string;
}

export interface ActivityListResponseData {
  data: ActivityData[];
}

export interface ActivityList {
  result: string;
  message: string;
  data: ActivityListResponseData;
}

type GetActivityListResponse = ActivityList;

export default GetActivityListResponse;

export interface ActivityData {
  name_event: string;
  start_date: string;
  end_date: string;
  event_type: string;
  event_img: string;
}

// export interface ActivityList {
//   activityList: ActivityData[];
// }

export interface ActivityListResponseData {
  kpi: ActivityData[];
}

export interface ActivityList {
  // kpi: ActivityData[];
  result: string;
  message: string;
  data: ActivityListResponseData;
}

type GetActivityListResponse = ActivityList;

export default GetActivityListResponse;

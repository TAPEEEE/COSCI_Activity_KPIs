import { ActivityData } from '../../service/activity/types';

export interface ActivityListState {
  activityList: ActivityData[];
}

export enum ActivityListActionType {
  UpdateActivityList = 'ACTIVITY/UPDATE_LIST',
}

export interface ActivityListUpdateActivityListAction {
  type: ActivityListActionType.UpdateActivityList;
  payload: { activityList: ActivityData[] };
}

export type ActivityListAction = ActivityListUpdateActivityListAction;

export const updateActivityList = (
  activityList: ActivityData[],
): ActivityListUpdateActivityListAction => {
  return {
    type: ActivityListActionType.UpdateActivityList,
    payload: { activityList },
  };
};

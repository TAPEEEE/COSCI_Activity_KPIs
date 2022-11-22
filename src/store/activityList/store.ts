import { Reducer } from 'react';
import {
  ActivityListState,
  ActivityListAction,
  ActivityListActionType,
} from './action';

const initialState: ActivityListState = {
  activityList: [],
};

export const ActivityListReducer: Reducer<
  ActivityListState,
  ActivityListAction
> = (state = initialState, action) => {
  switch (action.type) {
    case ActivityListActionType.UpdateActivityList:
      return { ...state, activityList: action.payload.activityList };
    case ActivityListActionType.UpdateActivityLists:
      return { ...state, activityLists: action.payload.activityList };
    default:
      return state;
  }
};

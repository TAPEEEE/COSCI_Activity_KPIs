import { createSelector } from 'reselect';
import { ActivityListState } from './action';
import { RootState } from '../index';

const getState = (state: RootState): ActivityListState => state.activityList;

export const getActivityList = createSelector([getState], (state: ActivityListState) => state.activityList);


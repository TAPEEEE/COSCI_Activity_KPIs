import { ThunkAction } from 'redux-thunk';
import {
  updateActivityList,
  ActivityListUpdateActivityListAction,
} from '../action';
import { RootState } from '../..';
import { getActivityList } from '../../../service/';

export const fetchActivityList = (): ThunkAction<
  void,
  RootState,
  void,
  ActivityListUpdateActivityListAction
> => {
  return async (dispatch) => {
    try {
      const response = await getActivityList();
      console.log(response);
      if (response.status === 200) {
        dispatch(updateActivityList(response.data.data.data));
      }
    } catch (error) {
      dispatch(updateActivityList([]));
      console.log('Error');
    }
  };
};

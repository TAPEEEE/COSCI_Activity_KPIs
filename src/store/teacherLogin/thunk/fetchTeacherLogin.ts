import { ThunkAction } from 'redux-thunk';
import {
  updateTeacherLogin,
  TeacherLoginUpdateTeacherLoginAction,
} from '../action';
import { RootState } from '../..';
import { postTeacherLogin } from '../../../service/loginteacher';
import { PostTeacherLoginRequest } from '../../../service/loginteacher/types';

export const fetchTeacherLogin = (
  request: PostTeacherLoginRequest,
): ThunkAction<void, RootState, void, TeacherLoginUpdateTeacherLoginAction> => {
  return async (dispatch) => {
    try {
      const response = await postTeacherLogin(request);
      console.log(response);
      if (response.status === 200) {
        dispatch(updateTeacherLogin(response.data.data.data));
      }
    } catch (error) {
      dispatch(updateTeacherLogin([]));
      console.log('error');
    }
  };
};

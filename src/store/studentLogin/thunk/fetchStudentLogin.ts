import { ThunkAction } from 'redux-thunk';
import {
  updateStudentLogin,
  StudentLoginUpdateStudentLoginAction,
} from '../action';
import { RootState } from '../..';
import { postStudentLogin } from '../../../service/loginstudent';
import { PostStudentLoginRequest } from '../../../service/loginstudent/types';

export const fetchStudentLogin = (
  request: PostStudentLoginRequest,
): ThunkAction<void, RootState, void, StudentLoginUpdateStudentLoginAction> => {
  return async (dispatch) => {
    try {
      const response = await postStudentLogin(request);
      console.log(response);
      if (response.status === 200) {
        dispatch(updateStudentLogin(response.data.data.data));
        // dispatch(
        //   updateAuthUserToken(response.headers.authorization),
        // );
      }
    } catch (error) {
      dispatch(updateStudentLogin([]));
      console.log('error');
    }
  };
};

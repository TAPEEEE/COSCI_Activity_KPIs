import { ThunkAction } from 'redux-thunk';
import {
  updateTeacherRegister,
  TeacherRegisterUpdateTeacherRegisterAction,
} from '../action';
import { RootState } from '../..';
import { patchTeacherRegister } from '../../../service/registerteacher';
import { PatchTeacherRegisterRequest } from '../../../service/registerteacher/types';

export const fetchTeacherRegister = (
  request: PatchTeacherRegisterRequest,
): ThunkAction<
  void,
  RootState,
  void,
  TeacherRegisterUpdateTeacherRegisterAction
> => {
  return async (dispatch) => {
    try {
      const response = await patchTeacherRegister(request);
      console.log(response);
      if (response.status === 200) {
        dispatch(updateTeacherRegister(response.data.data.data));
      }
    } catch (error) {
      dispatch(updateTeacherRegister([]));
      console.log('error');
    }
  };
};

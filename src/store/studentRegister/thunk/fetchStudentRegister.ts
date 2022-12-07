import { ThunkAction } from 'redux-thunk';
import {
  updateStudentRegister,
  StudentRegisterUpdateStudentRegisterAction,
} from '../action';
import { RootState } from '../..';
import { patchStudentRegister } from '../../../service/registerstudent';
import { PatchStudentRegisterRequest } from '../../../service/registerstudent/types';

export const fetchStudentRegister = (
  request: PatchStudentRegisterRequest,
): ThunkAction<
  void,
  RootState,
  void,
  StudentRegisterUpdateStudentRegisterAction
> => {
  return async (dispatch) => {
    try {
      const response = await patchStudentRegister(request);
      console.log(response);
      if (response.status === 200) {
        dispatch(updateStudentRegister(response.data.data.data));
      }
    } catch (error) {
      dispatch(updateStudentRegister([]));
      console.log('error');
    }
  };
};

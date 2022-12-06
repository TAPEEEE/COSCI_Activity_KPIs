import { ThunkAction } from 'redux-thunk';
import {
  updateStudentUploadList,
  StudentUploadListUpdateStudentUploadListAction,
} from '../action';
import { RootState } from '../..';
import { postStudentUploadList } from '../../../service/studentUpload/';
import { PostStudentUploadListRequest } from '../../../service/studentUpload/types';

export const fetchStudentUploadList = (
  request: PostStudentUploadListRequest,
): ThunkAction<
  void,
  RootState,
  void,
  StudentUploadListUpdateStudentUploadListAction
> => {
  return async (dispatch) => {
    try {
      const response = await postStudentUploadList(request);
      console.log(response);
      if (response.status === 200) {
        dispatch(updateStudentUploadList(response.data.data.data));
      }
    } catch (error) {
      dispatch(updateStudentUploadList([]));
      console.log('Error');
    }
  };
};

import { ThunkAction } from 'redux-thunk';
import {
  updateTeacherUploadList,
  TeacherUploadListUpdateTeacherUploadListAction,
} from '../action';
import { RootState } from '../..';
import { postTeacherUploadList } from '../../../service/teacherUpload';
import { PostTeacherUploadListRequest } from '../../../service/teacherUpload/types';

export const fetchTeacherUploadList = (
  request: PostTeacherUploadListRequest,
): ThunkAction<
  void,
  RootState,
  void,
  TeacherUploadListUpdateTeacherUploadListAction
> => {
  return async (dispatch) => {
    try {
      const response = await postTeacherUploadList(request);
      console.log(response);
      if (response.status === 200) {
        dispatch(updateTeacherUploadList(response.data.data.data));
      }
    } catch (error) {
      dispatch(updateTeacherUploadList([]));
      console.log('ttttt');
    }
  };
};

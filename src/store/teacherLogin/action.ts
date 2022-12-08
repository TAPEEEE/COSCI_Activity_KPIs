import { TeacherLoginData } from '../../service/loginteacher/types/PostTeacherLoginResponse';

export interface TeacherLoginState {
  teacherLogin: TeacherLoginData[];
}

export enum TeacherLoginActionType {
  UpdateTeacherLogin = 'STUDENTREGISTER/UPDATE_LIST',
}

export interface TeacherLoginUpdateTeacherLoginAction {
  type: TeacherLoginActionType.UpdateTeacherLogin;
  payload: { teacherLogin: TeacherLoginData[] };
}

export type TeacherLoginAction = TeacherLoginUpdateTeacherLoginAction;

export const updateTeacherLogin = (
  teacherLogin: TeacherLoginData[],
): TeacherLoginUpdateTeacherLoginAction => {
  return {
    type: TeacherLoginActionType.UpdateTeacherLogin,
    payload: { teacherLogin },
  };
};

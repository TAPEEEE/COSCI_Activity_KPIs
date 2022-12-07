import { StudentLoginData } from '../../service/loginstudent/types/PostStudentLoginResponse';

export interface StudentLoginState {
  studentLogin: StudentLoginData[];
}

export enum StudentLoginActionType {
  UpdateStudentLogin = 'STUDENTREGISTER/UPDATE_LIST',
}

export interface StudentLoginUpdateStudentLoginAction {
  type: StudentLoginActionType.UpdateStudentLogin;
  payload: { studentLogin: StudentLoginData[] };
}

export type StudentLoginAction = StudentLoginUpdateStudentLoginAction;

export const updateStudentLogin = (
  studentLogin: StudentLoginData[],
): StudentLoginUpdateStudentLoginAction => {
  return {
    type: StudentLoginActionType.UpdateStudentLogin,
    payload: { studentLogin },
  };
};

import { StudentLoginData } from '../../service/loginstudent/types/PostStudentLoginResponse';

export interface StudentLoginState {
  studentLogin: StudentLoginData[];
}

export enum StudentLoginActionType {
  UpdateStudentLogin = 'STUDENTLOGIN/UPDATE_LIST',
  // UpdateAuthUserToken = 'AUTH/UPDATE_USER_TOKEN',
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

// export const updateAuthUserToken = (token: string) => {
//   return {
//     type: StudentLoginActionType.UpdateAuthUserToken,
//     payload: { token },
//   };
// };

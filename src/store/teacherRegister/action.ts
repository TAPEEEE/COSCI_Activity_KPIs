import { TeacherRegisterData } from '../../service/registerteacher/types/PatchTeacherRegisterResponse';

export interface TeacherRegisterState {
  teacherRegister: TeacherRegisterData[];
}

export enum TeacherRegisterActionType {
  UpdateTeacherRegister = 'STUDENTREGISTER/UPDATE_LIST',
}

export interface TeacherRegisterUpdateTeacherRegisterAction {
  type: TeacherRegisterActionType.UpdateTeacherRegister;
  payload: { teacherRegister: TeacherRegisterData[] };
}

export type TeacherRegisterAction = TeacherRegisterUpdateTeacherRegisterAction;

export const updateTeacherRegister = (
  teacherRegister: TeacherRegisterData[],
): TeacherRegisterUpdateTeacherRegisterAction => {
  return {
    type: TeacherRegisterActionType.UpdateTeacherRegister,
    payload: { teacherRegister },
  };
};

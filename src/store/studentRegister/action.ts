import { StudentRegisterData } from '../../service/registerstudent/types/PatchStudentRegisterResponse';

export interface StudentRegisterState {
  studentRegister: StudentRegisterData[];
}

export enum StudentRegisterActionType {
  UpdateStudentRegister = 'STUDENTREGISTER/UPDATE_LIST',
}

export interface StudentRegisterUpdateStudentRegisterAction {
  type: StudentRegisterActionType.UpdateStudentRegister;
  payload: { studentRegister: StudentRegisterData[] };
}

export type StudentRegisterAction = StudentRegisterUpdateStudentRegisterAction;

export const updateStudentRegister = (
  studentRegister: StudentRegisterData[],
): StudentRegisterUpdateStudentRegisterAction => {
  return {
    type: StudentRegisterActionType.UpdateStudentRegister,
    payload: { studentRegister },
  };
};

export interface TeacherRegisterData {
  user_id: string;
  name: string;
  major: string;
  teacher: string;
  register_check: boolean;
}

export interface TeacherRegisterResponseData {
  data: TeacherRegisterData[];
}

export interface TeacherRegister {
  result: string;
  message: string;
  data: TeacherRegisterResponseData;
}

type PatchTeacherRegisterResponse = TeacherRegister;

export default PatchTeacherRegisterResponse;

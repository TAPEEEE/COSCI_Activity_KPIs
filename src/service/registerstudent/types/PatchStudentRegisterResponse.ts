export interface StudentRegisterData {
  user_id: string;
  name: string;
  major: string;
  teacher: string;
  register_check: boolean;
}

export interface StudentRegisterResponseData {
  data: StudentRegisterData[];
}

export interface StudentRegister {
  result: string;
  message: string;
  data: StudentRegisterResponseData;
}

type PatchStudentRegisterResponse = StudentRegister;

export default PatchStudentRegisterResponse;

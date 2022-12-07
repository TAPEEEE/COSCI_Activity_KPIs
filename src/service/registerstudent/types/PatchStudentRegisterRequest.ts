export interface PatchStudentRegisterRequest {
  name: string;
  password: string;
  confirmpassword: string;
  student_id: string;
  teacher: string;
  major: string;
  email: string;
  tel: string;
}

export default PatchStudentRegisterRequest;

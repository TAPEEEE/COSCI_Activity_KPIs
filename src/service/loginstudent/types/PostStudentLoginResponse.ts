export interface StudentLoginData {
  _id: string;
  user_id: string;
  name: string;
  student_id: string;
  teacher: string;
  major: string;
  email: string;
  tel: string;
  img_user: string;
}

export interface StudentLoginResponseData {
  data: StudentLoginData[];
}

export interface StudentLogin {
  result: string;
  message: string;
  data: StudentLoginResponseData;
}

type PatchStudentLoginResponse = StudentLogin;

export default PatchStudentLoginResponse;

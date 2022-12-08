export interface TeacherLoginData {
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

export interface TeacherLoginResponseData {
  data: TeacherLoginData[];
}

export interface TeacherLogin {
  result: string;
  message: string;
  data: TeacherLoginResponseData;
}

type PatchTeacherLoginResponse = TeacherLogin;

export default PatchTeacherLoginResponse;

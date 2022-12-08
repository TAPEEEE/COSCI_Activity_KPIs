export interface PatchTeacherRegisterRequest {
  user_id: string;
  name: string;
  password: string;
  confirmpassword: string;
  role: string;
  email: string;
  tel: string;
  register_check: boolean;
}

export default PatchTeacherRegisterRequest;

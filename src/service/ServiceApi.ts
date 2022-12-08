export const ServiceApi = {
  //Student Activity
  ACTIVITY_GET: 'api/admin/activity-dashboard', //Get กิจกรรมนักเรียน
  ACTIVITY_REQUEST: 'api/student/request',

  //Teacher KPI
  KPI_GET: 'api/admin/kpi-dashboard', //Get กิจกรรมอาจารย์
  KPI_REQUEST_POST: 'api/teacher/request',

  //Admin
  STUDENT_CRUD_GET: 'api/admin/crud-student', //Get Student Account
  TEACHER_CRUD_GET: 'api/admin/crud-teacher', //Get Teacher Account
  ACTIVITY_AND_KPI_POST: 'api/admin/add-activity', //Creact กิจกรรม
  STUDENT_REQUEST_GET: 'api/admin/reqstudent-dashboard', //Get Student Request
  TEACHER_REQUEST_GET: 'api/admin/reqteacher-dashboard', //Get Teacher Request

  //Student Auth
  STUDENT_UPLOAD: 'api/auth/getstudent-uploaded', //Post PreFilled นักเรียน
  STUDENT_REGISTER: 'api/auth/student-register', //Patch สมัครนักเรียน
  STUDENT_LOGIN: 'api/auth/login-student', //Post Login นักเรียน
  STUDENT_OTP: 'api/auth/verifystudent',
  STUDENT_OTPRESEND: '',

  //Teacher Auth
  TEACHER_UPLOAD: 'api/auth/getteacher-uploaded', //Post PreFilled นักเรียน
  TEACHER_REGISTER: 'api/auth/teacher-register', //Patch สมัครนักเรียน
  TEACHER_LOGIN: 'api/auth/login-teacher', //Post Login นักเรียน
  TEACHER_OTP: 'api/auth/verifyteacher',
  TEACHER_OTPRESEND: 'api/auth/verify/resendteacher',
};

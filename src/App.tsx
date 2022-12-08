import { useState } from 'react';
import './App.css';
import LoginPages from './pages/LoginPages';
import RegisterPages from './pages/RegisterPages';
import AdminAddActivity from './pages/AdminAddActivity';
import AdminActivityDashboard from './pages/AdminActivityDashboard';
import AdminRequestDashboard from './pages/AdminRequestDashboard';
import AdminUserCRUD from './pages/AdminUserCRUD';
import AdminUploadFile from './pages/AdminUploadFile';
import AdminDashboard from './pages/AdminDashboard';
import AdminNavbar from './components/admin/AdminNavbar';
import PageNotFound from './pages/PageNotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StudentHome from './pages/StudentHome';
import TeacherRegisterPages from './pages/TeacherRegisterPage';
import TeacherLoginPages from './pages/TeacherLoginPages';
import { store } from './store';
import OTPPages from './pages/OTPPages';

function App() {
  // const userToken = getAuthUserToken(store.getState());

  return (
    <div className="App">
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPages />}></Route>
          <Route path="/studenthome" element={<StudentHome />}></Route>
          <Route path="/login" element={<LoginPages />}></Route>
          <Route path="/register" element={<RegisterPages />}></Route>
          <Route path="/otpverify" element={<OTPPages />}></Route>
          <Route
            path="/teacher-register"
            element={<TeacherRegisterPages />}
          ></Route>
          <Route path="/teacher-login" element={<TeacherLoginPages />}></Route>

          <Route path="/admin-dashboard" element={<AdminDashboard />}></Route>
          <Route
            path="/admin-add-activity"
            element={<AdminAddActivity />}
          ></Route>
          <Route path="/admin-user-crud" element={<AdminUserCRUD />}></Route>
          <Route
            path="/admin-add-activity"
            element={<AdminAddActivity />}
          ></Route>
          <Route
            path="/admin-activity-dashboard"
            element={<AdminActivityDashboard />}
          ></Route>
          <Route
            path="/admin-request-dashboard"
            element={<AdminRequestDashboard />}
          ></Route>
          <Route
            path="/admin-user-upload"
            element={<AdminUploadFile />}
          ></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </BrowserRouter>
      {/* </PersistGate> */}
    </div>
  );
}

export default App;

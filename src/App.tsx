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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AdminNavbar />
        <Routes>
          <Route path="/" element={<AdminDashboard />}></Route>
          <Route path="/login" element={<LoginPages />}></Route>
          <Route path="/register" element={<RegisterPages />}></Route>
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
    </div>
  );
}

export default App;

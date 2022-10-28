import { useState } from 'react';
import './App.css';
import AdminAddActivity from './pages/AdminAddActivity';
import AdminCRUD from './pages/AdminCRUD';
import AdminDashboard from './pages/AdminDashboard';
import AdminNavbar from './components/AdminNavbar';
import PageNotFound from './pages/PageNotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <BrowserRouter>
        <AdminNavbar />
        <Routes>
          <Route path="/" element={<AdminDashboard />}></Route>
          <Route
            path="/admin-add-activity"
            element={<AdminAddActivity />}
          ></Route>
          <Route path="/admin-usermanage" element={<AdminCRUD />}></Route>
          <Route path="/" element={<AdminAddActivity />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

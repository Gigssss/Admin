import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard.jsx';
import WorkOrderPage from './pages/work-orderpage/WorkOrderPage';
import Settings from './pages/settingspage/SettingsPage.jsx';
import CreateUser from './pages/registerpage/RegisterUserPage.jsx';
import LoginPage  from './pages/login-page/LoginPage.js';

const App = () => {
  return (
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/work-order" element={<WorkOrderPage />} />
            <Route path="/register-user" element={<CreateUser />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
    </BrowserRouter>
  );
};

export default App;
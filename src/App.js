import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import Notif from './components/notif/Notif';
import Dashboard from './pages/dashboard/Dashboard.jsx';
import WorkOrderPage from './pages/work-orderpage/WorkOrderPage';
import Analytics from './pages/settingspage/SettingsPage.jsx';
import Comment from './pages/registerpage/RegisterUserPage.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Notif />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/work-order" element={<WorkOrderPage />} />
            <Route path="/register-user" element={<Comment />} />
            <Route path="/settings" element={<Analytics />} />
          </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;
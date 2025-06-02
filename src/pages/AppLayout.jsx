import { Outlet } from 'react-router-dom';

import "../App.css"

export default function AppLayout() {
  return (
    <div className="app.layout">
      <div className="flex-1 overflow-y-auto">
        <Outlet />
      </div>
      <nav className="bg-white border-t p-4 text-center text-sm text-gray-600">
        <span>🏠 Dashboard | 📋 Tasks | 👤 Me</span>
      </nav>
    </div>
  );
}
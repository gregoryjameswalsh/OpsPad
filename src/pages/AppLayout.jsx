import { Outlet } from 'react-router-dom';

export default function AppLayout() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1 overflow-y-auto">
        <Outlet />
      </div>
      <nav className="bg-white border-t p-4 text-center text-sm text-gray-600">
        <span>🏠 Dashboard | 📋 Tasks | 👤 Me</span>
      </nav>
    </div>
  );
}
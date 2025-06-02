import { Outlet } from 'react-router-dom';

export default function LandingLayout() {
  return (
    <div>
      <header className="bg-white shadow p-4 text-xl font-bold">OpsPad</header>
      <Outlet />
    </div>
  );
}
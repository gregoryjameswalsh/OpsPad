import { Outlet } from 'react-router-dom';

import Navbar from '../../components/Navbar';

export default function LandingLayout() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <p>2</p>
      <p>3</p>
      <header className="bg-white shadow p-4 text-xl font-bold">OpsPad</header>
      <Outlet />
    </div>
  );
}
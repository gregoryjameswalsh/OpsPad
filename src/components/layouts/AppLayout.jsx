import { Outlet } from 'react-router-dom';
import AppHeader from '../components/app_core/AppHeader';
import AppFooter from '../app_core/AppFooter';

import "../App.css"

export default function AppLayout() {
  return (
    <div className="app-layout">

      <div>
        <AppHeader /> {/* Strip across the top of the app that stays no matter what page you're on */}
      </div>
      <div>
        <Outlet />
      </div>
      <div>
        <AppFooter /> {/* Strip across the bottom of the app that stays no matter what page you're on */}
      </div>
    </div>
  );
}
import { Outlet } from 'react-router-dom';
import AppHeader from '../components/AppHeader'; // Importing the AppHeader component

import "../App.css"

export default function AppLayout() {
  return (
    <div className="app-layout">

      <AppHeader /> {/* Strip across the top of the app that stays no matter what page you're on */}

      <div>
        <Outlet />
      </div>
      <p>2</p>
      
      <nav>
        <span>🏠 Dashboard | 📋 Tasks | 👤 Me</span>
      </nav>
      <p>3</p>
    </div>
  );
}
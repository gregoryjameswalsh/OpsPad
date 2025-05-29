import DashboardHeader from '../components/Dashboard/DashboardHeader';
import ShiftNotesCard from '../components/Dashboard/ShiftNotesCard';
import OpenIssuesCard from '../components/Dashboard/OpenIssuesCard';
import TaskChecklistCard from '../components/Dashboard/TaskChecklistCard';
import DashboardFooter from '../components/Dashboard/DashboardFooter';

import '../App.css'; // Import global styles

export default function DashboardPage() {
  return (
    <div className="dashboard-page">
      <DashboardHeader />

      {/* Main content area with grid layout for cards */}
      <div className="dashboard-grid">
        <ShiftNotesCard className="lg:col-span-1" />
        <OpenIssuesCard className="lg:col-span-1" />
        <TaskChecklistCard className="lg:col-span-1" />
      </div>

      <DashboardFooter />
    </div>
  );
}
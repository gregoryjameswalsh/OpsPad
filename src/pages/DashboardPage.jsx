import DashboardHeader from '../components/Dashboard/DashboardHeader';
import ShiftNotesCard from '../components/Dashboard/ShiftNotesCard';
import OpenIssuesCard from '../components/Dashboard/OpenIssuesCard';
import TaskChecklistCard from '../components/Dashboard/TaskChecklistCard';


import '../App.css'; // Import global styles

export default function DashboardPage() {
  return (
    <div className="container">
      <div className="dashboard-page">

        {/* Dashboard Header part - "Today / Tomorrow / Next Week / etc" and the date today} */}

        <div>
            <DashboardHeader />
        </div>

        <div>
            <div>
            <a href="#" className="btn-primary">Open Day</a>
            </div>
        </div>
      
    

      {/* Main content area with grid layout for cards */}
      <div className="dashboard-grid">
        <ShiftNotesCard />
        <OpenIssuesCard />
        <TaskChecklistCard />
      </div>

      </div>
    </div>
  );
}
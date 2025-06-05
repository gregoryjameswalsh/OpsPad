import DashboardHeader from '../components/Dashboard/DashboardHeader';
import ShiftNotesPage from './ShiftNotesPage'
import ShiftNotesCard from '../components/Dashboard/ShiftNotesCard';
import OpenIssuesCard from '../components/Dashboard/OpenIssuesCard';
import TaskChecklistCard from '../components/Dashboard/TaskChecklistCard';


import '../App.css'; // Import global styles
import ShiftNotesPage from './ShiftNotesPage';

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
            <a href="#" className="btn-stretched">Open Day</a>
            </div>
        </div>
      
          {/* Main content area */}
        <section className="dashboard-summary">
          <div className="checklist-section">
            <h2>Start-of-Day Checklist</h2>
            <ul className="checklist">
              <li><input type="checkbox" />Cash float counted</li>
              <li><input type="checkbox" />Doors unlocked</li>
              <li><input type="checkbox" />Staff briefing completed</li>
            </ul>
            {/* <ShiftNotesCard /> */}
            {/* <OpenIssuesCard /> */}
            {/* <TaskChecklistCard /> */}
          </div>

            <ShiftNotesPage />

          <div className="next-event">
            <h3>NEXT SCHEDULED EVENT</h3>
            <p>Manager meeting at 2pm</p>
          </div>

          <button className="fab">+</button>


        </section>

      </div>
    </div>
  );
}
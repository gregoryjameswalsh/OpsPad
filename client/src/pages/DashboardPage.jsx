import DashboardHeader from '../components/dashboard/DashboardHeader';
import ShiftNotesCard from '../components/dashboard/ShiftNotesCard';
import OpenIssuesCard from '../components/dashboard/OpenIssuesCard';
import TaskChecklistCard from '../components/dashboard/TaskChecklistCard';
import TaskList from '../components/tasks/TaskList'

import { useTasks } from '../hooks/useTasks'


import '../App.css'; // Import global styles



export default function DashboardPage() {

    const { tasks, addTask, editTask, removeTask } = useTasks()

  return (
    // <div className="container">
      <div className="dashboard-page">

        {/* Dashboard Header part - "Today / Tomorrow / Next Week / etc" and the date today} */}

        <div>
           {/*} <DashboardHeader /> */}
        </div>

        <div>
            <div>
            <a href="#" className="btn-stretched">Open Day</a>
            </div>
        </div>
      
        {/* Main content area */}

        <section className="dashboard-summary">
          <div className="dashboard-flex-container">
            <ShiftNotesCard /> 
          <div className="checklist-section">
            <h2>Today's Tasks</h2>
              
               {/* 
<div className="checklist-section">
               x% of checklists complete 
               </div>
               */}
              
            
              <div className="checklist">
              <TaskChecklistCard
                tasks={tasks}
                layout={"summary"} />
                </div>

          </div>

          </div>

          <div className="next-event">
            <h3>NEXT SCHEDULED EVENT</h3>
            <p>Manager meeting at 2pm</p>
          </div>

          <button className="fab">+</button>


        </section>

      </div>
    //</div>
  );
}
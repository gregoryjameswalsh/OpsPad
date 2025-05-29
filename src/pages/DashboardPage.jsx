import DashboardHeader from '../components/Dashboard/DashboardHeader';
import ShiftNotesCard from '../components/Dashboard/ShiftNotesCard';
import OpenIssuesCard from '../components/Dashboard/OpenIssuesCard';
import TaskChecklistCard from '../components/Dashboard/TaskChecklistCard';
import DashboardFooter from '../components/Dashboard/DashboardFooter';

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-6">
      <DashboardHeader />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ShiftNotesCard className="lg:col-span-1" />
        <OpenIssuesCard className="lg:col-span-1" />
        <TaskChecklistCard className="lg:col-span-1" />
      </div>

      <DashboardFooter />
    </div>
  );
}
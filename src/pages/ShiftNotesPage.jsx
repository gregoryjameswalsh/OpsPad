import '../App.css'
import DashboardHeader from '../components/dashboard/DashboardHeader';
import ShiftNotesCard from '../components/dashboard/ShiftNotesCard';

export default function ShiftNotesPage() {
  return (
  
          <div className="notes-section">


            <DashboardHeader />
            <ShiftNotesCard />
            

          </div>
  
  );
}
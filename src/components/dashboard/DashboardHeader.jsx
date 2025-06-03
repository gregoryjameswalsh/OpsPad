import Badge from '../UI/Badge';

export default function DashboardHeader() {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between bg-white p-4 rounded-lg shadow">
      <h1 className="lato-black">Today  </h1>
      <div className="">
        <p>Monday, 2nd June, 2025</p>
        </div>

    </div>
  );
}
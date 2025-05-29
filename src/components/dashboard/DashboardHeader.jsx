import Badge from '../UI/Badge';

export default function DashboardHeader() {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between bg-white p-4 rounded-lg shadow">
      <h1 className="text-2xl font-bold">OpsPad Dashboard</h1>
      <div className="mt-4 md:mt-0 flex gap-4">
        <Badge label="Daily Sales" value="1,420" />
        <Badge label="Open Tasks" value="5" intent="warning" />
        <Badge label="Pending Issues" value="2" intent="alert" />
      </div>
    </div>
  );
}
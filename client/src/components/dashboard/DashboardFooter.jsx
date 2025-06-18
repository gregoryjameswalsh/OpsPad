export default function DashboardFooter() {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 mt-6 p-4 bg-white rounded-lg shadow">
      <p>© {new Date().getFullYear()} OpsPad</p>
      <div className="space-x-4 mt-2 md:mt-0">
        <a href="/terms" className="hover:underline">Terms</a>
        <a href="/privacy" className="hover:underline">Privacy</a>
        <a href="/help" className="hover:underline">Help</a>
      </div>
    </footer>
  );
}
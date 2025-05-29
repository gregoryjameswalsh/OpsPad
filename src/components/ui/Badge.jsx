// src/components/UI/Badge.js

export default function Badge({ label, value, intent = 'default' }) {
  // intent: 'default' | 'warning' | 'alert'
  const colors = {
    default: 'bg-gray-100 text-gray-800',
    warning: 'bg-yellow-100 text-yellow-800',
    alert:   'bg-red-100   text-red-800',
  };

  return (
    <div
      className={`flex flex-col items-center justify-center px-4 py-2 rounded-lg shadow-sm ${colors[intent]}`}
    >
      <span className="text-sm">{label}</span>
      <span className="text-xl font-bold">{value}</span>
    </div>
  );
}
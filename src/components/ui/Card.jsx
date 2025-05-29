export default function Card({ title, children, className = '' }) {
  return (
    <div className={`bg-white p-6 rounded-lg shadow ${className}`}>
      {title && <h2 className="font-semibold text-lg mb-4">{title}</h2>}
      {children}
    </div>
  );
}
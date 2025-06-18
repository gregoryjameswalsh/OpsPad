// This component is a simple card layout that can be used to display content in a card format.
// src/components/ui/Card.jsx

import '../../App.css';


export default function Card({ title, children, className = '' }) {
  return (
    <div className={`card ${className}`}>
      {title && <h2>{title}</h2>}
      {children}
    </div>
  );
}
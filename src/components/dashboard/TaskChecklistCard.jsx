import Card from '../UI/Card';
import { useState, useEffect } from 'react';

export default function TaskChecklistCard({ className = '' }) {
  const [tasks, setTasks] = useState(/* fetch or prop */ [
    { id: 't1', text: 'Clean restrooms', completed: true },
    /* ... */
  ]);

  function toggle(id) {
    setTasks(ts => ts.map(t =>
      t.id === id ? { ...t, completed: !t.completed } : t
    ));
    // also persist to API
  }

  return (
    <Card title="Task Checklist" className={className}>
      <ul className="space-y-2">
        {tasks.map(t => (
          <li key={t.id} className="flex items-center">
            <input
              type="checkbox"
              checked={t.completed}
              onChange={() => toggle(t.id)}
              className="mr-3"
            />
            <span className={t.completed ? 'line-through text-gray-500' : ''}>
              {t.text}
            </span>
          </li>
        ))}
      </ul>
    </Card>
  );
}
import Card from '../UI/Card'
import { useState, useEffect } from 'react'
import axios from 'axios'
import '../../App.css' // Ensure you have the correct path to your CSS file

export default function TaskChecklistCard({ className = '' }) {
  const [tasks, setTasks] = useState([]);

    const getTasks = async () => {
        try {
            /* AXIOS */
            const response = await axios.get(`http://localhost:3000/tasks`)
            if (response.status === 200) setTasks(response.data)

        } catch (error) {
            console.error('error', error)
        }
    }

    useEffect(() => { getTasks() }, [])

  // Toggle task completion
  // This function updates the task's completion status
  // and should also persist the change to the API.
      function toggle(id) {
    setTasks(ts => ts.map(t =>
      t.id === id ? { ...t, completed: !t.completed } : t
    ));
    // also persist to API
  }

  return (
    <Card title="Task Checklist" className={`task-checklist-card ${className}`}>
      <ul className="space-y-2">
        {tasks.map(t => (
          <li key={t.id} className="flex items-center">
            <input
              type="checkbox"
              checked={t.completed}
              onChange={() => toggle(t.id)}
              className="mr-3"
            />
            <span className={t.completed ? 'completed' : ''}>
              {t.text}
            </span>
          </li>
        ))}
      </ul>
    </Card>
  );
}
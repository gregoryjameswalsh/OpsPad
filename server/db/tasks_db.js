const tasks_db = {
    tasks: [
  {
    id: 1,
    title: 'Stock Inventory Check',
    description: 'Conduct a full inventory of the bar stock and record discrepancies.',
    assignedTo: 'Alice',
    dueTime: '2025-06-20T18:00:00Z',
    isComplete: false,
    createdAt: '2025-06-18T09:30:00Z',
    priority: 'High',
    photoUrl: null
  },
  {
    id: 2,
    title: 'Staff Shift Scheduling',
    description: 'Prepare the staff rota for the upcoming weekend.',
    assignedTo: 'Bob',
    dueTime: '2025-06-19T12:00:00Z',
    isComplete: false,
    createdAt: '2025-06-18T10:00:00Z',
    priority: 'Medium',
    photoUrl: null
  },
  {
    id: 3,
    title: 'Equipment Maintenance',
    description: 'Arrange servicing for the draft beer lines and refrigeration units.',
    assignedTo: 'Cara',
    dueTime: '2025-06-22T15:00:00Z',
    isComplete: false,
    createdAt: '2025-06-18T11:15:00Z',
    priority: 'High',
    photoUrl: null
  },
  {
    id: 4,
    title: 'Menu Update',
    description: 'Revise the summer specials menu and update the digital display.',
    assignedTo: 'David',
    dueTime: '2025-06-21T14:00:00Z',
    isComplete: false,
    createdAt: '2025-06-18T12:45:00Z',
    priority: 'Low',
    photoUrl: null
  },
  {
    id: 5,
    title: 'Health & Safety Audit',
    description: 'Complete the quarterly H&S checklist and report any issues.',
    assignedTo: 'Ella',
    dueTime: '2025-06-25T10:00:00Z',
    isComplete: false,
    createdAt: '2025-06-18T13:30:00Z',
    priority: 'Critical',
    photoUrl: null
  },
  {
    id: 6,
    title: 'Event Promotion',
    description: 'Design and distribute flyers for next week’s live music night.',
    assignedTo: 'Finn',
    dueTime: '2025-06-23T09:00:00Z',
    isComplete: false,
    createdAt: '2025-06-18T14:00:00Z',
    priority: 'Medium',
    photoUrl: null
  },
  {
    id: 7,
    title: 'Supplier Payment',
    description: 'Process invoice payments for fresh produce supplier.',
    assignedTo: 'Alice',
    dueTime: '2025-06-19T17:00:00Z',
    isComplete: false,
    createdAt: '2025-06-18T15:20:00Z',
    priority: 'High',
    photoUrl: null
  },
  {
    id: 8,
    title: 'Site Walkthrough',
    description: 'Inspect the premises for any maintenance or cleanliness issues.',
    assignedTo: 'Bob',
    dueTime: '2025-06-20T11:00:00Z',
    isComplete: false,
    createdAt: '2025-06-18T16:05:00Z',
    priority: 'Low',
    photoUrl: null
  },
  {
    id: 9,
    title: 'Training Session',
    description: 'Conduct customer service training for evening staff.',
    assignedTo: 'Cara',
    dueTime: '2025-06-24T16:00:00Z',
    isComplete: false,
    createdAt: '2025-06-18T16:45:00Z',
    priority: 'Medium',
    photoUrl: null
  },
  {
    id: 10,
    title: 'Weekly Sales Report',
    description: 'Compile and submit the sales report for this week.',
    assignedTo: 'David',
    dueTime: '2025-06-19T08:00:00Z',
    isComplete: false,
    createdAt: '2025-06-18T17:30:00Z',
    priority: 'High',
    photoUrl: null
  }
]
}

export default tasks_db
// This is a mock database for tasks. In a real application, this would be replaced with a connection to a database such as MongoDB, PostgreSQL, etc.
// The tasks_db object contains an array of task objects, each with properties like id, text, authorId, completed status, completedAt timestamp, and photoUrl.  
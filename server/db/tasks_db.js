const tasks_db = {
    tasks: [
        {
        id: 1,
        text: 'Restock bar',
        authorId: 1,
        completed: false,
        completedAt: null,
        photoUrl: null
        }
    ]
}

export default tasks_db
// This is a mock database for tasks. In a real application, this would be replaced with a connection to a database such as MongoDB, PostgreSQL, etc.
// The tasks_db object contains an array of task objects, each with properties like id, text, authorId, completed status, completedAt timestamp, and photoUrl.  
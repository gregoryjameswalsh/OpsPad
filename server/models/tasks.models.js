import tasks_db from '../db/tasks_db.js'

export const getItem = id => {
    try{
        const task=tasks_db?.tasks?.filter( tasks => task?.id === id) [0]
        return task

    } catch (err) {
        console.log('Error', err)
    }
}

export const listItems = () => {
    try {
        return tasks_db?.tasks

    } catch (err) {
        console.log('Error', err)
    }
}

export const editItem = (id, data) => {
    try {
        const index = tasks_db.tasks.findIndex(task => task.id === id)

        if (index === -1) throw new Error('Task not found')
            else {
        tasks_db.tasks[index] = data
        return tasks_db.tasks[index]
            }
        } catch (err) {
            console.log('Error', err)

        }
    }


export const addItem = data => {
    try {
        const newTask = { id: tasks_db.tasks.length + 1, ...data }
        tasks_db.tasks.push(newTask)
        return newTask
    } catch (err) {
        console.log('Error', err)
    }
}

export const deleteItem = id => {
    try {
        // delete task from db
        const index = tasks_db.tasks.findIndex(task => task.id === id)
        if (index === -1) throw new Error('Task not found')
            else {
        tasks_db.tasks.splice(index, 1)
        return tasks_db.tasks
            }
    } catch (error) {
    }

}
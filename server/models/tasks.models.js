import tasks_db from '../db/tasks_db.js'
import { supabase } from '../db/supabaseClient.js'


// Function to get all (non deleted) notes for a site
export const getSiteTasks = async (
    siteId,
    {
        fromDate,
        toDate,
        limit = 50,
        offset = 0
    } = {}
) => {
    try {
    let q = supabase
        .from('tasks')
        .select('*')
        .eq('site_id', siteId)
        .eq('is_deleted', false)
        .order('created_at', { ascending: false })
        .range(offset, offset + limit -1)

        if (fromDate) {
            q = q.gte('created_at', new Date(fromDate).toISOString())
        }
        if (toDate) {
            q = q.lte('created_at', new Date(toDate).toISOString())
        }

        const { data, error } = await q

        if (error) {
            console.error(`Error fetching tasks for site ${siteId}:`, error)
            return []
        }
        return data
    } catch (err) {
        console.error(`Unexpected error in getSiteTasks:`, err)
        return []
    }
}


// END OF REFACTORED CODE _ ALL THE REST BELOW NEEDS TO BE SORTED 


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
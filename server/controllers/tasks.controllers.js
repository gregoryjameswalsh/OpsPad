import { getSiteTasks, listItems, editItem, addItem, deleteItem } from '../models/tasks.models.js';



/**
 * GET /shift_notes/site/:siteId
 * optional query-params: fromDate, toDate, limit, offset
 */
export const getTasksBySite = async (req, res) => {
  const { siteId } = req.params
  const { fromDate, toDate, limit, offset } = req.query

  try {
    const notes = await getSiteTasks(siteId, {
      fromDate,
      toDate,
      limit: limit ? parseInt(limit, 10) : undefined,
      offset: offset ? parseInt(offset, 10) : undefined
    })
    res.json(notes)
  } catch (err) {
    console.error(`Error in getTasksBySite(${siteId}):`, err)
    res.status(500).json({ error: 'Internal server error' })
  }
}


export const getTaskById = async (req, res) => {

}

export const setTaskAsDeleted = async (req, res) => {
    
}

// ** END OF REFACTORED CODE - THE REST BELOW NEEDS TO BE COMPLETED STILL ** \\



export const listTasks = (req, res) => {
    try {
        const resp = listItems()
        res.status(200).json(resp)

    } catch (err) {
        res.status(500).send(err)
    }
}

export const editTask = (req, res) => {
    try {
        const resp = editItem(parseInt(req.params.id), req.body)
        res.status(200).json(resp)

    } catch (err) {
        res.status(500).send(err)
    }
}

export const addTask = (req, res) => {
    try {
        const resp = addItem(req.body)
        res.status(200).json(resp)
        
    } catch (err) {
        res.status(500).send(err)
    }
}

export const deleteTask = (req, res) => {
    try {
        const resp = deleteItem(parseInt(req.params.id))
        res.status(200).json(resp)

    } catch (err) {
        res.status(500).send(err)
    }
}
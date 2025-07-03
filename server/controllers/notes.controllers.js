import { getItem, getSiteNotes, listItems, editItem, addItem, setItemAsDeleted, deleteItem } from '../models/notes.models.js';


/**
 * GET /shift_notes/:id
 */
export const getShiftNoteById = async (req, res) => {
  const { id } = req.params

  console.log('→ fetching shift_note id=', id, 'type=', typeof id)

  try {
    const note = await getItem(id)
    if (!note) {
      return res.status(404).json({ error: `Shift note ${id} not found` })
    }
    res.json(note)
  } catch (err) {
    console.error(`Error in getShiftNoteById(${id}):`, err)
    res.status(500).json({ error: 'Internal server error' })
  }
}

/**
 * GET /shift_notes/site/:siteId
 * optional query-params: fromDate, toDate, limit, offset
 */
export const getShiftNotesBySite = async (req, res) => {
  const { siteId } = req.params
  const { fromDate, toDate, limit, offset } = req.query

  try {
    const notes = await getSiteNotes(siteId, {
      fromDate,
      toDate,
      limit: limit ? parseInt(limit, 10) : undefined,
      offset: offset ? parseInt(offset, 10) : undefined
    })
    res.json(notes)
  } catch (err) {
    console.error(`Error in getShiftNotesBySite(${siteId}):`, err)
    res.status(500).json({ error: 'Internal server error' })
  }
}


/* ***************************************************************************** */


export const getNote = (req, res) => {
    try {
        const resp = getItem(parseInt(req.params.id))
        res.status(200).json(resp)

    }   catch (err) {
        res.status(500).send(err)
    }
}

export const listNotes = (req, res) => {
    try {
        const resp = listItems()
        res.status(200).json(resp)

    } catch (err) {
        res.status(500).send(err)
    }
}

export const addNote = async (req, res) => {
    try {
        console.log('[addNote] 🔔 received body =', req.body)
        const newNote = await addItem(req.body)
        return res.status(201).json(newNote)
    } catch (err) {
        console.error('[addNote] error:', err)
        return res.status(500).json({ error: err.message || 'Server error' })
    }
}

export const editNote = async (req, res) => {
    const id = req.params.id
    const body = req.body

    try {
        const updated = await editItem(id, body)
        return res.status(200).json(updated)
    } catch (err) {
        console.error('Error in editNote controller:', err)
        return res.status(500).json({ error: err.message || 'Server error' })
    }
}

export const setAsDeleted = async (req, res) => {
    console.log('[deleteNote] 🔔 hit deleteNote with id=', req.params.id);
    const id = req.params.id
    const body = req.body

    try {
        const updated = await setItemAsDeleted(id)
        return res.status(200).json(updated)
    } catch (err) {
        console.error('Error in setAsDeleted controller:', err)
        return res.status(500).json({ error: err.message || 'Server error'})
    }
}






export const deleteNote = async (req, res) => {
    const id = req.params.id
    try {
        const deleted = await deleteItem(id)

        if (!deleted) {
            return res.status(404).json({ error: 'Note not found' })
        }

        return res.status(200).json(deleted)

    } catch (err) {
        console.error('[deleteNote] error:', err)
        return res.status(500).json({ error: err.message || 'Server error' })
    }
}
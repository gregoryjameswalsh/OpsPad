import shift_notes_db from '../db/shift_notes_db.js'
import { supabase } from '../db/supabaseClient.js'

/* Is getItem ACTUALLY used? */
export const getItem = async (id) => {
  try {
    const { data: note, error } = await supabase
      .from('shift_notes')
      .select('*')
      .eq('id', id)
      .single()

    if (error) {
      console.error(`Supabase error fetching note ${id}:`, error)
      return null
    }

    return note
  } catch (err) {
    console.error(`Unexpected error in getItem(${id}):`, err)
    return null
  }
}

// Function to get all (non deleted) notes for a site
export const getSiteNotes = async (
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
        .from('shift_notes')
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
            console.error(`Error fetching notes for site ${siteId}:`, error)
            return []
        }
        return data
    } catch (err) {
        console.error(`Unexpected error in getSiteNotes:`, err)
        return []
    }
}

// I think this needs to / can be removed?
export const listItems = () => {
/*
    try {
        return shift_notes_db?.notes

    } catch (err) {
        console.log('Error', err)
    }
*/
}


export async function addItem(data) {
    console.log('[addItem] inserting note for site', data.siteId, 'at', new Date().toISOString())

    const payload = {
        note_title: data.noteTitle,
        tag:        data.noteTag,
        user_id:    data.userId,
        site_id:    data.siteId,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(), 
    }

    const { data: newNote, error } = await supabase
        .from('shift_notes')
        .insert(payload)
        .select('*')
        .single()

    if (error) {
        console.error('[addItem] Supabase insert error:', error)
        throw error
    }

    console.debug('[addItem] inserted row =', newNote)
    return newNote
}



export async function editItem(id, data) {
    const { data: updatedNote, error } = await supabase
    .from('shift_notes')
    .update({
        note_text:  data.notes,
        tag: data.noteTag,
        
        updated_at: new Date().toISOString(),
    })
    .eq('id', id)
    .select()
    .single()

    if (error) {
        console.error('Supabase edit error:', error)
        throw error
    }
    return updatedNote
}

export async function setItemAsDeleted(id) {
    console.log('[setItemAsDeleted] supabase will update id=', id);
    const { data: updatedNote, error } = await supabase
    .from('shift_notes')
    .update({
        is_deleted: true,
        deleted_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
    })
    .eq('id', id)
    .select()
    .single()

    if (error) {
        console.error('Supabase edit error:', error)
        throw error
    }
    console.debug('[setItemAsDeleted] deletedRow=', updatedNote)
    return updatedNote
}




export async function deleteItem(id) {
    console.debug('[deleteItem] deleting note', id)

    const { data: deletedNote, error } = await supabase
    .from('shift_notes')
    .delete()
    .eq('id', id)
    .select()
    .single()

    if (error) {
        console.error('[deleteItem] Supabase error:', error)
        throw error
    }
    if (!deletedNote) {
        return null
    }
}

/* This needs refactoring for Supabase
export const deleteItem = id => {
    try {
        // delete note from db
        const index = shift_notes_db.notes.findIndex(note => note.id === id)
        if (index === -1) throw new Error('note not found')
            else {
        shift_notes_db.notes.splice(index, 1)
        return shift_notes_db.notes
            }
    } catch (error) {
    }

}*/
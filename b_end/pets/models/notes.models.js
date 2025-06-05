import shift_notes_db from '../../db/shift_notes_db.js'

export const getItem = id => {
    try{
        const note=notes_db?.notes?.filter( notes => note?.id === id) [0]
        return note

    } catch (err) {
        console.log('Error', err)
    }
}

export const listItems = () => {
    try {
        return notes_db?.notes

    } catch (err) {
        console.log('Error', err)
    }
}

export const editItem = (id, data) => {
    try {
        const index = notes_db.notes.findIndex(note => note.id === id)

        if (index === -1) throw new Error('note not found')
            else {
        notes_db.notes[index] = data
        return notes_db.notes[index]
            }
        } catch (err) {
            console.log('Error', err)

        }
    }


export const addItem = data => {
    try {
        const newnote = { id: notes_db.notes.length + 1, ...data }
        notes_db.notes.push(newnote)
        return newnote
    } catch (err) {
        console.log('Error', err)
    }
}

export const deleteItem = id => {
    try {
        // delete note from db
        const index = notes_db.notes.findIndex(note => note.id === id)
        if (index === -1) throw new Error('note not found')
            else {
        notes_db.notes.splice(index, 1)
        return notes_db.notes
            }
    } catch (error) {
    }

}
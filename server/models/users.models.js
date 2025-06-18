import users_db from '../db/users_db.js'

export const getItem = id => {
    try{
        const user=users_db?.users?.filter( users => user?.id === id) [0]
        return user

    } catch (err) {
        console.log('Error', err)
    }
}

export const listItems = () => {
    try {
        return users_db?.users

    } catch (err) {
        console.log('Error', err)
    }
}

export const editItem = (id, data) => {
    try {
        const index = users_db.users.findIndex(user => user.id === id)

        if (index === -1) throw new Error('user not found')
            else {
        users_db.users[index] = data
        return users_db.users[index]
            }
        } catch (err) {
            console.log('Error', err)

        }
    }


export const addItem = data => {
    try {
        const newUser = { id: users_db.users.length + 1, ...data }
        users_db.users.push(newUser)
        return newUser
    } catch (err) {
        console.log('Error', err)
    }
}

export const deleteItem = id => {
    try {
        // delete user from db
        const index = users_db.users.findIndex(user => user.id === id)
        if (index === -1) throw new Error('user not found')
            else {
        users_db.users.splice(index, 1)
        return users_db.users
            }
    } catch (error) {
    }

}
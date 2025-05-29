import React, { useState } from 'react'
import axios from 'axios'

function EditPet({ petToEdit }) {

    const [petName, setPetName] = useState(petToEdit?.name || '')
    const [petType, setPetType] = useState(petToEdit?.type || '')
    const [petAge, setPetAge] = useState(petToEdit?.age || '')
    const [petBreed, setPetBreed] = useState(petToEdit?.breed || '')



    const editPet = async () => {
        try {
            const petData = {
                id: petToEdit.id,
                name: petName,
                type: petType,
                age: petAge,
                breed: petBreed
            }   

            /* AXIOS */
            const response = await axios.put(
                `http://localhost:3000/pets/${petToEdit.id}`,
                petData,
                { headers: { 'Content-Type': 'application/json' } }
            )

            if (response.status === 200) {window.location.href = `/${response.data.id}` // Redirect to the updated pet detail page
        }
    } catch (error) {
        console.error('error', error)
    }
    }
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <h2>Edit Pet</h2>

            <div style={{ display: 'flex', flexDirection: 'column', margin: 20 }}>
                <label>Pet Name</label>
                <input type='text' value={petName} onChange={e => setPetName(e.target.value)} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', margin: 20 }}>
                <label>Pet Type</label>
                <input type='text' value={petType} onChange={e => setPetType(e.target.value)} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', margin: 20 }}>
                <label>Pet Age</label>
                <input type='text' value={petAge} onChange={e => setPetAge(e.target.value)} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', margin: 20 }}>
                <label>Pet Breed</label>
                <input type='text' value={petBreed} onChange={e => setPetBreed(e.target.value)} />
            </div>
            
            <button
                style={{ margin: 30 }}
                onClick={() => editPet()}
            >
                Save changes
            </button>
        </div>
    )
}


export default EditPet
// This code defines a React component for editing pet details.
// It uses the useState hook to manage the state of the pet's name, type, age, and breed.
// The editPet function sends a PUT request to update the pet's details on the server.
// If the request is successful, it redirects to the updated pet detail page.
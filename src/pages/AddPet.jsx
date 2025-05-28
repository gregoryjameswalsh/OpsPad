import React, { useState } from 'react'
import axios from 'axios'

function AddPet() {
    
    const [petName, setPetName] = useState()
    const [petType, setPetType] = useState()
    const [petAge, setPetAge] = useState()
    const [petBreed, setPetBreed] = useState()

    const addPet = async () => {
        try {
            const petData = {
                name: petName,
                type: petType,
                age: petAge,
                breed: petBreed
            }

            /* AXIOS */
            const response = await axios.post(
                'http://localhost:3000/pets/',
                petData,
                { headers: { 'Content-Type': 'application/json' } }
            )
                if (response.status === 201) window.location.href = '/${response.data.id}' // Redirect to the new pet detail page
        
        } catch (error) {
            console.error('error', error)
        } 
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <h2>Add Pet</h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', margin: 20 }}>
                <label>Pet Name</label>
                <input type='text' value={petName} onChange={e => setPetName(e.target.value)} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', margin: 20 }}>
                <label>Pet type</label>
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
                style={{ margin: 20 }}
                onClick={() => addPet()}
            >
                Add Pet
            </button>

        </div>
    )
}

export default AddPet
// This code defines a React component for adding a new pet to a pet shelter application.
// It includes input fields for the pet's name, type, age, and breed, and a button to submit the data.
// When the button is clicked, it sends a POST request to the server to create a new pet entry.
// If successful, it redirects to the detail page of the newly created pet.


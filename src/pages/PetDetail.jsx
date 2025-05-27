import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

function PetDetail({ setPetToEdit }) {

    const [pet, setPet] = useState([])

    const { petId } = useParams()

    const getPet = async () => {
        try {
            /* FETCH */



            /* AXIOS */
            const response = await axios.get('http://localhost:3000/pets/${petId}')
            if (response.status === 200) {
                setPet (response.data)
                setPetToEdit (response.data)
            }
        } catch (error) {
            console.error('error', error)
        }
    }

    useEffect(() => { getPet() }, [])

    const deletePet = async () => {
        try {


            /* AXIOS */
            const response = await axios.delete('http://localhost:3000/pets/${petId}')
            
        }
    }
}
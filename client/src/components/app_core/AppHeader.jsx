import { useState, useEffect, use } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { supabase } from '../../lib/supabaseClient'
import '../../App.css'


export default function AppHeader() {

    const [headerData, setHeaderData] = useState(null)
    const [coords, setCoords] = useState({ lat: null, lon: null })
    const [weather, setWeather] =useState(null)
    const [error, setError] = useState(null)
    const navigate = useNavigate()

    //Fetch the header information from the backend
    useEffect(() => {

        async function fetchHeader() {
            const { data, error: sessionError } = await supabase.auth.getSession()
            if (sessionError) {
                console.error('Session error:', sessionError)
                return
        }

        const token = data?.session?.access_token
        if (!token) {
            console.error('No active session')
            return
        }

        try {
            const res = await axios.get('/api/header-data', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            setHeaderData(res.data)
        } catch (err) {
            console.error('Error fetching header data:', err)
        }
        }
        fetchHeader()
    }, [])

    console.log('Header Data:', headerData)

    // Get geolocation data
    useEffect(() => {
        if (!navigator.geolocation) {
            setError(new Error("Geolocation is not supported by this browser."));
            return
        }
        navigator.geolocation.getCurrentPosition(
            ({ coords }) => {
                setCoords({
                    lat: coords.latitude,
                    lon: coords.longitude,
                })
            },
            err => setError(err),
            { enableHighAccuracy: true,
              timeout: 5000, // 5 seconds timeout
              maximumAge: 60_000, // Cache the position for 1 minute
             }
        )
    }, [])

    // Once we have the geolocation data, fetch the weather data
    useEffect(() => {
        if (coords.lat == null) return
        const query = `${coords.lat},${coords.lon}`
        axios .get(`http://api.weatherapi.com/v1/current.json?key=bd87ea815f2449eb85c103309250406&q=${encodeURIComponent(query)}&aqi=no`
    )
        .then(res => {
                setWeather(res.data.current)
                console.log(res.data)
                console.log('Weather:',weather)
            })
        .catch(err => {
            console.error("Error fetching weather data: ", err);
            setError(err);
        })
    }, [coords])

    //Logout handler
    const handleLogout = async () => {
        await supabase.auth.signOut()
        navigate('/login')
    }

    if (!headerData) return null

    const { siteName, location, userName } = headerData

    console.log(headerData)

    const weatherIcon = weather?.condition?.icon
                    ?`https:${weather?.condition?.icon}`
                    : null
    const altText = weather?.condition?.text || "Weather Icon";

  // Logout handler




    return (
        <nav className="app-header">
            <div className="logo">
                <p>OpsPad</p>
            </div>
            <div className="site-name">
                <p>{ siteName }, { location }</p>
            </div>
            

            <div className="app-header-right">
                <span className="weather-display">
                    {/* Render the <img> only once we know data is non null and condition.icon exists */}
                    {weatherIcon && (<img 
                                        src={weatherIcon} 
                                        alt={altText}
                                        style={{ width: 32, height: 32, verticalAlign: 'middle' }}
                                        />
                    )}{' '}
                    {weather?.temp_c}°C
                </span>
                
                
                <i className="fa-solid fa-circle-user icons" />
                <span className="username">{ userName }</span>
                <button onClick={handleLogout} className="logout-btn">
                    Log out
                </button>
       
            </div>

        </nav>
    )
}


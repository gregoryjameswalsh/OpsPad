import { useState, useEffect } from 'react'
import axios from 'axios'

import '../../App.css'



const AppHeader = () => {

    const [coords, setCoords] = useState({ lat: null, lon: null });
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

// First effect: ask for permission to access geolocation
    useEffect(() => {
        if (!navigator.geolocation) {
            setError(new Error("Geolocation is not supported by this browser."));
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                setCoords({
                    lat: position.coords.latitude,
                    lon: position.coords.longitude,
                });
            },
            (geolocError) => {
                setError(geolocError);
            },
            { enableHighAccuracy: true,
              timeout: 5000, // 5 seconds timeout
              maximumAge: 60_000, // Cache the position for 1 minute
             }
        );
    }, []);

// Second effect: once we have the coordinates, fetch the weather data

    useEffect(()    => {
        if (coords.lat == null || coords.lon == null) {
            // we don't have coordinates yet, so we can't fetch weather data
            return;
        }

        // Build the "q" param as "lat, lon" (Weather API expects this format)
        const query = `${coords.lat},${coords.lon}`;

        // Fetch the weather data using axios
        axios .get(`http://api.weatherapi.com/v1/current.json?key=bd87ea815f2449eb85c103309250406&q=${encodeURIComponent(
            query
        )}&aqi=no`)
            .then(response => {
                setData(response.data)
                console.log(response.data)
            })
        .catch(apiError => {
            console.error("Error fetching weather data: ", error);
            setError(apiError);
        })
    }, [coords.lat, coords.lon]);

    const weatherIcon = data?.current?.condition?.icon
                    ?`https:${data?.current?.condition?.icon}`
                    : null;
    const altText = data?.current?.condition?.text || "Weather Icon";


    return (
        <nav className="app-header">
            <div className="logo">
                <p>OpsPad</p>
            </div>
            <div className="site-name">
                <p>Red Lion, Chipping Sodbury</p>
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
                    {data?.current?.temp_c}°C
                </span>
                
                
                <i className="fa-solid fa-circle-user icons"></i>
            </div>

        </nav>
    )
}

export default AppHeader
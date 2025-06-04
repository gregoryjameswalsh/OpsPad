import React from 'react'
import axios from 'axios'

import '../../App.css'

const AppHeader = () => {


   useEffect(() => {
    axios(`http://api.weatherapi.com/v1/current.json?key=bd87ea815f2449eb85c103309250406&q=London&aqi=no`)
        .then(response => {
            setData(response.data)
        })
        .then(data => {
            setData(data);
        })
        .catch(error => {
            console.error("Error fetching weather data: ", error);
            setError(error);
        })
})


    return (
        <nav className="app-header">
            <div className="logo">
                <p>OpsPad</p>
            </div>
            <div className="site-name">
                <p>Red Lion, Chipping Sodbury</p>
            </div>
            

            <div className="app-header-right">
                <a href="#">Weather Icon</a>
                
                <i class="fa-solid fa-circle-user icons"></i>
            </div>

        </nav>
    )
}

export default AppHeader
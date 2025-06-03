import React from 'react'

import '../../App.css'

const AppHeader = () => {
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
                
                <i class="fa-solid fa-circle-user logo primary"></i>
            </div>

        </nav>
    )
}

export default AppHeader
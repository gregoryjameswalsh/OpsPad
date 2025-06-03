import React from 'react'
import '../App.css'

const AppFooter = () => {
    return (
        <nav className="app-footer">
            <div className="logo">
                <p>Today</p>
                <p>Tasks</p>
                <p>Handover</p>
            </div>
            

            <div className="app-footer-right">
                <a href="#">Settings Gear</a>
            </div>
        </nav>
    )
}

export default AppFooter
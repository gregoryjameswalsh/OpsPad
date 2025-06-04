import React from 'react'
import '../../App.css'

const AppFooter = () => {
    return (
        <nav className="app-footer">
            <div className="footer-icons">

                <div className="footer-icon">
                    <i className="fa-solid fa-calendar-day"></i>
                    <p>Today</p>
                </div>

                <div className="footer-icon">
                    <i className="fa-solid fa-list-check"></i>
                    <p>Tasks</p>
                </div>

                <div className="footer-icon">
                    <i className="fa-solid fa-handshake"></i>
                    <p>Handover</p>
                </div>

            </div>
            

            <div className="app-footer-right">
                <i className="fa-solid fa-gear"></i>
            </div>
        </nav>
    )
}

export default AppFooter
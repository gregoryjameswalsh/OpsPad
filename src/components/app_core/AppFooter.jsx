import React from 'react'
import '../../App.css'

const AppFooter = () => {
    return (
        <nav className="app-footer">
            <div className="container footer-icons">

                <div className="container col">
                    <i class="fa-solid fa-calendar-day"></i>
                    <p>Today</p>
                </div>

                <div className="container col">
                    <i class="fa-solid fa-list-check"></i>
                    <p>Tasks</p>
                </div>

                <div className="container col">
                    <i class="fa-solid fa-handshake"></i>
                    <p>Handover</p>
                </div>

            </div>
            

            <div className="app-footer-right">
                <i class="fa-solid fa-gear"></i>
            </div>
        </nav>
    )
}

export default AppFooter
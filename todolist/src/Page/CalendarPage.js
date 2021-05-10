import React from 'react'
import Header from '../components/Header/Header'
import Sidebar from '../components/Sidebar/Sidebar'

const CalendarPage = () => {
    return (
        <div>
            <Sidebar/>
            <Header/>
            <div className="listbox-for-calendar">
                <h1 className="header-text">CALENDAR</h1>
            </div>
        </div>
    )
}

export default CalendarPage

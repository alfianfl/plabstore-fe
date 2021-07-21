import React from 'react'
import '../../assets/css/dashboard.css'
import Sidebar from '../../components/sidebar/Sidebar'


function Dashboard({ children }) {
    return (
        <div id="content">
            <Sidebar />
            <div className="tables">
                {children}
            </div>
        </div>
    )
}

export default Dashboard

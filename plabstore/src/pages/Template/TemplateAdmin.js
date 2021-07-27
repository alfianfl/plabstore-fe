import React from 'react'
import '../../assets/css/dashboard.css'
import Sidebar from '../../components/sidebar/Sidebar'


function TemplateAdmin({ children }) {
    return (
        <div id="content">
            <Sidebar />
            <div className="tables">
                {children}
            </div>
        </div>
    )
}

export default TemplateAdmin

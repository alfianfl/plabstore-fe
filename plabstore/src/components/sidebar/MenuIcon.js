import React from 'react'
import '../../assets/css/menuIcon.css'

function MenuIcon() {
    

    const click = () => {
        document.getElementById("menuContainer").classList.toggle("change")
        document.getElementById("sidebar").classList.toggle("toggle-sidebar")
    }


    return (
        <div id="menuContainer" className="menu-container" onClick={click}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
        </div>
    )
}

export default MenuIcon

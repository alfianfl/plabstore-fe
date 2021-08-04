import React from 'react'
import { Link } from "react-router-dom"
// import MenuIcon from './MenuIcon'
import '../../assets/css/sidebar.css'

function Sidebar() {
    return (
        <nav id="sidebar" className="sidebar-desktop">
            <div className="toggle-button">
                {/* <MenuIcon /> */}
            </div>
            <ul className="sidebar-bar">
                <li className="nav-item mb-2">
                    <Link className="nav-link" to="/dashboard/produk">Produk</Link>
                </li>
                <li className="nav-item mb-2">
                    <Link className="nav-link" to="/dashboard/transaksi">Transaksi</Link>
                </li>
                <li className="nav-item mb-2">
                    <Link className="nav-link" to="/dashboard/user">User</Link>
                </li>
                <li className="nav-item mb-2">
                    <Link className="nav-link" to="/">Logout</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Sidebar

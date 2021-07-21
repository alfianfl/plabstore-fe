import React from 'react'
// import '../../assets/css/navbarAdmin.css'
// import { Link } from "react-router-dom"
import AppBar from "@material-ui/core/AppBar"

function NavbarAdmin() {
    return (
        <div>
            {/* <div className="collapse navbar-collapse " id="navbarTogglerDemo01">
                <ul className="navbar-nav d-flex align-items-center justify-content-between bg-dark">
                    <li className="nav-item ">
                        <Link className="navbar-brand nav-link mt-2" to="/Dashboard">
                            <h6>PLab Store Dashboard</h6>
                        </Link>
                    </li>

                    <li className="nav-item mr-3">
                        <Link className="nav-link" to="#">
                            Logout
                        </Link>
                    </li>

                </ul>
            </div> */}
            <AppBar position="static">
                
            </AppBar>
        </div>
    )
}

export default NavbarAdmin

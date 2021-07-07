import React from "react";
import "../../assets/css/profile.css";
import { JustifyCenter } from "../../components/flex";
import { CardProduct } from "../../components/cards";
import { Link } from 'react-router-dom'

function Profile() {
  return (
    <div className="profile">
      <JustifyCenter>
        <div className="d-flex flex-column align-items-center profile-container">
          <div className="profile-pict">
            <img
              src="https://image000.flaticon.com/png/512/2948/2948035.png"
              alt="profile"
            />
          </div>
          <div className="mb-2">
            <h4>User A</h4>
          </div>
          <div className="edit-profil">
            <Link to="/EditProfile">Edit Profil</Link>
          </div>
        </div>
      </JustifyCenter>

      <CardProduct />
    </div>
  );
}

export default Profile;

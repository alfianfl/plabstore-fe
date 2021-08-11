import React from "react";
import "../../assets/css/profile.css";
import { JustifyCenter } from "../../components/flex";
import { CardProductSwiper } from "../../components/cards";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <div className="profile">
      <JustifyCenter>
        <div className="d-flex flex-column align-items-center profile-container">
          <div className="profile-pict">
            <img
              src="https://image.flaticon.com/icons/png/512/848/848043.png"
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

      <CardProductSwiper gender="pria" />
    </div>
  );
}

export default Profile;

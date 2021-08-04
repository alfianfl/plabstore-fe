import React, { useState } from "react";
import { GridContainer, GridItem } from "../../components/grid";
import "../../assets/css/editProfile.css";
import CardBio from "../../components/cards/CardBio";
import { CardAddress } from "../../components/cards";

function EditProfile() {
  const [isEditBio, setIsEditBio] = useState(true);

  return (
    <div className="edit-profile">
      <div className="d-flex row justify-content-between">
        <div className="col-12 col-md-4 mb-4">
          <div className="user-tab">
            <div className="user-info">
              <img
                src="https://image.flaticon.com/icons/png/512/848/848043.png"
                alt="profile"
              />
              <div className="ml-2 user-name">User A</div>
            </div>
            <div className="d-flex mt-3">
              <button
                className="user-tab-btn text-left"
                onClick={() => setIsEditBio(true)}
              >
                Biodata Diri
              </button>
            </div>
            <div className="d-flex mt-3">
              <button
                className="user-tab-btn text-left"
                onClick={() => setIsEditBio(false)}
              >
                Daftar Alamat
              </button>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-8">
          {isEditBio ? <CardBio /> : <CardAddress />}
        </div>
      </div>
    </div>
  );
}

export default EditProfile;

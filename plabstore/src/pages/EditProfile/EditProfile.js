import React, { useState } from "react";
import { GridContainer, GridItem } from "../../components/grid";
import "../../assets/css/editProfile.css";
import CardBio from "../../components/cards/CardBio";
import { CardAddress } from "../../components/cards";

function EditProfile() {
  const [isEditBio, setIsEditBio] = useState(true);

  return (
    <div className="edit-profile">
      <GridContainer>
        <GridItem xs={12} sm={4}>
          <div className="user-tab">
            <div className="user-info align-middle">
              <img
                src="https://image000.flaticon.com/png/512/2948/2948035.png"
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
        </GridItem>
        <GridItem xs={12} sm={8}>
          {isEditBio ? <CardBio /> : <CardAddress />}
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default EditProfile;

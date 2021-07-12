import React from "react";
import { GridContainer, GridItem } from "../grid";
import "../../assets/css/editProfile.css";
import { Button } from "../buttons";

function CardBio() {
  return (
    <div className="detail-profile-container ">
      <div className="">Ubah Biodata Diri</div>
      <GridContainer>
        <GridItem xs={12} sm={4}>
          <div className="mr-1">
            <div className="profile-pict">
              <img src="" alt="" />
            </div>
            <div className="d-flex mt-2">
              <button className="btn-white">Upload Foto</button>
            </div>
          </div>
        </GridItem>
        <GridItem xs={12} sm={8}>
          <div className="ml-1 d-flex flex-column justify-content-between">
            <form className="bio-form">
              <div>Nama</div>
              <input className="text-bio" type="text" value="User A" />
              <div>Email</div>
              <input
                className="text-bio"
                type="email"
                value="user.a@gmail.com"
              />
              <div>Jenis Kelamin</div>
              <div className="d-flex justify-content-start align-middle">
                <input className="mr-1" type="radio" name="pria" id="pria" />
                <label htmlFor="pria">Pria</label>
                <input
                  className="mr-1"
                  type="radio"
                  name="wanita"
                  id="wanita"
                />
                <label htmlFor="wanita">Wanita</label>
              </div>
              <div>Nomor HP</div>
              <input className="text-bio" type="number" value="0887567383" />
            </form>
            <div className="d-flex mt-5 justify-content-end">
              <Button size="medium" variant="contained" background="#94D0CC">
                Simpan
              </Button>
            </div>
          </div>
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default CardBio;

import React from "react";
import "../../assets/css/editProfile.css";
import { ModalAddress } from '../modal'

function CardAddress() {
  return (
    <div className="detail-profile-container ">
      <div className="">Ubah Daftar Alamat</div>
      <div className="mt-5">
        <ModalAddress>
          <button className="btn-white w-50">Tambah Alamat Baru</button>
        </ModalAddress>
      </div>
      <div className="address-container mt-2">
        <div className="d-flex justify-content-between">
          <div>Rumah</div>
          <ModalAddress>
            <div className="ubah-alamat">Ubah Alamat</div>
          </ModalAddress>
          {/* <Link to="">Ubah Alamat</Link> */}
        </div>
        <div>User A</div>
        <div>085847xxxx</div>
        <div className="d-flex justify-content-between">
          <div>Jl. Sekian Kali 2 no. 19 Rt 09 Rw 10 blok J/09</div>
          <div className="d-flex justify-content-end">
            <label className="option-items">
              <span className="mr-2">Dipilih</span>
              <input type="radio" value="dipilih" />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardAddress;

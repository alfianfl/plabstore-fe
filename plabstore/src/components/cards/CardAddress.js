import React from "react";
import "../../assets/css/editProfile.css";
import { ModalAddress } from '../modal'

function CardAddress(props) {
  const { dataAlamat } = props

  return (
    <div className="detail-profile-container ">
      <div className="">Ubah Daftar Alamat</div>
      <div className="mt-5">
        <ModalAddress>
          <button className="btn-white w-50">Tambah Alamat Baru</button>
        </ModalAddress>
      </div>
      {dataAlamat.map((alamat, index) => (
        <div key={index} className="address-container mt-2">
          <div className="d-flex justify-content-between">
            <div>{alamat.label}</div>
            <ModalAddress>
              <div className="ubah-alamat">Ubah Alamat</div>
            </ModalAddress>
          </div>
          <div>{alamat.penerima}</div>
          <div>{alamat.nomor}</div>
          <div className="d-flex justify-content-between">
            <div>{alamat.alamat}</div>
            <div className="d-flex justify-content-end">
              <label className="option-items">
                <span className="mr-2">Dipilih</span>
                <input type="radio" value="dipilih" />
              </label>
            </div>
          </div>
        </div>
      ))}

    </div>
  );
}

export default CardAddress;

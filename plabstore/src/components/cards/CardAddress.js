import React from 'react'
import '../../assets/css/editProfile.css'


function CardAddress() {
    return (
        <div className="detail-profile-container ">
            <div className="">Ubah Daftar Alamat</div>
            <div className="mt-5">
                <button className="btn-white w-50">Tambah Alamat Baru</button>
            </div>
            <div className="address-container mt-2">
                <div className="d-flex justify-content-between">
                    <div>Rumah</div>
                    <a href="#">Ubah Alamat</a>
                </div>
                <div>
                    User A
                </div>
                <div>
                    085847xxxx
                </div>
                <div className="d-flex justify-content-between">
                    <div>Jl. Sekian Kali 2 no. 19 Rt 09 Rw 10 blok J/09</div>
                    <div className="d-flex">
                        <label htmlFor="dipilih">Dipilih</label>
                        <input className="ml-1" type="radio" name="dipilih" id="pria" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardAddress

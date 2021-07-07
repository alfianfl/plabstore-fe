import React from 'react'
import { GridContainer, GridItem } from "../../components/grid"
import '../../assets/css/editProfile.css'
import { Button } from '../../components/buttons'

function CardBio() {
    const handleChange = (data) => {
        console.log(data)
    }

    return (
        <div className="detail-profile-container d-flex flex-column ">
            <div className="">Ubah Biodata Diri</div>
            <div className="container mt-2">
                <div className="row data-diri ">
                    <div className="col-12 col-md-4">
                        <div className="mr-1">
                            <div className="profile-pict">
                                <img src="" alt="" />
                            </div>
                            <div className="d-flex mt-2">
                                <button className="btn-white">Upload Foto</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-8 d-flex flex-column justify-content-between ">
                        <form className="bio-form">
                            <div>Nama</div>
                            <input className="text-bio" type="text" value="User A" onChange={handleChange} />
                            <div>Email</div>
                            <input className="text-bio" type="email" value="user.a@gmail.com" onChange={handleChange} />
                            <div>Jenis Kelamin</div>
                            <div className="d-flex justify-content-start align-middle">
                                <input className="mr-1" type="radio" name="pria" id="pria" /><label htmlFor="pria">Pria</label>
                                <input className="mr-1" type="radio" name="wanita" id="wanita" /><label htmlFor="wanita">Wanita</label>
                            </div>
                            <div>Nomor HP</div>
                            <input className="text-bio" type="number" value="0887567383" onChange={handleChange} />
                        </form>
                        <div className="">
                            <Button
                                size="medium"
                                variant="contained"
                                background="#94D0CC"
                            >
                                Simpan
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardBio

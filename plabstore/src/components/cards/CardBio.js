import React from "react";
import "../../assets/css/editProfile.css";
import { Button } from "../buttons";
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import useProfile from "../../hooks/useProfile";

const schema = yup.object().shape({
    nama: yup.string().required(),
    deskripsi: yup.string().required(),
    stok: yup.string().required(),
    harga: yup.string().required(),
})

const defaultValue = {
    nama: "User A",
    email: "user.a@gmail.com",
    gender: "pria",
    telp: "084748384939"
}

function CardBio() {
    const { register, handleSubmit, watch } = useForm({
        resolver: yupResolver(schema),
        defaultValues: defaultValue,
        mode: "onTouched"
    })

    const { editProfile } = useProfile()

    const upload = watch("foto")
    // const photo = URL.createObjectURL(upload[0])
    // console.log(photo)

    return (
        <div className="detail-profile-container d-flex flex-column ">
            <div className="">Ubah Biodata Diri</div>
            <div className="container mt-2">
                <div className="row data-diri ">
                    <div className="col-12 col-md-4">
                        <div className="mr-1">
                            <div className="profile-pict">
                                <img src={upload && URL.createObjectURL(upload[0])} alt="profile" />

                            </div>
                            <div className="d-flex mt-2">
                                <button className="btn-white" onClick={() => {
                                    document.getElementById('uploadFile').click()
                                }}>Upload Foto</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-8 d-flex flex-column justify-content-between ">
                        <form className="bio-form" onSubmit={handleSubmit(editProfile)}>
                            <div>Nama</div>
                            <input name="nama" className="text-bio" type="text" {...register("nama", { required: true })} />
                            <div>Email</div>
                            <input name="email" className="text-bio" type="email" {...register("email", { required: true })} />
                            <div>Jenis Kelamin</div>
                            <div className="d-flex justify-content-start">
                                <label className="option-items inline-flex items-center">
                                    <input name="gender" type="radio" value="pria" {...register("gender", { required: true })} />
                                    <span className="ml-2">Pria</span>
                                </label>
                                <label className="option-items inline-flex items-center">
                                    <input name="gender" type="radio" value="wanita" {...register("gender", { required: true })} />
                                    <span className="ml-2">Wanita</span>
                                </label>
                            </div>
                            <div>Nomor HP</div>
                            <input name="telp" className="text-bio" type="number" {...register("telp", { required: true })} />
                            <input
                                id="uploadFile"
                                type="file"
                                accept="image/*"
                                name="foto"
                                style={{ visibility: "hidden" }}
                                {...register("foto", { required: true })} />
                            <input id="submitForm" type="submit" style={{ visibility: "hidden" }} />
                        </form>
                        <div className="">
                            <Button
                                size="medium"
                                variant="contained"
                                background="#94D0CC"
                                
                            >
                                <div onClick={() => {
                                    document.getElementById('submitForm').click()
                                    // console.log('submit')
                                }}>
                                    Simpan
                                </div>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardBio;

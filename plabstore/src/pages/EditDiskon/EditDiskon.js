import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import useDiskon from '../../hooks/useDiskon'
import { Link } from 'react-router-dom'


const schema = yup.object().shape({
    diskon: yup.string().required(),
    kode: yup.string().required(),
})

const defaultValue = {
    diskon: "50%",
    kode: "029374023875",
    mulai: new Date("01/08/2021"),
    berakhir: new Date("10/08/2021"),
}

function EditDiskon() {
    const { register, handleSubmit } = useForm({
        resolver: yupResolver(schema),
        defaultValues: defaultValue,
        mode: "onTouched"
    })

    const { editDiskon } = useDiskon()

    return (
        <form className="px-4" onSubmit={handleSubmit(editDiskon)}>
            <Link to="/dashboard/diskon">
                <button className="btn-pagination my-3">Back</button>
            </Link>
            <h3 className="mb-5">Edit Diskon</h3>

            <div className="d-flex">
                <div className="w-100 m-1">
                    <h6>Besar Diskon</h6>
                    <input name="diskon" className="table-search" type="text" placeholder="Besar Diskon" {...register("diskon", { required: true })} />
                </div>
                <div className="w-100 m-1">
                    <h6>Kode Diskon</h6>
                    <input name="kode" className="table-search" type="text" placeholder="Kode" {...register("kode", { required: true })} />
                </div>
            </div>
            <div className="d-flex">
                <div className="w-100 m-1">
                    <h6>Tanggal Diskon Dimulai</h6>
                    <input name="mulai" className="table-search" type="date" {...register("mulai", { required: true })} />
                </div>
                <div className="w-100 m-1">
                    <h6>Tanggal Diskon Berakhir</h6>
                    <input name="berakhir" className="table-search" type="date" {...register("berakhir", { required: true })} />
                </div>
            </div>
            <button type="submit" className="btn-kirim m-1">Edit Diskon</button>
        </form>
    )
}

export default EditDiskon

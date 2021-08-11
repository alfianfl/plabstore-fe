import React from 'react'
import { Link } from 'react-router-dom'
import MenuIcon from '../../components/sidebar/MenuIcon'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import useAddProduct from '../../hooks/useAddProduct'
import '../../assets/css/addProduct.css'

const addProductForm = [
    { label: "Nama Produk", name: "nama", type: "text" },
    { label: "Deskripsi", name: "deskripsi", type: "text" },
    { label: "Stok", name: "stok", type: "number" },
    { label: "Harga", name: "harga", type: "number" },
]

const defaultValue = {
    nama: "Kaos Kemeja",
    deskripsi: "Kaos Kemeja pria siap pakai berbagai ukuran",
    stok: 200 ,
    harga: 270000 ,
}

const schema = yup.object().shape({
    nama: yup.string().required(),
    deskripsi: yup.string().required(),
    stok: yup.string().required(),
    harga: yup.string().required(),
})

function EditProduct() {
    const { register, handleSubmit, watch } = useForm({
        resolver: yupResolver(schema),
        defaultValues: defaultValue,
        mode: "onTouched"
    })

    const { submitProduct } = useAddProduct()

    const upload = watch("foto")
    // const photo = URL.createObjectURL(upload[0])
    // console.log(upload[0])

    return (
        <div>
            <div>
                <MenuIcon />
            </div>
            <Link to="/dashboard">
                <button className="btn-pagination my-3">Back</button>
            </Link>
            <div>
                <div className="add-product">
                    <h3 className="mb-5">Edit Produk</h3>
                    <form action="" className="w-100 my-5" onSubmit={handleSubmit(submitProduct)}>
                        {addProductForm.map((form, index) => (
                            <div key={index} className="my-2">
                                <div>{form.label}</div>
                                <input
                                    type={form.type}
                                    name={form.name}
                                    {...register(form.name, { required: true })}
                                />
                            </div>
                        ))}
                        <div className="my-2">
                            <div>Gender</div>
                            <select name="gender" {...register("gender", { required: true })} className="my-1">
                                <option value="pria">Pria</option>
                                <option value="wanita">Wanita</option>
                            </select>
                            <div>Kategori</div>
                            <select name="kategori" {...register("kategori", { required: true })} className="my-1">
                                <option value="kemeja">Kemeja</option>
                                <option value="kaos">Kaos</option>
                                <option value="celana">Celana</option>
                                <option value="gaun">Gaun</option>
                                <option value="rok">Rok</option>
                                <option value="kerudung">Kerudung</option>
                            </select>
                        </div>
                        <div>Foto</div>
                        <div className="container-foto">
                            {upload === undefined ? (
                                <p className="">Belum ada foto yang dipilih</p>
                            ) : (
                                <>
                                    {upload.length === 0 ? (
                                        <p className="">Tidak ada foto yang dipilih</p>
                                    ) : (
                                        <img src={URL.createObjectURL(upload[0])} className="img-upload" width="150" height="150" alt="produk" />
                                    )}
                                </>
                            )}
                            <input
                                id="uploadFile"
                                type="file"
                                className="upload-foto"
                                accept="image/*"
                                name="foto"
                                {...register("foto", { required: true })} />
                            <button className="btn-kirim" onClick={(e) => {
                                document.getElementById('uploadFile').click()
                                e.preventDefault()
                            }}>
                                Upload Foto
                            </button>
                        </div>
                        <input id="submitForm" type="submit" style={{visibility: "hidden"}} />
                    </form>
                    <button type="submit" className="btn-kirim w-100" onClick={() => {
                        document.getElementById('submitForm').click()
                    }} >Submit</button>
                </div>
            </div>
        </div>
    )
}

export default EditProduct

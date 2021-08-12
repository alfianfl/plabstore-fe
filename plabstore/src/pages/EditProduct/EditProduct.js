import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import MenuIcon from '../../components/sidebar/MenuIcon'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import useAddProduct from '../../hooks/useAddProduct'
import '../../assets/css/addProduct.css'
import { useParams } from 'react-router'
import { useSelector, useDispatch } from "react-redux";
import { fetchDetailProducts } from "../../redux";

const addProductForm = [
    { label: "Nama Produk", name: "nama", type: "text" },
    { label: "Kode", name: "kode", type: "text" },
    { label: "Stok", name: "qty", type: "number" },
    { label: "Harga", name: "harga", type: "number" },
]

const schema = yup.object().shape({
    nama: yup.string().required(),
    deskripsi: yup.string().required(),
    qty: yup.string().required(),
    harga: yup.string().required(),
})

function EditProduct() {
    const { id } = useParams();
    const productData = useSelector((state) => state.detailProduct);
    const dispatch = useDispatch();

    const { register, handleSubmit, watch, reset } = useForm({
        resolver: yupResolver(schema),
        // defaultValues: productData.product,
        mode: "onTouched"
    })

    useEffect(() => {
        dispatch(fetchDetailProducts(id));
    }, [dispatch, id]);

    useEffect(() => {
        reset(productData.product)
    }, [reset, productData.product])

    console.log(productData.product)

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
                            <select name="category.jenis" {...register("category.jenis", { required: true })} className="my-1">
                                <option value="pria">Pria</option>
                                <option value="wanita">Wanita</option>
                            </select>
                            <div>Kategori</div>
                            <select name="category.nama" {...register("category.nama", { required: true })} className="my-1">
                                <option value="Kemeja">Kemeja</option>
                                <option value="Kaos">Kaos</option>
                                <option value="Celana">Celana</option>
                                <option value="Gaun">Gaun</option>
                                <option value="Rok">Rok</option>
                                <option value="Kerudung">Kerudung</option>
                            </select>
                        </div>
                        <div>Foto</div>
                        <div className="container-foto">
                            {productData.product.gambar && upload === undefined ? (
                                <img src={productData.product.gambar} className="img-upload" width="150" height="150" alt="produk" />
                            ) : upload && upload.length !== 0 ? (
                                <img src={URL.createObjectURL(upload[0])} className="img-upload" width="150" height="150" alt="produk" />
                            ) : (
                                <p className="">Tidak ada foto yang dipilih</p>
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
                        <input id="submitForm" type="submit" style={{ visibility: "hidden" }} />
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

import React from 'react'
import MenuIcon from '../../components/sidebar/MenuIcon'
import Table from '../../components/table/Table'
import { Link } from 'react-router-dom'
import MOCK_DATA_DISKON from '../../dummy_data/MOCK_DATA_DISKON.json'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import useDiskon from '../../hooks/useDiskon'

const schema = yup.object().shape({
    diskon: yup.string().required(),
    kode: yup.string().required(),
})

function Diskon() {
    const { register, handleSubmit } = useForm({
        resolver: yupResolver(schema),
        mode: "onTouched"
    })

    const { addDiskon } = useDiskon()

    const deleteRow = (id) => {
        console.log('delete produk dengan id ' + id)
    }

    const DISKON = [
        { Header: 'Id', accessor: 'id' },
        { Header: 'Diskon', accessor: 'diskon' },
        { Header: 'Kode', accessor: 'kode' },
        { Header: 'Mulai', accessor: 'mulai' },
        { Header: 'Berakhir', accessor: 'berakhir' },
        {
            Header: 'Aksi',
            Cell: (props) => {
                return (
                    <div className="d-flex justify-content-center">
                        <Link to={`/dashboard/diskon/edit/${props.row.original.id}`}>
                            <button className="btn-hapus mx-1">Edit</button>
                        </Link>
                        <button className="btn-hapus mx-1" onClick={() => deleteRow(props.row.original.id)}>Hapus</button>
                    </div>
                )
            }
        }
    ]

    return (
        <>
            <MenuIcon />
            <Table name="Diskon" columns={DISKON} data={MOCK_DATA_DISKON} >
                <form className="px-4" onSubmit={handleSubmit(addDiskon)}>
                    <div className="d-flex">
                        <input name="diskon" className="table-search w-100 m-1" type="text" placeholder="Besar Diskon" {...register("diskon", { required: true })} />
                        <input name="kode" className="table-search w-100 m-1" type="text" placeholder="Kode" {...register("kode", { required: true })} />
                    </div>
                    <div className="d-flex">
                        <input name="mulai" className="table-search w-100 m-1" type="date" {...register("mulai", { required: true })} />
                        <input name="berakhir" className="table-search w-100 m-1" type="date" {...register("berakhir", { required: true })} />
                    </div>
                    <button type="submit" className="btn-kirim m-1">Buat Diskon</button>
                </form>
                {/* <Link to="/dashboard/produk/add">
                    <button className="btn-pagination my-3">Tambah produk</button>
                </Link> */}
            </Table>
        </>
    )
}

export default Diskon

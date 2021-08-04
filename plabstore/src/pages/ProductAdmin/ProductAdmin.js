import React from 'react'
import { Link } from 'react-router-dom'
import MenuIcon from '../../components/sidebar/MenuIcon'
import Table from '../../components/table/Table'
import MOCK_DATA_PRODUK from '../../dummy_data/MOCK_DATA_PRODUK.json'

function ProductAdmin() {

    const deleteRow = (id) => {
        console.log('delete produk dengan id ' + id)
    }

    const PRODUK = [
        { Header: 'Id', accessor: 'id' },
        { Header: 'Nama Produk', accessor: 'nama_produk' },
        { Header: 'Stok', accessor: 'stok' },
        { Header: 'Harga', accessor: 'harga' },
        { Header: 'Kategori', accessor: 'kategori' },
        {
            Header: 'Aksi',
            Cell: (props) => {
                return (
                    <div className="d-flex justify-content-center">
                        <Link to={`/dashboard/produk/edit/${props.row.original.id}`}>
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
            <Table name="Produk" columns={PRODUK} data={MOCK_DATA_PRODUK} >
                <Link to="/dashboard/produk/add">
                    <button className="btn-pagination my-3">Tambah produk</button>
                </Link>
            </Table>
            {/* <ProdukTable /> */}
        </>
    )
}

export default ProductAdmin

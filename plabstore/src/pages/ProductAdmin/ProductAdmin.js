import React, { useState } from 'react'
// import { ProdukTable } from '../../components/table/ProdukTable'
import MenuIcon from '../../components/sidebar/MenuIcon'
import Table from '../../components/table/Table'
import MOCK_DATA_PRODUK from '../../dummy_data/MOCK_DATA_PRODUK.json'

function ProductAdmin() {
    const [selectedRow, setSelectedRow] = useState({})

    function selectRow(row) {
        setSelectedRow(row)
    }

    const PRODUK = [
        { Header: 'Id', accessor: 'id' },
        { Header: 'Nama Produk', accessor: 'nama_produk' },
        { Header: 'Stok', accessor: 'stok' },
        { Header: 'Harga', accessor: 'harga' },
        { Header: 'Kategori', accessor: 'kategori' },
        {
            Header:'Aksi',
            Cell:(props)=>{
                return (
                    <div className="d-flex justify-content-center">
                        <button className="btn-hapus mx-1" onClick={() => selectRow(props.row.values)}>Edit</button>
                        <button className="btn-hapus mx-1" onClick={() => selectRow(props.row.values)}>Hapus</button>
                    </div>
                )
            }
        }
    ]

    return (
        <>
            <MenuIcon />
            <Table name="Produk" columns={PRODUK} data={MOCK_DATA_PRODUK} >
                <button className="btn-pagination my-3">Tambah produk</button>
            </Table>
            {/* <ProdukTable /> */}
        </>
    )
}

export default ProductAdmin

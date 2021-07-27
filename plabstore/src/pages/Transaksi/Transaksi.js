import React, { useState } from 'react'
// import { TransferTable } from '../../components/table/TransferTable'
import MenuIcon from '../../components/sidebar/MenuIcon'
import Table from '../../components/table/Table'
import MOCK_DATA_TRANSAKSI from '../../dummy_data/MOCK_DATA_TRANSAKSI.json'

function Transaksi() {
    const [selectedRow, setSelectedRow] = useState({})

    function selectRow(row) {
        setSelectedRow(row)
    }

    const TRANSACTION = [
        { Header: 'Id', accessor: 'id' },
        { Header: 'Nama', accessor: 'nama' },
        { Header: 'Jumlah', accessor: 'jumlah' },
        { Header: 'Tanggal', accessor: 'tanggal' },
        { Header: 'Harga', accessor: 'harga' },
        { Header: 'Alamat', accessor: 'alamat' },
        {
            Header:'Bukti Pembayaran',
            accessor:'bukti_foto',
            Cell:()=>{
                return (
                    <div className="d-flex justify-content-center">
                        bukti pembayaran
                    </div>
                )
            }
        },
        { Header:'Status', accessor:'status'},
        {
            Header:'Aksi',
            Cell:(props)=>{
                return (
                    <div className="d-flex justify-content-center">
                        <button className="btn-kirim" onClick={() => selectRow(props.row.values)}>Kirim Barang</button>
                    </div>
                )
            }
        }
    ]

    return (
        <>
            <MenuIcon />
            <Table name="Transaksi" columns={TRANSACTION} data={MOCK_DATA_TRANSAKSI}  />
        </>
    )
}

export default Transaksi

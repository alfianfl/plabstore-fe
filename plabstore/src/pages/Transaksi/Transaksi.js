import React, { useState, useEffect } from 'react'
import MenuIcon from '../../components/sidebar/MenuIcon'
import Table from '../../components/table/Table'
// import MOCK_DATA_TRANSAKSI from '../../dummy_data/MOCK_DATA_TRANSAKSI.json'
import { useDispatch, useSelector } from "react-redux";
import { fetchTransaksi } from '../../redux'

function Transaksi() {
    const [selectedRow, setSelectedRow] = useState({})
    const transaksiData = useSelector((state) => state.transaksi)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTransaksi());
    }, [dispatch])

    function selectRow(row) {
        setSelectedRow(row)
        console.log(selectedRow)
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
                        Bukti pembayaran
                    </div>
                )
            }
        },
        { Header:'Status', accessor:'status'},
        {
            Header:'Aksi',
            Cell:(props)=>{
                // console.log(props.row.values.status)
                return (
                    <div className="d-flex justify-content-center">
                        {props.row.values.status === "Sedang dikirim" || props.row.values.status === "Diterima" ? (
                            <button className="btn-kirim" onClick={() => selectRow(props.row.values)} disabled>Dikirim</button>
                        ) : (
                            <button className="btn-kirim" onClick={() => selectRow(props.row.values)}>Kirim Barang</button>
                        )}
                    </div>
                )
            }
        }
    ]

    return (
        <>
            <MenuIcon />
            <Table name="Transaksi" columns={TRANSACTION} data={transaksiData.transaksi}  />
        </>
    )
}

export default Transaksi

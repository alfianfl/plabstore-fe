import React, { useEffect } from 'react'
// import { BasicTable } from '../../components/table/BasicTable'
import MenuIcon from '../../components/sidebar/MenuIcon'
import Table from '../../components/table/Table'
// import MOCK_DATA from '../../dummy_data/MOCK_DATA.json'
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from '../../redux'

function User() {
    const userData = useSelector((state) => state.users)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch])

    // console.log(userData)


    const USERS = [
        { Header: 'Id', accessor: 'id' },
        { Header: 'Nama', accessor: 'nama' },
        { Header: 'Email', accessor: 'email' },
        { Header: 'Jenis Kelamin', accessor: 'jenis_kelamin' },
        { Header: 'Nomor HP', accessor: 'nomor_hp' },
        { Header: 'Alamat', accessor: 'alamat' }
    ]

    return (
        <>
            <MenuIcon />
            <Table name="User" columns={USERS} data={userData.users} />
            {/* <BasicTable /> */}
        </>
    )
}

export default User
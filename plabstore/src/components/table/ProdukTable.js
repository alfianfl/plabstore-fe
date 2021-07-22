import React, { useMemo } from 'react'
import { useTable } from 'react-table'
import MOCK_DATA_PRODUK from '../../dummy_data/MOCK_DATA_PRODUK.json'
import { PRODUK } from './columns'
import '../../assets/css/table.css'

export const ProdukTable = () => {

    const columns = useMemo(() => PRODUK, [])
    const data = useMemo(() => MOCK_DATA_PRODUK, [])

    const tableInstance = useTable({
        columns,
        data
    })

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance

    return (
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <th {...column.getHeaderProps()}>
                                {column.render('Header')}
                            </th>

                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row) => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map((cell) => (
                                <td {...cell.getCellProps()}>
                                    {cell.render('Cell')}
                                </td>
                            ))}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

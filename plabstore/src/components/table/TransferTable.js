import React, { useMemo } from 'react'
import { useTable } from 'react-table'
import MOCK_DATA_TRANSFER from '../../dummy_data/MOCK_DATA_TRANSFER.json'
import { TRANSACTION } from './columns'
import '../../assets/css/table.css'

export const TransferTable = () => {

    const columns = useMemo(() => TRANSACTION, [])
    const data = useMemo(() => MOCK_DATA_TRANSFER, [])

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

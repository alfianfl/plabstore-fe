import React, { useMemo } from 'react'
import { useTable, usePagination, useGlobalFilter } from 'react-table'
import '../../assets/css/table.css'

function Table(props) {
    const columns = props.columns
    const data = useMemo(() => props.data, [props.data])

    const tableInstance = useTable({
        columns,
        data,
    },
        useGlobalFilter, usePagination)

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        pageSize,
        setPageSize,
        state,
        setGlobalFilter,
        prepareRow,
    } = tableInstance

    const { pageIndex, globalFilter } = state

    return (
        <div>
            <div className="table-name">
                <h1>
                    {props.name}
                </h1>
            </div>
            <div className="my-2">
                {props.children}
            </div>
            <div className="table-entry" >
                {/* Table Size */}
                <div>
                    <span className="">
                        Show&nbsp;
                        <select className="" value={pageSize} onChange={e => setPageSize(Number(e.target.value))}>
                            {[10, 25, 50].map(pageSize => (
                                <option key={pageSize} value={pageSize}>{pageSize}</option>
                            ))}</select>
                        &nbsp;Entries
                    </span>
                </div>
                {/* Search bar */}
                <input type="text" className="table-search" placeholder="Cari" value={globalFilter || ''} onChange={e => setGlobalFilter(e.target.value)} />
            </div>

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
                    {page.map((row) => {
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

            <div className="table-pagination">
                {/* Entries Info */}
                <div>
                    <span>Page{' '}<strong>{pageIndex + 1} of {pageOptions.length}</strong></span>
                </div>
                {/* Pagination */}
                <div className="d-flex">
                    <button className="btn-pagination mx-1" onClick={() => { previousPage() }} disabled={!canPreviousPage} >Previous</button>
                    <button className="btn-pagination mx-1" onClick={() => { nextPage() }} disabled={!canNextPage} >Next</button>
                </div>
            </div>
        </div>
    )
}

export default React.memo(Table)

import React from 'react'
import ReactTable from 'react-table';
import "react-table/react-table.css"

const Table = () => {

    const data = [
        {
            hero: 'spiderman',
            name: 'Peter Parkar',
            age: 22,
        },
        {
            hero: 'superman',
            name: 'Clark kent [Kal-EI]',
            age: 33,
        },
        {
            hero: 'Batman',
            name: 'Bruce Wayne',
            age: 55,
        },
        {
            hero: 'Flash',
            name: 'Barry Allen',
            age: 19
        }
    ]

    const columns = [
        {
            Header: 'Hero',
            accessor: 'hero'
        },
        {
            Header: 'Orignal Name',
            accessor: 'name'
        },
        {
            Header: 'Age',
            accessor: 'age'
        }
    ]

    useTable( {
        columns: columns,
        data: data
    })
    return (
        <div>
            <ReactTable
                data={data}
                columns={columns}
                defaultPageSize={3}
                pageSizeOptions={[3, 9, 12]}
            />

        </div>
    )
}

export default Table;

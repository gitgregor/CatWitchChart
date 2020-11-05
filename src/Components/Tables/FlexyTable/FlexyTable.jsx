import React from 'react'
import ReactFlexyTable from 'react-flexy-table'
import 'react-flexy-table/dist/index.css'

const data = { Name: "adam", age: 33 }

const FlexyTable = () => {
    return (
        <div>
            <ReactFlexyTable data={data} />

        </div>
    )
}

export default FlexyTable
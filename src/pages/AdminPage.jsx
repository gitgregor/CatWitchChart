import React from 'react'
// import FlexyTable from '../Components/Tables/FlexyTable/FlexyTable'  // NIE Działa
import DataGrid from '../Components/Tables/DataGrid/DataGrid'


const Admin = () => {
    return (
        <div className="admin_title">
            <h3>Main Grid</h3>
            <br />

            {/* <FlexyTable />  NIE DZIAŁA*/}
            <DataGrid />
        </div>
    )
}

export default Admin

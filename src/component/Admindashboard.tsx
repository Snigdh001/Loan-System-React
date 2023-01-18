import React, { useEffect, useState } from 'react'
import { alluser, response } from '../servies/admin'
import Adminheader from './Adminheader'
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid'
import './css/admindashboard.css'

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'fname',
        headerName: 'First name',
        type: 'grid',
        width: 150,
        editable: true,
    },
    {
        field: 'lname',
        headerName: 'Last name',
        type: 'string',
        width: 150,
        editable: true,
    },
    {
        field: 'email',
        headerName: 'Email',
        type: 'string',
        width: 250,
        editable: true,
    },
    {
        field: 'mobile',
        headerName: 'Mobile',
        type: 'string',
        width: 110,
        editable: true,
    },
    {
        field: 'role',
        headerName: 'Role',
        type: 'string',
        width: 100,
        editable: true,
    },
    //     {
    //         field: '',
    //         headerName: 'Action',
    //         width: 300,
    //         // editable: true,
    //         renderCell: (callValues)=>
    // {
    //     return (
    //         <button type="submit" color="primary"  > Delete</button>
    //     )
    // }    },



];




const Admindashboard = () => {
    const [users, setUsers] = useState<response[]>();



    useEffect(() => {
        // getusers().then((response)=>setUsers(response.data))
        alluser().then(res => setUsers(res.data)).catch(err => console.log(err));
    }, []);


    return (
        <div>
            <Adminheader />
            {/* <table className="table">
  <thead>
    <tr>
      <th scope="col">S.no</th>
      <th scope="col">ID</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Email</th>
      <th scope="col">Mobile</th>
      <th scope="col">Role</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
  </tbody>
</table> */}
            <div className='filters'>
                <form action="" id="searchform" method="get">
                    <div className="box">
                        <label htmlFor="search">Search</label>
                        <input type="text" name="search" placeholder="Search" id="search"/>
                        <button type="submit">Search</button>
                    </div>
                </form>
                <form action="" id='filterform' method="get">
                    <div className="box">
                    <label htmlFor="namef">Email</label>
                        <input type="text" name="namef" id="namef" />
                        <label htmlFor="emailf">Name</label>
                        <input type="text" name="emailf" id="emailf" />
                        <label htmlFor="mobilef">Mobile</label>
                        <input type="text" name="mobilef" id="mobilef" />
                        <button type="submit">Apply Filter</button>
                    </div>
                </form>
            </div>
            <Box sx={{ marginLeft: "100px", height: "52vh", width: '80%' }}>
                <DataGrid
                    rows={users ? users : []}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    disableSelectionOnClick
                    experimentalFeatures={{ newEditingApi: true }}
                />
            </Box>

        </div>
    )
}

export default Admindashboard
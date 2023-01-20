import React, { useEffect, useState } from 'react'
import { alluser, deleteuser, filter, response ,delresponse} from '../servies/admin'
import Adminheader from './Adminheader'
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridToolbar, GridValueGetterParams } from '@mui/x-data-grid'
import './css/admindashboard.css'
import '../../node_modules/w3-css/w3.css'
import FormHoook from '../Hooks/Form';
import { toast } from 'react-toastify';








const Admindashboard = () => {
    const [delid, setDelid] = useState("");
    const searchF = FormHoook("");
    const emailF = FormHoook("");
    const mobF = FormHoook("");
    const nameF = FormHoook("");
    const [users, setUsers] = useState<response[]>();
    const [res, setRes] = useState<delresponse[]>();

    
    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'fname',
            headerName: 'First name',
            type: 'grid',
            width: 200,
            // editable: true,
        },
        {
            field: 'lname',
            headerName: 'Last name',
            type: 'string',
            width: 200,
            // editable: true,
        },
        {
            field: 'email',
            headerName: 'Email',
            type: 'string',
            width: 200,
            // editable: true,
        },
        {
            field: 'mobile',
            headerName: 'Mobile',
            type: 'string',
            width: 200,
            // editable: true,
        },
        {
            field: 'role',
            headerName: 'Role',
            type: 'string',
            width: 200,
            // editable: true,
    
        },
        {
            field: 'Action',
            headerName: 'Action',
            width: 300,
            // editable: true,
            renderCell: (cellValues) => {
                let deleteid = cellValues.id as string;
                setDelid(deleteid);
                
                const ondelete = async (e:any) => {
                    e.preventDefault()
                    
                    let result= deleteuser(delid).catch(err=>console.log(err));
                    alluser().then(Res => setUsers(Res.data)).catch(err => console.log(err));
                    toast("User Deleted Sucessfully");
                }
                return (
                    <button type="button" className="btn btn-info" onClick={ondelete} color="primary"> Delete</button>
    
                )
            }
        },
    
    
    
    ];
    useEffect(() => {
        let result: any = 0;
        result = alluser().then(Res => setUsers(Res.data)).catch(err => console.log(err));
        // console.log(users);
    }, []);





    const submitForm = async (e: any) => {
        e.preventDefault()
        {
            const data = {
                search: searchF.value,
                email: emailF.value,
                mobile: mobF.value,
                name: nameF.value,
            };
            const result = filter(data).then(res => setUsers(res.data)).catch(err => console.log(err));
            // console.log(users)

        }
    }

    return (
        <div>
            <Adminheader />
            <div>

                <div className="w3-sidebar w3-light-grey w3-bar-block" style={{ width: "10%" }}>
                    <h3 className="w3-bar-item">Loan</h3>
                    <a href="/admin" className="w3-bar-item w3-button">Home</a>
                    <a href="/admindashboard" className="w3-bar-item w3-button">User List</a>
                    {/* <a href="#" className="w3-bar-item w3-button">Link 3</a> */}
                </div>


                <div style={{ marginLeft: "10%" }}>

                    <div className="w3-container w3-teal">
                        <h1>User List</h1>
                    </div>
                    <div className="w3-container">
                        <div className='filters'>

                            <form action="" id='filterform' onSubmit={submitForm} method="get">
                                <div className="box">
                                    <label htmlFor="emailf">Email</label>
                                    <input type="text" name="emailf" {...emailF} placeholder='Email' id="emailf" />

                                    <label htmlFor="namef">Name</label>
                                    <input type="text" name="namef" {...nameF} placeholder='Name' id="namef" />

                                    <label htmlFor="mobilef">Mobile</label>
                                    <input type="text" name="mobilef" placeholder='Mobile' {...mobF} id="mobilef" />
                                    <label htmlFor="search">Search</label>
                                    <input type="text" name="search" placeholder="Search" {...searchF} id="search" />
                                    <button type="submit">Apply </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <Box sx={{ height: "62vh", width: '90%' }}>
                        <DataGrid
                            rows={users ? users : []}
                            columns={columns}
                            pageSize={10}
                            rowsPerPageOptions={[5]}
                            checkboxSelection
                            disableSelectionOnClick
                            components={{ Toolbar: GridToolbar }}
                            experimentalFeatures={{ newEditingApi: true }}
                        />
                    </Box>
                </div>
            </div>
        </div>
    )
}


export default Admindashboard


import React, { SyntheticEvent, useEffect, useState } from 'react'
import { alluser, deleteuser, filter, response, optresponse, updateUser } from '../servies/admin'
import Adminheader from './Adminheader'
import Box from '@mui/material/Box';
import { DataGrid, GridCellParams, GridColDef, GridRenderCellParams, GridRowId, GridToolbar, GridValueGetterParams } from '@mui/x-data-grid';
import './css/admindashboard.css'
import '../../node_modules/w3-css/w3.css'
import FormHoook from '../Hooks/Form';
import { toast } from 'react-toastify';
import { Col, Modal, ModalBody, ModalHeader, Row } from 'reactstrap'
import { updateLanguageServiceSourceFile } from 'typescript';


const Admindashboard = () => {
    const [pageSize, setPageSize] = React.useState<number>(5);
    const [optid, setoptid] = useState("");
    const searchF = FormHoook("");
    const emailF = FormHoook("");
    const mobF = FormHoook("");
    const nameF = FormHoook("");
    const [users, setUsers] = useState<response[]>();
    const [res, setRes] = useState<optresponse[]>();
    const [isEditOpen, setIsEditOpen] = useState(false);


    useEffect(() => {
        let result: any = 0;
        result = alluser().then(Res => setUsers(Res.data)).catch(err => console.log(err));
        // console.log(users);
    }, []);
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
            width: 200,
            // editable: true,
        },
        {
            field: 'email',
            headerName: 'Email',
            width: 200,
            // editable: true,
        },
        {
            field: 'mobile',
            headerName: 'Mobile',
            width: 200,
            // editable: true,
        },
        {
            field: 'role',
            headerName: 'Role',
            width: 200,
            // editable: true,

        },
        {
            field: 'Delete',
            headerName: 'Delete',
            width: 150,
            // editable: true,
            renderCell: (cellValues) => {
                let deleteid = cellValues.id as string;
                setoptid(deleteid);

                const ondelete = async (e: any) => {
                    e.preventDefault()

                    let result = await deleteuser(optid).catch(err => console.log(err));
                    alluser().then(Res => setUsers(Res.data)).catch(err => console.log(err));
                    toast("User Deleted Sucessfully");
                }
                return (
                    <button type="button" className="btn btn-info" onClick={ondelete} color="primary"> Delete</button>
                )
            }
        },
        {
            field: 'Edit',
            headerName: 'Edit',
            width: 150,
            // editable: true,
            renderCell: (cellValues) => {
                return (
                    <button type="button" className="btn btn-info"
                        onClick={(evt) => {
                            getUserDetails(evt, cellValues);

                        }} color="primary"> Update</button>

                )
            }
        }
    ];
    const [obj, setObj] = useState({
        id: "",
        fname: "",
        lname: "",
        email: "",
        mobile: "",

    });

    const getUserDetails = (evt: SyntheticEvent, data: GridRenderCellParams) => {
        evt.preventDefault();
        const datain = {
            id: data.row.id,
            fname: data.row.fname,
            lname: data.row.lname,
            email: data.row.email,
            mobile: data.row.mobile,
        }
        setObj(datain);
        setIsEditOpen((prevState) => {
            return true
        });


    }
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
            

        }
    }

    return (
        <div>
            <Adminheader />
            <div>
                <div className="w3-sidebar w3-light-grey w3-bar-block" style={{ width: "10%" }}>
                    <h3 className="w3-bar-item">Loan</h3>
                    {/* <a href="/admin" className="w3-bar-item w3-button">Home</a> */}
                    <a href="/admindashboard" className="w3-bar-item w3-button">User List</a>
                    <a href="/loanapplication" className="w3-bar-item w3-button">Loan Request</a>
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
                            pageSize={pageSize}
                            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                            rowsPerPageOptions={[5, 10, 20, 40]}
                            checkboxSelection
                            disableSelectionOnClick
                            components={{ Toolbar: GridToolbar }}
                            experimentalFeatures={{ newEditingApi: true }}
                        />
                    </Box>
                </div>
            </div>
            {
                isEditOpen && <>
                    <Modal isOpen={isEditOpen} size='md' toggle={() => setIsEditOpen(!isEditOpen)} >
                        <ModalHeader
                            toggle={() => setIsEditOpen(!isEditOpen)}>Update Details
                        </ModalHeader>
                        <ModalBody>

                            <form onSubmit={async (evt) => {
                                // edit(editId)
                                evt.preventDefault();
                                let data = new FormData(evt.currentTarget);
                                let formData = {

                                    "fname": data.get("fname"),
                                    "lname": data.get("lname"),
                                    "email": data.get("email"),
                                    "mobile": data.get("mobile"),
                                };
                                let res = await updateUser(data, obj.id);

                                if (res.data.messages.success === 'true') {
                                    setIsEditOpen(false)
                                    alluser().then(Res => setUsers(Res.data)).catch(err => console.log(err));
                                    toast.success("Data Updated Successfully")
                                }
                                else {
                                    setIsEditOpen(false)
                                    toast.success("Error Occured");
                                }
                            }}>
                                <Row className='mt-2'>
                                    <Col>Name
                                    </Col>
                                    <Col><input type="text" name="fname" className='form-control' defaultValue={obj.fname} /></Col>

                                </Row>
                                <Row className='mt-2'>
                                    <Col>Name
                                    </Col>
                                    <Col><input type="text" name="lname" className='form-control' defaultValue={obj.lname} /></Col>

                                </Row>
                                <Row className='mt-2'>
                                    <Col>Email
                                    </Col>
                                    <Col><input type="text"
                                        name="email"
                                        className='form-control' defaultValue={obj.email} /></Col>

                                </Row>
                                <Row className='mt-2'>
                                    <Col>Mobile
                                    </Col>
                                    <Col><input type="text"
                                        name="mobile"
                                        className='form-control'
                                        defaultValue={obj.mobile}
                                    /></Col>

                                </Row>

                                <Row className='mt-4'>
                                    <Col lg={12} className="row">
                                        <div className='d-flex justify-content-end'>
                                            <button onClick={() => setIsEditOpen(false)} className="col-md-3 ms-2 btn btn-success"  >Cancel</button>
                                            <button type='submit' className="col-md-3 ms-2 btn btn-danger">Update</button>

                                        </div>
                                    </Col>
                                </Row>
                            </form>
                        </ModalBody>
                    </Modal></>
            }
        </div>
    )
}


export default Admindashboard


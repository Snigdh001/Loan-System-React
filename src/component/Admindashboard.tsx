import React, { SyntheticEvent, useEffect, useState } from 'react'
import { alluser, deleteuser, filter,  updateUser } from '../servies/admin'
import Adminheader from './Adminheader'
import Box from '@mui/material/Box';
import { DataGrid, GridCellParams, GridColDef, GridRenderCellParams, GridRowId, GridToolbar, GridValueGetterParams } from '@mui/x-data-grid';
import './css/admindashboard.css'
import '../../node_modules/w3-css/w3.css'
import FormHoook from '../Hooks/Form';
import { toast } from 'react-toastify';
import { Col, Label, Modal, ModalBody, ModalHeader, Row } from 'reactstrap'
import { updateLanguageServiceSourceFile } from 'typescript';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import { response } from '../servies/Interface';


const Admindashboard = () => {
    const [pageSize, setPageSize] = React.useState<number>(5);
    const [optid, setoptid] = useState("");
    let searchF = FormHoook("");
    let emailF = FormHoook("");
    let mobF = FormHoook("");
    let nameF = FormHoook("");
    const [users, setUsers] = useState<response[]>();
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [emailerror, setErroremail] = useState('');
    const [nameerror, setErroname] = useState('');
    const [lnameerror, setErrolname] = useState('');
    const [moberror, setErrormob] = useState('');
    const emailregex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z.]{2,5}$/i;
    const phoneregex = /^[1-9]{1}[0-9]{9}$/i;
    const nameregex = /^[a-zA-Z]{3,16}$/i;
    const [confirm, setConfirm] = useState({ fn: true, ln:true, email: true, mob: true});
    const navigate = useNavigate();
    


    useEffect(() => {
        let result: any = 0;
        result = alluser(page, pageSize).then(Res => {
            setUsers(Res.data.data);
            setTotalPages(Res.data.totalpages)
        }).catch(err => console.log(err));
        // console.log(result);

    }, [page, pageSize])

    const handlePageChange = (index: number) => {
        setPage(index);}
    
        const checkEmail = (e: any) => {

            if (emailregex.test(e.currentTarget.value) === false) {
                setErroremail("Please Enter Valid Email Address i.e abc@zyx.com");
                setConfirm((prevState) => { return { ...prevState, "email": false } })
                return false;
                
            }
            else {
                setErroremail("")
                setConfirm((prevState) => { return { ...prevState, "email": true } })
                return true;
            }
        }
        const checkName = (e: any) => {
            if (nameregex.test(e.currentTarget.value) === false) {
                setConfirm((prevState) => { return { ...prevState, "fn": false } })
                setErroname("Please Enter Valid First Name");
                return false;
            }
            else {
                setErroname("")
                setConfirm((prevState) => { return { ...prevState, "fn": true } })
                return true;
            }
        }
        const checkLname = (e: any) => {
            if (nameregex.test(e.currentTarget.value) === false) {
                setConfirm((prevState) => { return { ...prevState, "ln": false } })
                setErrolname("Please Enter Valid Last Name");
                return false;
            }
            else {
                setErrolname("")
                setConfirm((prevState) => { return { ...prevState, "ln": true } })
                return true;
            }
        }
        
        const checkMob = (e: any) => {
            if (phoneregex.test(e.currentTarget.value) === false) {
                setErrormob("Please Enter Valid Mobile Number");
                setConfirm((prevState) => { return { ...prevState, "mob": false } })
                return false;
            }
            else {
                setErrormob("")
                setConfirm((prevState) => { return { ...prevState, "mob": true } })
                return true;
            }
        }
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
            width: 100,
            // editable: true,

        },
        {
            field: 'Edit',
            headerName: 'Edit',
            width: 120,
            // editable: true,
            renderCell: (cellValues) => {
                return (
                    <button type="button" className="btn btn-info"
                        onClick={(evt) => {
                            getUserDetails(evt, cellValues);

                        }} color="primary"> Update</button>

                )
            }
        },
        {
            field: 'Delete',
            headerName: 'Delete',
            width: 120,
            // editable: true,
            renderCell: (cellValues) => {
                let deleteid = cellValues.id as string;
                setoptid(deleteid);
                const ondelete = async (e: any) => {
                    e.preventDefault()
                    setIsDeleteOpen((prevState) => {
                        setIsDeleteOpen(true)
                        return true
                    });

                }
                return (
                    <button type="button" className="btn btn-danger" onClick={ondelete} color="primary"> Delete</button>
                )
            }
        },
    ];


    const deleteConfirm = async () => {

        setIsDeleteOpen(false)
        let result = await deleteuser(optid).catch(err => console.log(err));
        alluser(page, pageSize).then(Res => {setUsers(Res.data.data);setTotalPages(Res.data.totalpages)}).catch(err => console.log(err));
        toast("User Deleted Sucessfully");

    }
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
    const resetForm = () => {
        nameF.resetvaule();
        emailF.resetvaule();
        mobF.resetvaule();
        alluser(page, pageSize).then(Res => {setUsers(Res.data.data);setTotalPages(Res.data.totalpages)}).catch(err => console.log(err));

    }

    return (
        <div >
            <Adminheader />
            <Sidebar />
            <div>
                <div style={{ marginLeft: "10%", }}>

                    <div className="w3-container">
                        <div className='filters'>
                            <form action="" id='filterform' onSubmit={submitForm} method="get">
                                <div className="box">
                                    <label htmlFor="emailf">Email</label>
                                    <input type="text" name="emailf"  {...emailF} placeholder='Email' id="emailf" />
                                    
                                    <label htmlFor="namef">Name</label>

                                    
                                    <input type="text" name="namef" {...nameF} placeholder='Name' id="namef" />

                                    <label htmlFor="mobilef">Mobile</label>
                                    <input type="text" name="mobilef" placeholder='Mobile' {...mobF} id="mobilef" maxLength={10}/>
                                    <button className="btn btn-success" type="submit">Apply </button>
                                    <button className="btn btn-danger" type="button" onClick={resetForm} >Reset </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <Box sx={{ height: "72vh", width: '90%' }}>
                        <DataGrid
                            rows={users ? users : []}
                            columns={columns}
                            pageSize={pageSize}
                            onPageSizeChange={(newPageSize) => { setPageSize(newPageSize); setPage(1) }}
                            rowsPerPageOptions={[5, 10, 20, 40]}
                            checkboxSelection={true}

                            disableSelectionOnClick
                            components={{ Toolbar: GridToolbar }}
                            experimentalFeatures={{ newEditingApi: true }}
                        />
                        <div className="m-2">
                            {Array.from({ length: totalPages }, (_, index) => (

                                <button key={index} className="ms-2 btn btn-secondary" onClick={() => setPage(index + 1)}>
                                    {index + 1}
                                </button>
                            ))}
                        </div>
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
                                
                                if(confirm.fn && confirm.email && confirm.mob&& confirm.ln)
                                {
                                let formData = {
                                    "fname": data.get("fname"),
                                    "lname": data.get("lname"),
                                    "email": data.get("email"),
                                    "mobile": data.get("mobile"),
                                };
                                // console.log(formData);
                                let res = await updateUser(data, obj.id);
                                // console.log(res)
                                if (res.data.messages.success === 'true') {
                                    toast.success("Data Updated Successfully")
                                    alluser(page, pageSize).then(Res => {setUsers(Res.data.data);setTotalPages(Res.data.totalpages)}).catch(err => console.log(err));
                                    setIsEditOpen(false)
                                    
                                    
                                }
                                else {
                                    toast.success("Duplicate Data");
                                    // setIsEditOpen(false)
                                }
                                }
                                else {
                                    toast.error("Invalid Input")
                                }
                                

                            }}>
                                <Row className='mt-2'>
                                    <Label>First Name</Label>
                                    <Col><input type="text" name="fname" className='form-control' onChangeCapture={checkName}defaultValue={obj.fname} /></Col>
                                    <p className='text-danger p-2 m-2'>{nameerror}</p>
                                </Row>
                                <Row className='mt-2'>
                                    <Label>Last Name</Label>
                                    <Col><input type="text" name="lname" className='form-control' onChangeCapture={(e)=>
                                    {if(e.currentTarget.value.length >0 && checkLname(e))
                                        console.log('valid');
                                        else if (e.currentTarget.value.length ==0)
                                        {setErrolname("");setConfirm((prevState) => { return { ...prevState, "ln": true } })}
                                        else checkLname(e); }} defaultValue={obj.lname} /></Col>
                                    <p className='text-danger p-2 m-2'>{lnameerror}</p>
                                </Row>
                                <Row className='mt-2'>
                                    <Label>Email</Label>
                                    <Col><input type="text" name="email" className='form-control'  onChangeCapture={checkEmail} defaultValue={obj.email} /></Col>
                                    <p className='text-danger p-2 m-2'>{emailerror}</p>

                                </Row>
                                <Row className='mt-2'>
                                    <Label>Mobile</Label>
                                    <Col><input type="text" name="mobile" className='form-control' onChangeCapture={checkMob}defaultValue={obj.mobile} maxLength={10}/></Col>
                                    <p className='text-danger p-2 m-2'>{moberror}</p>

                                </Row>

                                <Row className='mt-4'>
                                    <Col lg={12} className="row">
                                        <div className='d-flex justify-content-end'>
                                            <button type='submit' className="col-md-3 ms-2 btn btn-danger">Update</button>
                                            <button onClick={() => setIsEditOpen(false)} className="col-md-3 ms-2 btn btn-success"  >Cancel</button>

                                        </div>
                                    </Col>
                                </Row>
                            </form>
                        </ModalBody>
                    </Modal></>
            }
            {
                isDeleteOpen && <Modal isOpen={isDeleteOpen} size='md' toggle={() => setIsDeleteOpen(!isDeleteOpen)} >
                    <ModalHeader
                        toggle={() => setIsDeleteOpen(!isDeleteOpen)}>Confirm
                    </ModalHeader>
                    <ModalBody>

                        <button onClick={deleteConfirm} className="col-md-3 ms-2 btn btn-danger">Yes</button>
                        <button onClick={() => { setIsDeleteOpen(false); toast("Action Cancelled") }} className="col-md-3 ms-2 btn btn-danger">No</button>
                    </ModalBody>
                </Modal>

            }
        </div>
    )
}


export default Admindashboard


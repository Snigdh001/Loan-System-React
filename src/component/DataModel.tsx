import React, { FormEvent, SyntheticEvent, useEffect, useState } from 'react'
import Adminheader from './Adminheader'
import Sidebar from './Sidebar'
import Box from '@mui/material/Box';
import { DataGrid, GridCellParams, GridColDef, GridRenderCellParams, GridRowId, GridToolbar, GridValueGetterParams } from '@mui/x-data-grid';
import { allApplicationReq, alluser, updateUser } from '../servies/admin';
import { toast } from 'react-toastify';
import { Modal, ModalHeader, ModalBody, Row, Col, Dropdown } from 'reactstrap';
import { stringify } from 'querystring';
import { allApplicationReqById, loanAction } from '../servies/User';
import EditIcon from '@mui/icons-material/Edit';




const DataModel = () => {

  const [isEditOpen, setIsEditOpen] = useState(false);
  const [users, setUsers] = useState();
  
  const [usersDetails, setUsersDetails] = useState({
    id: "",
    userid: "",
    fname: "",
    lname: "",
    email: "",
    gender: "",
    aadhar: "",
    pan: "",
    profession: "",
    income: "",
    loanAmt: "",
    duration: "",
    address1: "",
    address2: "",
    pincode: "",
    place: "",
    state:"",
    country: "",
    mobile: "",
    status: "",
    remark: ""
  });

  const columns: GridColDef[] = [
    { field: 'id', headerName: ' Application ID', width: 120 },
    { field: 'userid', headerName: 'User ID', width: 90 },
    {
      field: 'fname',
      headerName: 'First name',
      width: 150,
      // editable: true,
    },
    {
      field: 'lname',
      headerName: 'Last name',
      width: 150,
      // editable: true,
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 200,
      // editable: true,
    },
    {
      field: 'loanAmt',
      headerName: 'Loan Amount',
      width: 160,
    },
    {
      field: 'duration',
      headerName: 'Time (In Month)',
      width: 150,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 160,
    },
    {
      field: 'Action',
      headerName: 'Action',
      width: 150,
      // editable: true,
      renderCell: (cellValues) => {
        return (
          <button type="button" className="btn btn-info"
            onClick={(evt) => {
              setIsEditOpen(true)
              getUserDetails(evt, cellValues);
            }} color="primary"> Show Info</button>

        )
      }
    }
  ];


  const getUserDetails = (evt: SyntheticEvent, data: GridRenderCellParams) => {
    evt.preventDefault();
    setUsersDetails(data.row as any)
  }

  useEffect(() => {
    let userLogged = localStorage.getItem("Session") as string;
    let applicantId = JSON.parse(userLogged).id
    const data = {userId: applicantId}
    let result = allApplicationReqById(data).then((Res: { data: any; }) => setUsers(Res.data)).catch((err: any) => console.log(err));

  }, []);

  const [pageSize, setPageSize] = React.useState<number>(5);


  
    
  

  return (
    <>
      <div  className='RepArea'>
        <div className='col-12 m-4 p-5'>
          <Box sx={{ height: "70vh", width: '100%' }}>
            <DataGrid
              rows={users ? users : []}
              columns={columns}
              pageSize={pageSize}
              onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
              rowsPerPageOptions={[5, 10, 20, 40]}
              checkboxSelection
              disableSelectionOnClick
              components={{ Toolbar: GridToolbar }}
            />
          </Box>
        </div>
      </div>
      {
        isEditOpen && <>
        
          <Modal isOpen={isEditOpen} size='md' toggle={() => setIsEditOpen(!isEditOpen)} >
            <ModalHeader
              toggle={() => setIsEditOpen(!isEditOpen)} >
                Application Details
              
               
            </ModalHeader>
            <form action=""  method="post" >
              <ModalBody >
                {/* <Row className='mt-3'>
                  <Col style={{ textTransform: "capitalize" }} >Applcation ID : {usersDetails.id}</Col>
                  <Col style={{ textTransform: "capitalize" }} >User ID : {usersDetails.userid}</Col>
                </Row> */}
                <Row className='mt-3'>
                  <Col style={{ textTransform: "capitalize" }} >Name : {usersDetails.fname + ' ' + usersDetails.lname}</Col>
                  <Col style={{ textTransform: "capitalize" }} >Gender : {usersDetails.gender}</Col>
                  
                </Row>
                <Row className='mt-3'>
                <Col style={{ textTransform: "capitalize" }} >Email : {usersDetails.email}</Col>
                </Row>
                <Row className='mt-3'>
                  <Col style={{ textTransform: "capitalize" }} >Mobile : {usersDetails.mobile}</Col>
                </Row>
                <Row className='mt-3'>
                  <Col style={{ textTransform: "capitalize" }} >Aadhar No. : {usersDetails.aadhar}</Col>
                  <Col style={{ textTransform: "capitalize" }} >Pan Number : {usersDetails.pan}</Col>
                </Row>
                <Row className='mt-3'>
                  <Col style={{ textTransform: "capitalize" }} >Profession : {usersDetails.profession}</Col>
                  <Col style={{ textTransform: "capitalize" }} >Income : {usersDetails.income}</Col>
                </Row>
                <Row className='mt-3'>
                  <Col style={{ textTransform: "capitalize" }} >Loan Amount : {usersDetails.loanAmt}</Col>
                  <Col style={{ textTransform: "capitalize" }} >Duration : {usersDetails.duration + " Months"}</Col>
                </Row>
                <Row className='mt-3'>
                  <Col style={{ textTransform: "capitalize" }} >Address : {usersDetails.address1 + ', ' + usersDetails.address2 + ', ' + usersDetails.place}</Col>
                </Row>
                <Row className='mt-3'>
                  <Col style={{ textTransform: "capitalize" }} >Place : {usersDetails.place}</Col>
                  <Col style={{ textTransform: "capitalize" }} >Pincode : {usersDetails.pincode}</Col>
                </Row>

                <Row className='mt-3'>
                  <Col style={{ textTransform: "capitalize" }} >Country : {usersDetails.country}</Col>
                  <Col style={{ textTransform: "capitalize" }} >State : {usersDetails.state}</Col>
                  
                </Row>
                <Row className='mt-4'>
                  <Col style={{ textTransform: "capitalize" }} >Status : <select disabled name='status' defaultValue={usersDetails.status} style={{marginLeft:"10px", width: "200px" }} className="select form-control-lg">
                    <option value="pending">Pending</option>
                    <option value="approved">Approved</option>
                    <option value="rejected">Rejected</option>
                  </select> </Col>
                </Row>
                <Row className='mt-3'>
                  <Col style={{ textTransform: "capitalize" }} >Remark :</Col>
                </Row>
                <Row className='mt-3'>
                  <textarea style={{ textTransform: "capitalize", borderRadius: "15px",marginLeft:"5%",padding:"2%",width:"90%"}}  defaultValue={usersDetails.remark} name="remark" id="remark" cols={10} rows={5} disabled></textarea>
                </Row>
                <Row className='mt-4'>
                  <Col lg={12} className="row">
                    <div className='d-flex justify-content-end'>
                      <button onClick={() => setIsEditOpen(false)} className="col-md-3 ms-2 btn btn-success"  >Cancel</button>
                    </div>
                  </Col>
                </Row>
              </ModalBody>
            </form>
          </Modal></>
      }
    </>
  )
}

export default DataModel;

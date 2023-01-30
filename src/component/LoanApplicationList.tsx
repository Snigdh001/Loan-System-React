import React, { SyntheticEvent, useEffect, useState } from 'react'
import Adminheader from './Adminheader'
import Sidebar from './Sidebar'
import Box from '@mui/material/Box';
import { DataGrid, GridCellParams, GridColDef, GridRenderCellParams, GridRowId, GridToolbar, GridValueGetterParams } from '@mui/x-data-grid';
import { allApplicationReq, alluser, updateUser } from '../servies/admin';
import { toast } from 'react-toastify';
import { Modal, ModalHeader, ModalBody, Row, Col } from 'reactstrap';
import { stringify } from 'querystring';
const LoanApplicationList = () => {

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
      field: 'Edit',
      headerName: 'Edit',
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

    let result = allApplicationReq().then((Res: { data: any; }) => setUsers(Res.data)).catch((err: any) => console.log(err));

  }, []);

  const [pageSize, setPageSize] = React.useState<number>(5);


  return (
    <>
      <Adminheader />
      <Sidebar />
      <div style={{ marginLeft: "10%" }} className='RepArea'>
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
              toggle={() => setIsEditOpen(!isEditOpen)}>
              <h3>Application Details</h3>
            </ModalHeader>
            <ModalBody>
              <Row className='mt-3'>
                <Col style={{ textTransform: "uppercase" }} >Name : {usersDetails.fname + ' ' + usersDetails.lname}</Col>
                <Col style={{ textTransform: "uppercase" }} >Email : {usersDetails.email}</Col>
              </Row>
              <Row className='mt-3'>
                <Col style={{ textTransform: "uppercase" }} >Gender : {usersDetails.gender}</Col>
                <Col style={{ textTransform: "uppercase" }} >Mobile : {usersDetails.mobile}</Col>
              </Row>
              <Row className='mt-3'>
                <Col style={{ textTransform: "uppercase" }} >Aadhar No. : {usersDetails.aadhar}</Col>
                <Col style={{ textTransform: "uppercase" }} >Pan Number : {usersDetails.pan}</Col>
              </Row>
              <Row className='mt-3'>
                <Col style={{ textTransform: "uppercase" }} >Profession : {usersDetails.profession}</Col>
                <Col style={{ textTransform: "uppercase" }} >Income : {usersDetails.income}</Col>
              </Row>
              <Row className='mt-3'>
                <Col style={{ textTransform: "uppercase" }} >Loan Amount : {usersDetails.loanAmt}</Col>
                <Col style={{ textTransform: "uppercase" }} >Duration : {usersDetails.duration + " Months"}</Col>
              </Row>
              <Row className='mt-3'>
                <Col style={{ textTransform: "uppercase" }} >Address : {usersDetails.address1 + ', ' + usersDetails.address2 + ', ' + usersDetails.place}</Col>
              </Row>
              <Row className='mt-3'>
                <Col style={{ textTransform: "uppercase" }} >Place : {usersDetails.place}</Col>
                <Col style={{ textTransform: "uppercase" }} >Pincode : {usersDetails.pincode}</Col>
              </Row>
              <Row className='mt-3'>
                <Col style={{ textTransform: "uppercase" }} >Country : {usersDetails.country}</Col>
                <Col style={{ textTransform: "uppercase" }} >Status : <select name='status'  defaultValue={usersDetails.status} style={{ width: "150px" }}  className="select form-control-lg">
                    <option value="pending">Pending</option>
                    <option value="approved">Approved</option>
                    <option value="rejected">Rejected</option>
                  </select> </Col>
              </Row>
              <Row className='mt-3'>
                <Col style={{ textTransform: "uppercase" }} >Remark : {usersDetails.remark}</Col>
              </Row>
              <Row className='mt-4'>
                <Col lg={12} className="row">
                  <div className='d-flex justify-content-end'>
                    <button onClick={() => setIsEditOpen(false)} className="col-md-3 ms-2 btn btn-success"  >Cancel</button>
                    {/* <button type='submit' className="col-md-3 ms-2 btn btn-danger">Update</button> */}
                  </div>
                </Col>
              </Row>
            </ModalBody>
          </Modal></>
      }
    </>
  )
}

export default LoanApplicationList;


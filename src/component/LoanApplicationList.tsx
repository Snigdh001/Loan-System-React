import React, { FormEvent, SyntheticEvent, useEffect, useState } from 'react'
import Adminheader from './Adminheader'
import Sidebar from './Sidebar'
import Box from '@mui/material/Box';
import { DataGrid, GridCellParams, GridColDef, GridRenderCellParams, GridRowId, GridToolbar, GridValueGetterParams } from '@mui/x-data-grid';
import { allApplicationReq, alluser, updateUser } from '../servies/admin';
import { toast } from 'react-toastify';
import { Modal, ModalHeader, ModalBody, Row, Col } from 'reactstrap';
import { stringify } from 'querystring';
import { loanAction } from '../servies/User';
import { wait } from '@testing-library/user-event/dist/utils';
import './css/loan_registration.css'



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

    let result = allApplicationReq().then((Res: { data: any; }) => setUsers(Res.data)).catch((err: any) => console.log(err));

  }, []);

  const [pageSize, setPageSize] = React.useState<number>(5);


  const loanact = async (e: any) => {
    e.preventDefault()
    const formdata = new FormData(e.currentTarget)
    const data = {
      id: usersDetails.id,
      userid: usersDetails.userid,
      remark: formdata.get('remark'),
      status: formdata.get('status')
    }
    // console.log(data);
    let result = await loanAction(data)
    if (result.data.success === 'true') {
      toast("Action Applied")
      allApplicationReq().then((Res: { data: any; }) => setUsers(Res.data)).catch((err: any) => console.log(err));
      setIsEditOpen(false)
    }
    else {
      console.error("Error Action ")
    }
  }

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
              Application Details
            </ModalHeader>
            <form action="" onSubmit={loanact} method="post" >
              <ModalBody>
                <Row className='mt-3 cap'>
                  <Col>Applcation ID : {usersDetails.id}</Col>
                  <Col>User ID : {usersDetails.userid}</Col>
                </Row>
                <Row className='mt-3 cap'>
                  <Col  >Name : {usersDetails.fname + ' ' + usersDetails.lname}</Col>
                  <Col  >Email : {usersDetails.email}</Col>
                </Row>
                <Row className='mt-3 cap'>
                  <Col  >Gender : {usersDetails.gender}</Col>
                  <Col  >Mobile : {usersDetails.mobile}</Col>
                </Row>
                <Row className='mt-3 cap'>
                  <Col  >Aadhar No. : {usersDetails.aadhar}</Col>
                  <Col  >Pan Number : {usersDetails.pan}</Col>
                </Row>
                <Row className='mt-3 cap'>
                  <Col  >Profession : {usersDetails.profession}</Col>
                  <Col  >Income : {usersDetails.income}</Col>
                </Row>
                <Row className='mt-3 cap'>
                  <Col  >Loan Amount : {usersDetails.loanAmt}</Col>
                  <Col  >Duration : {usersDetails.duration + " Months"}</Col>
                </Row>
                <Row className='mt-3 cap'>
                  <Col  >Address : {usersDetails.address1 + ', ' + usersDetails.address2 + ', ' + usersDetails.place}</Col>
                </Row>
                <Row className='mt-3 cap'>
                  <Col  >Place : {usersDetails.place}</Col>
                  <Col  >Pincode : {usersDetails.pincode}</Col>
                </Row>

                <Row className='mt-3 cap'>
                  <Col>Country : {usersDetails.country}</Col>
                  <Col>State : {usersDetails.state}</Col>
                  
                </Row>
                <Row className='mt-4 cap'>
                  <Col  >Status : <select name='status' defaultValue={usersDetails.status} style={{marginLeft:"10px", width: "200px" }} className="select form-control-lg">
                    <option value="pending">Pending</option>
                    <option value="approved">Approved</option>
                    <option value="rejected">Rejected</option>
                  </select> </Col>
                </Row>
                <Row className='mt-3'>
                  <Col  >Remark :</Col>
                </Row>
                <Row className='mt-3'>
                  <textarea style={{ textTransform: "capitalize", borderRadius: "15px",marginLeft:"5%",padding:"2%",width:"90%"}}  defaultValue={usersDetails.remark} name="remark" id="remark" cols={10} rows={5}></textarea>
                </Row>
                <div className="form-check d-flex justify-content-start mb-4 pb-3">
                  <input className="form-check-input mt-3" type="checkbox" value="" id="form2Example3c" required />
                  <label className="form-check-label text-black" htmlFor="form2Example3">Please Check me  To process.</label>
                </div>
                <Row className='mt-4'>
                  <Col lg={12} className="row">
                    <div className='d-flex justify-content-end'>
                      <button onClick={() => setIsEditOpen(false)} className="col-md-3 ms-2 btn btn-success"  >Cancel</button>
                      <button type='submit' className="col-md-3 ms-2 btn btn-danger">Save</button>
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

export default LoanApplicationList;

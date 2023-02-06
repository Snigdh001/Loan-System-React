import React, { useEffect, useState } from 'react'
import '../component/css/header.css'
import { toast } from 'react-toastify';
import { Modal, ModalHeader, ModalBody, Col, Row } from 'reactstrap';
import { UserDetailResponse, getDetailsApi } from '../servies/User';
import { flexbox, height } from '@mui/system';
import { Link } from 'react-router-dom';
import { red } from '@mui/material/colors';


const UserHeader = () => {

  const [isMyProfileOpen, setIsMyProfileOpen] = useState(false);
  const [userDetails, setUserDetails] = useState<UserDetailResponse>()
  const logOut = () => {
    localStorage.removeItem("Session");
    toast("LogOut Successfully")
    return true;
  }
  const myProfile = (e: any) => {
    e.preventDefault()
    setIsMyProfileOpen(true)

    let userLogged = localStorage.getItem("Session") as string;
    let applicantId = JSON.parse(userLogged).id
    const data = { userId: applicantId }
    let result = getDetailsApi(data).then(Res => setUserDetails(Res.data[0])).catch(err => console.log(err));

    return true;

  }
  useEffect(() => {
    let userLogged = localStorage.getItem("Session") as string;
    let applicantId = JSON.parse(userLogged).id
    const data = { userId: applicantId }
    let result = getDetailsApi(data).then(Res => setUserDetails(Res.data[0])).catch(err => console.log(err));


  }, [])



  return (
    <div>
      {/* <h3 style={}></h3> */}
      <header style={{ position: "relative" }} >
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active" style={{ backgroundImage: "url('https://source.unsplash.com/bF2vsubyHcQ/1920x1080')" }}>
              <div className="logo">
                <img className='headimg' src="https://seeklogo.com/images/H/home-loan-logo-47AE303918-seeklogo.com.png" alt="LOGO" />
                <h3 className='headertext' style={{ textTransform: "capitalize" }}  >{userDetails?.fname + ' ' + userDetails?.lname}</h3>
                <Link to="/userdashboard" className='headerlink'>Home</Link>
                <Link to="/myloanrequest" className='headerlink' >Loan Status</Link>
                <Link to="" className='headerlink' onClick={myProfile}>My Profile</Link>
                <Link to="/user/apply" className='headerlink'>Apply For Loan</Link>
                <Link to="/login" onClick={logOut} className="headerlink"  >LogOut</Link>
              </div>
            </div>
            <div className="carousel-item" style={{ backgroundImage: "url('https://source.unsplash.com/LAaSoL0LrYs/1920x1080')" }}>
              {/* <div className="carousel-caption">          </div> */}
              <div className="logo">
                <img className='headimg' src="https://seeklogo.com/images/H/home-loan-logo-47AE303918-seeklogo.com.png" alt="LOGO" />
                <h3 className='headertext' style={{ textTransform: "capitalize" }}>{userDetails?.fname + ' ' + userDetails?.lname}</h3>
                <Link to="/userdashboard" className='headerlink'>Home</Link>
                <Link to="/myloanrequest" className='headerlink' >Loan Status</Link>
                <Link to="" className='headerlink' onClick={myProfile}>My Profile</Link>
                <Link to="/user/apply" className='headerlink'>Apply For Loan</Link>
                <Link to="/login" onClick={logOut} className="headerlink"  >LogOut</Link>
              </div>
            </div>
            <div className="carousel-item" style={{ backgroundImage: "url('https://source.unsplash.com/jpqyfK7GB4w/1920x1080')" }}>
              <div className="logo">
                <img className='headimg' src="https://seeklogo.com/images/H/home-loan-logo-47AE303918-seeklogo.com.png" alt="LOGO" />
                <h3 className='headertext' style={{ textTransform: "capitalize" }}>{userDetails?.fname + ' ' + userDetails?.lname}</h3>
                <Link to="/userdashboard" className='headerlink'>Home</Link>
                <Link to="/myloanrequest" className='headerlink' >Loan Status</Link>
                <Link to="" className='headerlink' onClick={myProfile}>My Profile</Link>
                <Link to="/user/apply" className='headerlink'>Apply For Loan</Link>
                <Link to="/login" onClick={logOut} className="headerlink"  >LogOut</Link>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        {
          isMyProfileOpen && <Modal isOpen={isMyProfileOpen} size='md' toggle={() => setIsMyProfileOpen(!isMyProfileOpen)} style={{width:"5000px !important"}} >
            <ModalHeader
              style={{ width: "150% !important" }} toggle={() => setIsMyProfileOpen(!isMyProfileOpen)}>My Profile
            </ModalHeader>
            <ModalBody >

              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                <img src="https://source.unsplash.com/random/1920x1080" style={{ borderRadius: "100%", width: "250px ", height: "250px " }} alt="" />
              </div>
              <>
                <Col className='mt-4' style={{ fontSize: "x-large", textTransform: "capitalize" }} >Name : {userDetails?.fname + ' ' + userDetails?.lname}</Col>
                <Col className='mt-2' style={{ fontSize: "x-large", textTransform: "capitalize" }} >Mobile : {userDetails?.mobile}</Col>
                <Col className='mt-2' style={{ fontSize: "x-large", textTransform: "capitalize" }} >Email : {userDetails?.email}</Col>
              </>

            </ModalBody>
          </Modal>

        }
      </header>
    </div>

  )
}

export default UserHeader



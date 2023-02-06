import React, { useEffect, useState } from 'react'
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { UserDetailResponse, getDetailsApi } from '../servies/User';
import { Col, Modal, ModalBody, ModalHeader } from 'reactstrap';

const Adminheader = () => {
    const [isMyProfileOpen, setIsMyProfileOpen] = useState(false);
    const [userDetails, setUserDetails] = useState<UserDetailResponse>()
    let userLogged = localStorage.getItem("Session") as string;
    let applicantId = JSON.parse(userLogged).id
    const data = { userId: applicantId }
    const logOut = () => {
        localStorage.removeItem("Session");
        toast("LogOut Successfully")
        return true;
    }
    const myProfile = (e: any) => {
        e.preventDefault()
        setIsMyProfileOpen(true)



        return true;

    }
    useEffect(() => {


        let result = getDetailsApi(data).then(Res => setUserDetails(Res.data[0])).catch(err => console.log(err));
    }, [])



    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                {/* <Link className="navbar-brand" to="/admin">Loan</Link> */}
                <span className="navbar-brand">{userDetails?.fname + ' ' + userDetails?.lname}</span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/admin">Home </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Admindashboard">Dashboard</Link>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link" onClick={myProfile}>My Profile</span>
                        </li>


                        {/* onClick={myProfile} */}
                        <li className="nav-item">
                            <Link className="nav-link" to="/login" onClick={logOut} >LogOut</Link>
                        </li>

                    </ul>
                </div>
            </nav>
            {
                isMyProfileOpen && <Modal isOpen={isMyProfileOpen} size='md' toggle={() => setIsMyProfileOpen(!isMyProfileOpen)} >
                    <ModalHeader
                        style={{ width: "150% !important" }} toggle={() => setIsMyProfileOpen(!isMyProfileOpen)}>My Profile
                    </ModalHeader>
                    <ModalBody>

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
        </div>
    )
}

export default Adminheader
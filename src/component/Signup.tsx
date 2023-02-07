import React, { useState } from 'react'
import '../component/css/registration.css'
import FormHoook from '../Hooks/Form'
import { signup } from '../servies/Auth';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Signup = () => {
    const navigate = useNavigate();
    const fname = FormHoook("");
    const lname = FormHoook("");
    const email = FormHoook("");
    const mobile = FormHoook("");
    const password = FormHoook("");
    const cpassword = FormHoook("");
    const emailregex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z.]{2,5}$/i;
    const passregex = /^[A-Za-z0-9!@#$%^&*()_]{6,16}$/i;
    const phoneregex = /^[1-9]{1}[0-9]{9}$/i;
    const nameregex = /^[a-zA-Z]{3,16}$/i;
    const [emailerror, setErroremail] = useState('');
    const [nameerror, setErroname] = useState('');
    const [passerror, setErrorpass] = useState('');
    const [cpasserror, setErrorcpass] = useState('');
    const [moberror, setErrormob] = useState('');
    const [confirm, setConfirm] = useState({ fn: false, ln: false, email: false, mob: false, pass: false, cpass: false});


    const checkEmail = (e: any) => {

        if (emailregex.test(e.currentTarget.value) === false) {
            setErroremail("Please Enter Valid Email Address i.e abc@zyx.com");
            
                
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
            setErroname("Please Enter Valid Name");
            return false;
        }
        else {
            setErroname("")
            setConfirm((prevState) => { return { ...prevState, "fn": true } })
            return true;
        }
    }
    const checkPass = (e: any) => {
        if (passregex.test(e.currentTarget.value) === false) {
            setErrorpass("Please Enter Valid Password");
            return false;
        }
        else {
            setErrorpass("")
            setConfirm((prevState) => { return { ...prevState, "pass": true } })
            return true;
        }
    }
    const checkcPass = (e: any) => {
        if (e.currentTarget.value !== password.value) {
            setErrorcpass("Password Must be Same");
        }
        else {
            setErrorcpass("")
            setConfirm((prevState) => { return { ...prevState, "cpass": true } })
            return true;

        }
    }
    const checkMob = (e: any) => {
        if (phoneregex.test(e.currentTarget.value) === false) {
            setErrormob("Please Enter Valid Mobile Number");
            return false;
        }
        else {
            setErrormob("")
            setConfirm((prevState) => { return { ...prevState, "mob": true } })
            return true;
        }
    }


    const submitHander = async (e: any) => {
        e.preventDefault()
        if (fname.value === "")
            setErroname("Field is required");
        if (email.value === "")
            setErroremail("Field is required");
        if (mobile.value === "")
            setErrormob("Field is required");
        if (password.value === "")
            setErrorpass("Field is required");
        if (cpassword.value === "")
            setErrorcpass("Field is required");
        console.log(confirm.fn)
        if (password.value === cpassword.value && password.value.length >= 6 && confirm.fn &&confirm.email &&confirm.mob &&confirm.pass  ) {
            const data = {
                fname: fname.value,
                lname: lname.value,
                email: email.value,
                mobile: mobile.value,
                password: password.value,
            };
            const result = await signup(data);
            if (result.data.messages.success === "true") {
                toast("Account Created Sucessfully");
                navigate('/login');
            }
            else {
                toast("Account Already Created");
            }
        }
        else {
            toast("Invalid");
        }



    }


    return (
        <div>
            <ToastContainer />
            <div className="apply_loan">
                <section style={{ height: "88vh" }} className="h-100 h-custom gradient-custom-2">
                    <div className="container py-5 h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12">
                                <div className="card card-registration card-registration-2" style={{ borderRadius: "15px" }}>
                                    <div className="card-body p-0">
                                        <form action="" method='post' onSubmit={submitHander} >
                                            <div className="col-lg-6">
                                                <div className="p-5">
                                                    <h3 className="fw-normal mb-5" style={{ color: "#4835d4" }}>Registration</h3>


                                                    <div className="row">
                                                        <div className="col-md-6 mb-4 pb-2">

                                                            <div className="form-outline">
                                                                <label className="form-label" htmlFor="fname" >First
                                                                    name</label>
                                                                <input type="text" id="fname"
                                                                    className="form-control form-control-lg" {...fname} onChangeCapture={checkName} />
                                                                <p className='text-danger p-2 m-2'>{nameerror}</p>
                                                            </div>

                                                        </div>
                                                        <div className="col-md-6 mb-4 pb-2">

                                                            <div className="form-outline">
                                                                <label className="form-label" htmlFor="lname">Last name</label>
                                                                <input type="text" id="lname"
                                                                    className="form-control form-control-lg" {...lname} />

                                                            </div>

                                                        </div>
                                                    </div>


                                                    <div className="mb-4 pb-2">
                                                        <div className="form-outline">
                                                            <label className="form-label" htmlFor="email">Email Address</label>
                                                            <input type="email" id="email" className="form-control form-control-lg" {...email} onChangeCapture={checkEmail} />
                                                            <p className='text-danger p-2 m-2'>{emailerror}</p>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-md-6 mb-4 pb-2 mb-md-0 pb-md-0">
                                                            <div className="mb-4 pb-2">
                                                                <div className="form-outline">
                                                                    <label className="form-label" htmlFor="mobile">Mobile
                                                                        Number</label>
                                                                    <input type="text" id="mobile"
                                                                        className="form-control form-control-lg" {...mobile} onChangeCapture={checkMob} />
                                                                    <p className='text-danger p-2 m-2'>{moberror}</p>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6 mb-4 pb-2 mb-md-0 pb-md-0">
                                                            <div className="mb-4 pb-2">
                                                                <div className="form-outline">
                                                                    <label className="form-label" htmlFor="password">Password</label>
                                                                    <input type="password" id="password"
                                                                        className="form-control form-control-lg" {...password} onChangeCapture={checkPass} />
                                                                    <p className='text-danger p-2 m-2'>{passerror}</p>
                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div className="col-md-6 mb-4 pb-2 mb-md-0 pb-md-0">
                                                            <div className="mb-4 pb-2">
                                                                <div className="form-outline">
                                                                    <label className="form-label" htmlFor="cpassword">Confirm Password</label>
                                                                    <input type="password" id="cpassword"
                                                                        className="form-control form-control-lg" {...cpassword} onChangeCapture={checkcPass} />
                                                                    <p className='text-danger p-2 m-2'>{cpasserror}</p>

                                                                </div>
                                                            </div>

                                                        </div>

                                                        <button type="submit" className="btn btn-light btn-lg" data-mdb-ripple-color="dark" style={{ backgroundColor: "skyblue" }} >Register</button>

                                                    </div>
                                                </div>

                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Signup
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
    const [emailerror, setErrorEmail] = useState('');
    const [nameerror, setErrorName] = useState('');
    const [passerror, setErrorPass] = useState('');
    const [cpasserror, setErrorCpass] = useState('');
    const [moberror, setErrorMob] = useState('');
    const [confirm, setConfirm] = useState({ fn: false, ln: false, email: false, mob: false, pass: false, cpass: false});


    
    const checkName = (e: any) => {
        if (nameregex.test(fname.value) === false) {
            setErrorName("Please Enter Valid Name i.e Radhe");
            return false;
        }
        else {
            setErrorName("")
            setConfirm((prevState) => { return { ...prevState, "fn": true } })
            return true;
        }
    }
    const checkEmail = (e: any) => {

        if (emailregex.test(email.value) === false) {
            setErrorEmail("Please Enter Valid Email Address i.e abc@zyx.com");
            
                
            return false;
        }
        else {
            setErrorEmail("")
            setConfirm((prevState) => { return { ...prevState, "email": true } })
            return true;
        }
    }
    const checkPass = (e: any) => {
        if (passregex.test(e.currentTarget.value) === false) {
            setErrorPass("Please Enter Valid Password (min 6 characters)");
            return false;
        }
        else {
            setErrorPass("")
            setConfirm((prevState) => { return { ...prevState, "pass": true } })
            return true;
        }
    }
    const checkCpass = (e: any) => {
        if (cpassword.value !== password.value) {
            setErrorCpass("Password Must be Same");
        }
        else {
            setErrorCpass("")
            setConfirm((prevState) => { return { ...prevState, "cpass": true } })
            return true;

        }
    }
    const checkMob = (e: any) => {
        if (phoneregex.test(mobile.value) === false) {
            setErrorMob("Please Enter Valid Mobile Number i.e 1234567890");
            return false;
        }
        else {
            setErrorMob("")
            setConfirm((prevState) => { return { ...prevState, "mob": true } })
            return true;
        }
    }


    const submitHander = async (e: any) => {
        e.preventDefault()
        if (fname.value === "")
            setErrorName("First Name is required");
            else checkName(e)
        if (email.value === "")
            setErrorEmail("Email is required");
        else checkEmail(e)
        if (mobile.value === "")
            setErrorMob("Mobile No. is required");
            
            else {checkMob(e)}
        if (password.value === "")
            setErrorPass("Password is Required ");
            else checkPass(e)
        if (cpassword.value === "")
            setErrorCpass("Confirm Password is required");
            else checkCpass(e)
        // console.log(confirm.fn)
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
            <ToastContainer limit={1} />
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
                                                                    className="form-control form-control-lg" {...fname} onChangeCapture={()=>setErrorName("")} />
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
                                                            <input type="text" id="email" className="form-control form-control-lg" {...email} onChangeCapture={()=>setErrorEmail("")} />
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
                                                                        className="form-control form-control-lg" {...mobile} maxLength={10} onChangeCapture={()=>setErrorMob("")} />
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
                                                                        className="form-control form-control-lg" {...password} onChangeCapture={()=>setErrorPass("")} />
                                                                    <p className='text-danger p-2 m-2'>{passerror}</p>
                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div className="col-md-6 mb-4 pb-2 mb-md-0 pb-md-0">
                                                            <div className="mb-4 pb-2">
                                                                <div className="form-outline">
                                                                    <label className="form-label" htmlFor="cpassword">Confirm Password</label>
                                                                    <input type="password" id="cpassword"
                                                                        className="form-control form-control-lg" {...cpassword} onChangeCapture={()=>setErrorCpass("")} />
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
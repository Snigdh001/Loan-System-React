import React, { useState } from 'react'
import '../component/css/registration.css'
import FormHoook from '../Hooks/Form'
import { Await } from 'react-router-dom';
import signup from '../servies/signup';
import { useNavigate } from 'react-router-dom';



const Signup = () => {
    const fname = FormHoook("");
    const lname = FormHoook("");
    const email = FormHoook("");
    const mobile = FormHoook("");
    const password = FormHoook("");
    const cpassword = FormHoook("");
    const navigate = useNavigate();
    const emailregex=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z.]{2,5}$/i;
    const passregex=/^[A-Za-z0-9!@#$%^&*()_]{5,16}$/i;
    const phoneregex= /^[0-9]{9}$/i;
    const nameregex= /^[a-zA-Z]{3,16}$/i;
    const [phonecheck,setMob]=useState('')
    const [emailcheck,setEmail]=useState('');
    const [namecheck,setName]=useState('');
    const [passcheck,setPass]=useState('');
    const [cpasscheck,setcPass]=useState('');
    const [emailerror,setErroremail]=useState('');
    const [nameerror,setErroname]=useState('');
    const [passerror,setErrorpass]=useState('');
    const [cpasserror,setErrorcpass]=useState('');
    const [moberror,setErrormob]=useState('');
    var vn=false;
    var vmob=false;
    var vp=false;
    var vcp=false;
    var vemail=false;
    
    
    const checkEmail =(e:React.ChangeEvent<HTMLInputElement>)=>{
        setEmail(e.currentTarget.value);
        if(emailregex.test(emailcheck) ===false){
            setErroremail("Please Enter Valid Email Address");
            return false;
        }
        else{
            setErroremail("Email is Valid")
            vemail=true;
            return true;
        }
    }
    const checkName =(e:React.ChangeEvent<HTMLInputElement>)=>{
        setName(e.currentTarget.value);
        if(nameregex.test(namecheck) ===false){
            setErroname("Please Enter Valid Name");
            
            return false;
            
        }
        else{
            setErroname("Name is Valid")
            vn=true;
            return true;
        }
    }
    const checkPass =(e:React.ChangeEvent<HTMLInputElement>)=>{
        setPass(e.currentTarget.value);
        if(passregex.test(passcheck) ===false){
            setErrorpass("Please Enter Valid Password");
            
            return false;
        }
        else{
            setErrorpass("Password is Valid")
            vp=true;
            return true;
        }
    }
    const checkcPass =(e:React.ChangeEvent<HTMLInputElement>)=>{
        setcPass(e.currentTarget.value);
        if(passregex.test(cpasscheck) ===false && cpasscheck!==password.value){
            setErrorcpass("Password Must be Same");
           
            return false;
        }
        else{
            setErrorcpass("")
            vcp=true;
            return true;
        }
    }
    const checkMob =(e:React.ChangeEvent<HTMLInputElement>)=>{
        setMob(e.currentTarget.value);
        if(phoneregex.test(phonecheck) ===false){
            setErrormob("Please Enter Valid Mobile Number");
            
            return false;
        }
        else{
            setErrormob("Mobile Number is Valid")
            vmob=true;
            return  true;
        }
    }
    

    const submitHander = async (evt: React.SyntheticEvent) => {
        evt.preventDefault()
        {   
            if(password.value===cpassword.value && vn && vp && vemail && vmob && vcp)
            {
                const data = {
                    fname: fname.value,
                    lname: lname.value,
                    email: email.value,
                    mobile: mobile.value,
                    password: password.value,
                };
                const result = await signup(data);
                navigate('/login');
                
            }
            else
            {
                alert("Invalid Credential")
            }
            
        }
       
    }
    

    return (
        <div>
            <div className="apply_loan">
                <section className="h-100 h-custom gradient-custom-2">
                    <div className="container py-5 h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12">
                                <div className="card card-registration card-registration-2" style={{ borderRadius: "15px" }}>
                                    <div className="card-body p-0">
                                        <form action=""  method='post' onSubmit={submitHander} >
                                            <div className="col-lg-6">
                                                <div className="p-5">
                                                    <h3 className="fw-normal mb-5" style={{ color: "#4835d4" }}>Registration</h3>


                                                    <div className="row">
                                                        <div className="col-md-6 mb-4 pb-2">

                                                            <div className="form-outline">
                                                                <label className="form-label" htmlFor="fname" >First
                                                                    name</label>
                                                                <input type="text" id="fname"
                                                                    className="form-control form-control-lg" {...fname} onChangeCapture={checkName} required/>
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
                                                    {/* 
                                                                <!-- <div className="mb-4 pb-2">
                                                                    <select className="select">
                                                                        <option value="1">Position</option>
                                                                        <option value="2">Two</option>
                                                                        <option value="3">Three</option>
                                                                        <option value="4">Four</option>
                                                                    </select>
                                                                </div> --> */}

                                                    <div className="mb-4 pb-2">
                                                        <div className="form-outline">
                                                            <label className="form-label" htmlFor="email">Email Address</label>
                                                            <input type="email"  id="email" className="form-control form-control-lg" {...email} onChangeCapture={checkEmail} />
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
                                                        <div className="col-md-6">
                                                            <div className="mb-4 pb-2">
                                                                <label className="form-label" htmlFor="gender">Gender : </label>
                                                                <select className="select form-control form-control-lg"   >
                                                                    <option value="1">Male/He</option>
                                                                    <option value="2">Female/She</option>
                                                                    <option value="3">Other</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6 mb-4 pb-2 mb-md-0 pb-md-0">
                                                            <div className="mb-4 pb-2">
                                                                <div className="form-outline">
                                                                    <label className="form-label" htmlFor="password">Password</label>
                                                                    <input type="password" id="password"
                                                                        className="form-control form-control-lg" {...password} onChangeCapture={checkPass} required/>
                                                                        <p className='text-danger p-2 m-2'>{passerror}</p>
                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div className="col-md-6 mb-4 pb-2 mb-md-0 pb-md-0">
                                                            <div className="mb-4 pb-2">
                                                                <div className="form-outline">
                                                                    <label className="form-label" htmlFor="cpassword">Confirm Password</label>
                                                                    <input type="password" id="cpassword"
                                                                        className="form-control form-control-lg" {...cpassword} onChangeCapture={checkcPass} required/>
                                                                        <p className='text-danger p-2 m-2'>{cpasserror}</p>
                                                                       
                                                                </div>
                                                            </div>

                                                        </div>

                                                        <button type="submit" className="btn btn-light btn-lg"data-mdb-ripple-color="dark"  style={{ backgroundColor: "skyblue" }} >Register</button>

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
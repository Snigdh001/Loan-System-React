import React, { useState } from 'react'
import FormHoook from '../Hooks/Form'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../component/css/registration.css'
import { useNavigate } from 'react-router-dom'
import { login } from '../servies/Auth'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    
    const navigate = useNavigate();
    const email = FormHoook("");
    const password = FormHoook("");
    const emailregex=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z.]{1,5}$/i;    
    const passregex=/^[A-Za-z0-9!@#$%^&*()_]{5,16}$/i;
    const [emailcheck,setEmail]=useState('');
    const [passcheck,setPass]=useState('');
    const [emailerror,setErroremail]=useState('');
    const [passerror,setErrorpass]=useState('');
    const checkEmail =(e:React.ChangeEvent<HTMLInputElement>)=>{
        setEmail(e.currentTarget.value);
        if(emailregex.test(e.currentTarget.value) ==false){
            setErroremail("Please Enter Valid Email Address");
            return false;
        }
        else{
            setErroremail("Email is Valid")
            return true;
        }
    }
    const checkPass =(e:React.ChangeEvent<HTMLInputElement>)=>{
        setPass(e.currentTarget.value);
        if(passregex.test(e.currentTarget.value) ===false){
            setErrorpass("Please Enter Valid Password");
            
            return false;
        }
        else{
            setErrorpass("Password is Valid")
            return true;
        }
    }
    const submitHander = async (evt: React.SyntheticEvent) => {
        evt.preventDefault()
        {       
            if (email.value == "")
            setErroremail("Field is required");
            if (password.value == "")
                setErrorpass("Field is required");
            
                const data = {
                  
                    email: email.value,
                    password: password.value,
                };
                const result = await login(data);
                
                if(result.data.messages.success==="true")
                {
                    
                    toast("Logged In Successfully! : )");
                    navigate('/admin');
                }
                else{
                    toast("Credentials not Found!");
                    toast("Login Faild : (");
                }}}
       
    
    return (
        <div>
             <ToastContainer />
            <div className="apply_loan">
                <section className="h-100 h-custom gradient-custom-2">
                    <div className="container py-5 h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12">
                                <div className="card card-registration card-registration-2" style={{ borderRadius: "15px" }}>
                                    <div className="card-body p-0">
                                        <form action="" method='post' onSubmit={submitHander}>
                                            <div className="col-lg-6">
                                                <div className="p-5">
                                                    <h3 className="fw-normal mb-5" style={{ color: "#4835d4" }}>Login Here</h3>
                                                    <div className="mb-4 pb-2">
                                                        <div className="form-outline">
                                                            <label className="form-label" htmlFor="form3Examplev4">Email Address</label>
                                                            <input type="text" id="form3Examplev4"
                                                                className="form-control form-control-lg" {...email} onChangeCapture={checkEmail} />
                                                                <p className='text-danger p-2 m-2'>{emailerror}</p>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="mb-4 pb-2">
                                                            <div className="form-outline">
                                                                <label className="form-label" htmlFor="form3Examplev5">Password</label>
                                                                <input type="password" id="form3Examplev5"
                                                                    className="form-control form-control-lg" {...password} onChangeCapture={checkPass}/>
                                                                    <p className='text-danger p-2 m-2'>{passerror}</p>
                                                            </div>
                                                        </div>

                                                        <button type="submit" className="btn btn-light btn-lg"
                                                            data-mdb-ripple-color="dark" style={{ backgroundColor: "skyblue" }} >Login</button>
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

export default Login
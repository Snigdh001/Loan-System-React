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
    const checkEmail =(e:any)=>{
        setEmail(e.currentTarget.value);
        if (email.value == "")
            setErroremail("Email is required");
            else{
            if(emailregex.test(email.value) ==false){
                setErroremail("Please Enter Valid Email Address i.e xyz@abc.in");
                return false;
            }
            else{
                setErroremail("")
                return true;
            }
        }
    }
    const checkPass =(e:any)=>{
        setPass(e.currentTarget.value);
        if (password.value == "")
            setErrorpass("Password is required");
            else{

                if(passregex.test(password.value) ===false){
                    setErrorpass("Please Enter Valid Password (min 6 characters)");
                    
                    return false;
                }
                else{
                    setErrorpass("")
                    return true;
                }
                
            }
    }
    const submitHander = async (evt: any) => {
        evt.preventDefault()
        {       
             checkEmail(evt)    
             checkPass(evt)
            if(checkEmail(evt)&&checkPass(evt))
            {

                const data = {
                    
                    email: email.value,
                    password: password.value,
                };
                const result = await login(data);
                // console.log(result);
                if(result.data.messages.success==="true")
                {
                    // console.log(result.data);
                    let session ={
                        id:result.data.messages.id as string,
                        role:result.data.messages.role as string ,
                        isLoggedin:result.data.messages.success as string,
                        authorization:result.data.messages.authorization as string,
                    }
                    
                    
                    localStorage.setItem("Session",JSON.stringify(session));

                    
                    if(session.role=="admin")
                    {
                        toast("Logged In Successfully! : )");
                        navigate('/admin');
                    }
                    else if(session.role=='user')
                    {
                        toast("Logged In Successfully! : )");
                        navigate('/userdashboard');
                    }
                }
                else{
                    toast("Invalid Data");
                    toast("Login Failed : (");
                }
            }
            }}
       
    
    return (
        <div>
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
                                                                className="form-control form-control-lg" {...email} onChangeCapture={()=>setErroremail("")} />
                                                                <p className='text-danger p-2 m-2'>{emailerror}</p>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="mb-4 pb-2">
                                                            <div className="form-outline">
                                                                <label className="form-label" htmlFor="form3Examplev5">Password</label>
                                                                <input type="password" id="form3Examplev5"
                                                                    className="form-control form-control-lg" {...password} onChangeCapture={()=>setErrorpass("")}/>
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
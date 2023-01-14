import React from 'react'
import '../component/css/registration.css'
import FormHoook from '../Hooks/Form'
import { Await } from 'react-router-dom';
import signup from '../servies/signup';

const Signup = () => {
    const fname = FormHoook("");
    const lname = FormHoook("");
    const email = FormHoook("");
    const mobile = FormHoook("");
    const password = FormHoook("");
    const cpassword = FormHoook("");

    const submitHander = async (evt: React.SyntheticEvent) => {
        evt.preventDefault()
        const data = {
            fname: fname.value,
            lname: lname.value,
            email: email.value,
            mobile: mobile.value,
            password: password.value,
        };
        const result = await signup(data);
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
                                        <form action="" onSubmit={submitHander} >

                                            <div className="col-lg-6">
                                                <div className="p-5">
                                                    <h3 className="fw-normal mb-5" style={{ color: "#4835d4" }}>Registration</h3>


                                                    <div className="row">
                                                        <div className="col-md-6 mb-4 pb-2">

                                                            <div className="form-outline">
                                                                <label className="form-label" htmlFor="form3Examplev2" >First
                                                                    name</label>
                                                                <input type="text" id="form3Examplev2"
                                                                    className="form-control form-control-lg" {...fname} />
                                                            </div>

                                                        </div>
                                                        <div className="col-md-6 mb-4 pb-2">

                                                            <div className="form-outline">
                                                                <label className="form-label" htmlFor="form3Examplev3">Last name</label>
                                                                <input type="text" id="form3Examplev3"
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
                                                            <label className="form-label" htmlFor="form3Examplev4">Email Address</label>
                                                            <input type="text" id="form3Examplev4"
                                                                className="form-control form-control-lg" {...email} />
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-md-6 mb-4 pb-2 mb-md-0 pb-md-0">
                                                            <div className="mb-4 pb-2">
                                                                <div className="form-outline">
                                                                    <label className="form-label" htmlFor="form3Examplev5">Mobile
                                                                        Number</label>
                                                                    <input type="text" id="form3Examplev5"
                                                                        className="form-control form-control-lg" {...mobile} />
                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mb-4 pb-2">
                                                                <label className="form-label" htmlFor="form3Examplev5">Gender : </label>
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
                                                                    <label className="form-label" htmlFor="form3Examplev5">Password</label>
                                                                    <input type="text" id="form3Examplev5"
                                                                        className="form-control form-control-lg" {...password} />
                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div className="col-md-6 mb-4 pb-2 mb-md-0 pb-md-0">
                                                            <div className="mb-4 pb-2">
                                                                <div className="form-outline">
                                                                    <label className="form-label" htmlFor="form3Examplev5">Confirm Password</label>
                                                                    <input type="text" id="form3Examplev5"
                                                                        className="form-control form-control-lg" {...cpassword} />
                                                                </div>
                                                            </div>

                                                        </div>

                                                        <button type="button" className="btn btn-light btn-lg"data-mdb-ripple-color="dark"  style={{ backgroundColor: "skyblue" }} >Register</button>

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
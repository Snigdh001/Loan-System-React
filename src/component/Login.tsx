import React from 'react'
import FormHoook from '../Hooks/Form'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../component/css/registration.css'

const Login = () => {

    const email = FormHoook("");
    const password = FormHoook("");
    return (
        <div>
            <div className="apply_loan">
                <section className="h-100 h-custom gradient-custom-2">
                    <div className="container py-5 h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12">
                                <div className="card card-registration card-registration-2" style={{ borderRadius: "15px" }}>
                                    <div className="card-body p-0">
                                        <form action="">
                                            <div className="col-lg-6">
                                                <div className="p-5">
                                                    <h3 className="fw-normal mb-5" style={{ color: "#4835d4" }}>Login Here</h3>
                                                    <div className="mb-4 pb-2">
                                                        <div className="form-outline">
                                                            <label className="form-label" htmlFor="form3Examplev4">Email Address</label>
                                                            <input type="text" id="form3Examplev4"
                                                                className="form-control form-control-lg" {...email} />
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="mb-4 pb-2">
                                                            <div className="form-outline">
                                                                <label className="form-label" htmlFor="form3Examplev5">Password</label>
                                                                <input type="text" id="form3Examplev5"
                                                                    className="form-control form-control-lg" {...password} />
                                                            </div>
                                                        </div>

                                                        <button type="button" className="btn btn-light btn-lg"
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
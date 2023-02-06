import React, { useEffect, useState } from 'react'
import '../component/css/loan_registration.css'
import { UserDetailResponse, getDetailsApi, loanapply } from '../servies/User'
import UserHeader from './UserHeader'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { response } from '../servies/admin'




const Applyloan = () => {
    const navigate = useNavigate();
    const [userDetails, setUserDetails] = useState<UserDetailResponse>()



    useEffect(() => {

        let userLogged = localStorage.getItem("Session") as string;
        let applicantId = JSON.parse(userLogged).id
        const data = {
            userId: applicantId
        }


        let result = getDetailsApi(data).then(Res => setUserDetails(Res.data[0])).catch(err => console.log(err));


    }, [])

    const applyReq = async (e: any) => {
        e.preventDefault()
        let userLogged = localStorage.getItem("Session") as string;
        // console.log(userLogged);
        let applicantId = JSON.parse(userLogged).id
        const formdata = new FormData(e.currentTarget)
        const data = {
            fname: formdata.get('fname'),
            lname: formdata.get('lname'),
            email: formdata.get('email'),
            gender: formdata.get('gender'),
            aadhar: formdata.get('aadhar'),
            pan: (formdata.get('pan')),
            profession: formdata.get('profession'),
            income: formdata.get('income'),
            loanAmt: formdata.get('loanAmt'),
            duration: formdata.get('duration'),
            address1: formdata.get('address1'),
            address2: formdata.get('address2'),
            pincode: formdata.get('pincode'),
            place: formdata.get('place'),
            state: formdata.get('state'),
            country: formdata.get('country'),
            mobile: formdata.get('mobile'),
            userid: applicantId,
        }


        // console.log(data)

        let result = await loanapply(data)
        if (result.data.success === 'true') {

            navigate('/userdashboard');
            toast.success("Successfully Applied")


        }
        else if (result.data.success === 'false') {
            toast.error(result.data.messages)
        }
        else {
            console.error(result.data)
        }

    }



    return (
        <>
            <UserHeader />
            <form action="" onSubmit={applyReq} method="post">
                <div className="apply_loan">
                    <section className="h-100 h-custom gradient-custom-2">
                        <div className="container py-5 h-100">
                            <div className="row d-flex justify-content-center align-items-center h-100">
                                <div className="col-12">
                                    <div className="card card-registration card-registration-2" style={{ borderRadius: "15px" }}>
                                        <div className="card-body p-0">
                                            <div className="row g-0">
                                                <div className="col-lg">
                                                    <div className="p-5">
                                                        <h3 className="fw-normal mb-5" style={{ color: "#4835d4" }}>General Infomation</h3>
                                                        <div className="row">
                                                            <div className="col-md-6 mb-4 pb-2">
                                                                <div className="form-outline">
                                                                    <label className="form-label" htmlFor="form3Examplev2">First
                                                                        name</label>
                                                                    <input type="text" id="form3Examplev2"
                                                                        name='fname' className="form-control form-control-lg" value={userDetails?.fname}  onChange={()=>{}}/>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6 mb-4 pb-2">

                                                                <div className="form-outline">
                                                                    <label className="form-label" htmlFor="form3Examplev3">Last name</label>
                                                                    <input type="text" id="form3Examplev3"
                                                                        className="form-control form-control-lg" name='lname' value={userDetails?.lname}  onChange={()=>{}} />
                                                                </div>

                                                            </div>
                                                        </div>



                                                        <div className="mb-4 pb-2">
                                                            <div className="form-outline">
                                                                <label className="form-label" htmlFor="form3Examplev4">Email Address</label>
                                                                <input type="text" id="form3Examplev4"
                                                                    className="form-control form-control-lg" name='email' value={userDetails?.email}  onChange={()=>{}} />
                                                            </div>
                                                        </div>

                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <div className="mb-4 pb-2">
                                                                    <label className="form-label" htmlFor="form3Examplev5">Gender : </label>
                                                                    <select name='gender' className="select form-control  form-control-lg">
                                                                        <option value="male">Male/He</option>
                                                                        <option value="female">Female/She</option>
                                                                        <option value="other">Other</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-6 mb-4 pb-2 mb-md-0 pb-md-0">
                                                                <div className="mb-4 pb-2">
                                                                    <div className="form-outline">
                                                                        <label className="form-label" htmlFor="form3Examplev5">Aadhar
                                                                            Number</label>
                                                                        <input name='aadhar' type="text" id="form3Examplev5"
                                                                            className="form-control form-control-lg" />
                                                                    </div>
                                                                </div>

                                                            </div>
                                                            <div className="col-md-6 mb-4 pb-2 mb-md-0 pb-md-0">
                                                                <div className="mb-4 pb-2">
                                                                    <div className="form-outline">
                                                                        <label className="form-label" htmlFor="form3Examplev5">Pan
                                                                            Number</label>
                                                                        <input name='pan' type="text" id="form3Examplev5"
                                                                            className="form-control form-control-lg" />
                                                                    </div>
                                                                </div>

                                                            </div>

                                                        </div>

                                                        <h3 className="fw-normal mb-5" style={{ color: "#4835d4" }}>Loan Details</h3>

                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <div className="mb-4 pb-2">
                                                                    <label className="form-label" htmlFor="form3Examplev5">Profession</label>
                                                                    <select name='profession' className="select form-control form-control-lg">
                                                                        <option value="Salaried">Salaried</option>
                                                                        <option value="SelfEmployed">Self Employed</option>
                                                                        <option value="Other">Other</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6 mb-4 pb-2 mb-md-0 pb-md-0">
                                                                <div className="mb-4 pb-2">
                                                                    <div className="form-outline">
                                                                        <label className="form-label" htmlFor="form3Examplev5">Annual Income</label>
                                                                        <input name='income' type="text" id="form3Examplev5"
                                                                            className="form-control form-control-lg" />
                                                                    </div>
                                                                </div>

                                                            </div>

                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-6 mb-4 pb-2 mb-md-0 pb-md-0">
                                                                <div className="mb-4 pb-2">
                                                                    <div className="form-outline">
                                                                        <label className="form-label" htmlFor="form3Examplev5">Loan Amount</label>
                                                                        <input name='loanAmt' type="text" id="form3Examplev5"
                                                                            className="form-control form-control-lg" />
                                                                    </div>
                                                                </div>

                                                            </div>
                                                            <div className="col-md-6 mb-4 pb-2 mb-md-0 pb-md-0">
                                                                <div className="mb-4 pb-2">
                                                                    <div className="form-outline">
                                                                        <label className="form-label" htmlFor="form3Examplev5">Duration (In month)</label>
                                                                        <input name='duration' type="text" id="form3Examplev5"
                                                                            className="form-control form-control-lg" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg bg-indigo text-white">
                                                    <div className="p-5">
                                                        <h3 className="fw-normal mb-5">Contact Details</h3>

                                                        <div className="mb-4 pb-2">
                                                            <div className="form-outline form-white">
                                                                <input name='address1' type="text" id="form3Examplea2"
                                                                    className="form-control form-control-lg" />
                                                                <label className="form-label" htmlFor="form3Examplea2">Flat no. / House No. + Street</label>
                                                            </div>
                                                        </div>

                                                        <div className="mb-4 pb-2">
                                                            <div className="form-outline form-white">
                                                                <input type="text" name='address2' id="form3Examplea3"
                                                                    className="form-control form-control-lg" />
                                                                <label className="form-label" htmlFor="form3Examplea3">Locality / Area </label>
                                                            </div>
                                                        </div>

                                                        <div className="row">
                                                            <div className="col-md-5 mb-4 pb-2">

                                                                <div className="form-outline form-white">
                                                                    <input type="text" name='pincode' id="form3Examplea4"
                                                                        className="form-control form-control-lg" />
                                                                    <label className="form-label" htmlFor="form3Examplea4">Zip Code</label>
                                                                </div>

                                                            </div>
                                                            <div className="col-md-7 mb-4 pb-2">

                                                                <div className="form-outline form-white">
                                                                    <input name='place' type="text" id="form3Examplea5"
                                                                        className="form-control form-control-lg" />
                                                                    <label className="form-label" htmlFor="form3Examplea5">Place</label>
                                                                </div>

                                                            </div>
                                                        </div>

                                                        <div className="mb-4 pb-2">
                                                            <div className="form-outline form-white">
                                                                <input name='state' type="text" id="form3Examplea6"
                                                                    className="form-control form-control-lg" />
                                                                <label className="form-label" htmlFor="form3Examplea6">State</label>
                                                            </div>
                                                        </div>
                                                        <div className="mb-4 pb-2">
                                                            <div className="form-outline form-white">
                                                                <input name='country' type="text" id="form3Examplea6"
                                                                    className="form-control form-control-lg" />
                                                                <label className="form-label" htmlFor="form3Examplea6">Country</label>
                                                            </div>
                                                        </div>

                                                        <div className="row">
                                                            
                                                            <div className="col-md-7 mb-4 pb-2">

                                                                <div className="form-outline form-white">
                                                                    <input name='mobile' type="text" id="form3Examplea8"
                                                                        className="form-control form-control-lg" value={userDetails?.mobile}  onChange={()=>{}} />
                                                                    <label className="form-label" htmlFor="form3Examplea8">Phone
                                                                        Number</label>
                                                                </div>

                                                            </div>
                                                        </div>


                                                        <div className="form-check d-flex justify-content-start mb-4 pb-3">
                                                            <input className="form-check-input me-3" type="checkbox" value=""
                                                                id="form2Example3c" required />
                                                            <label className="form-check-label text-white" htmlFor="form2Example3">
                                                                I do accept the <a href="#!" className="text-white"><u>Terms and
                                                                    Conditions</u></a> of your
                                                                site.
                                                            </label>
                                                        </div>

                                                        <button type="submit" className="btn btn-light btn-lg"
                                                            data-mdb-ripple-color="dark">Register</button>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </form>
        </>
    )
}

export default Applyloan




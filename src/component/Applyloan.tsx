import React, { useEffect, useState } from 'react'
import './css/loan_registration.css'
import { getDetailsApi, loanapply } from '../servies/User'
import UserHeader from './UserHeader'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { UserDetailResponse } from '../servies/Interface'

const Applyloan = () => {
    const navigate = useNavigate();
    const [userDetails, setUserDetails] = useState<UserDetailResponse>()
    const panRegex = /^[A-Z0-9]{10}$/;  // Proper Regex for pancard is "/^([A-Z]){5}([0-9]){4}([A-Z]){1}$/" include 5-Alphabet,4-digit,1-Alphabet
    const aadharRegex = /^[1-9]{1}[0-9]{11}$/; //replacement regex is "/^\d{12}$/"
    const incomeRegex = /^[1-9]{1}[0-9]{4,7}$/;
    const loanRegex = /^[1-9]{1}[0-9]{3,7}$/;
    const durationRegex = /^[1-9]{1}[0-9]{0,3}$/;
    const addressRegex = /^[A-Za-z0-9\s,.'-]+$/;
    const pincodeRegex = /^[1-9]{1}[0-9]{5}$/;
    const placeRegex = /^[A-Za-z]{3,30}$/;
    const stateRegex = /^[a-zA-Z.' ']{3,30}$/;
    const countryRegex = /^(Russia|Canada|China|United States|Brazil|Australia|India|Argentina|Kazakhstan|Algeria)$/i;

    const [Error, setError] = useState({ pan: "", aadhar: "", income: "", loanAmt: "", duration: "", address1: "", address2: "", pincode: "", place: "", state: "", country: "" });
    const [confirm, setConfirm] = useState({ pan: false, aadhar: false, income: false, loanAmt: false, duration: false, address1: false, address2: false, pincode: false, place: false, state: false, country: false });
    useEffect(() => {

        let userLogged = localStorage.getItem("Session") as string;
        let applicantId = JSON.parse(userLogged).id
        const data = {
            userId: applicantId
        }


        let result = getDetailsApi(data).then(Res => setUserDetails(Res.data[0])).catch(err => console.log(err));

    }, [])



    const checkPan = (e: any) => {
        if (panRegex.test(e.currentTarget.value) === false) {
            setError((prevState) => { return { ...prevState, "pan": "Please Enter Valid Pan Number i.e ABCDE1234F" } })
            return false;
        }
        else {
            setError((prevState) => { return { ...prevState, "pan": "" } })
            setConfirm((prevState) => { return { ...prevState, "pan": true } })
            return true;
        }
    }
    const checkAadhar = (e: any) => {
        if (aadharRegex.test(e.currentTarget.value) === false) {
            setError((prevState) => { return { ...prevState, "aadhar": "Please Enter Valid Aadhar Number i.e 123456789000" } })
            return false;
        }
        else {
            setError((prevState) => { return { ...prevState, "aadhar": "" } })
            setConfirm((prevState) => { return { ...prevState, "aadhar": true } })
            return true;
        }
    }
    const checkIncome = (e: any) => {
        if (incomeRegex.test(e.currentTarget.value) === false) {
            setError((prevState) => { return { ...prevState, "income": "Please Enter Min Income i.e ₹10000" } })
            return false;
        }
        else {
            setError((prevState) => { return { ...prevState, "income": "" } })
            setConfirm((prevState) => { return { ...prevState, "income": true } })
            return true;
        }
    }
    const checkLoanAmt = (e: any) => {
        if (loanRegex.test(e.currentTarget.value) === false) {
            setError((prevState) => { return { ...prevState, "loanAmt": "Please Enter Min Income i.e ₹1000" } })
            return false;
        }
        else {
            setError((prevState) => { return { ...prevState, "loanAmt": "" } })
            setConfirm((prevState) => { return { ...prevState, "loanAmt": true } })
            return true;
        }
    }
    const checkDuration = (e: any) => {
        if (durationRegex.test(e.currentTarget.value) === false) {
            setError((prevState) => { return { ...prevState, "duration": "Please Enter Valid Duration i.e 12" } })
            return false;
        }
        else {
            setError((prevState) => { return { ...prevState, "duration": "" } })
            setConfirm((prevState) => { return { ...prevState, "duration": true } })
            return true;
        }
    }
    const checkAddress1 = (e: any) => {
        if (addressRegex.test(e.currentTarget.value) === false) {
            setError((prevState) => { return { ...prevState, "address1": "Please Enter Valid Address" } })
            return false;
        }
        else {
            setError((prevState) => { return { ...prevState, "address1": "" } })
            setConfirm((prevState) => { return { ...prevState, "address1": true } })
            return true;
        }
    }
    const checkAddress2 = (e: any) => {
        if (addressRegex.test(e.currentTarget.value) === false) {
            setError((prevState) => { return { ...prevState, "address2": "Please Enter Valid Address" } })
            return false;
        }
        else {
            setError((prevState) => { return { ...prevState, "address2": "" } })
            setConfirm((prevState) => { return { ...prevState, "address2": true } })
            return true;
        }
    }
    const checkPincode = (e: any) => {
        if (pincodeRegex.test(e.currentTarget.value) === false) {
            setError((prevState) => { return { ...prevState, "pincode": "Please Enter Valid Zip Code i.e 111111" } })
            return false;
        }
        else {
            setError((prevState) => { return { ...prevState, "pincode": "" } })
            setConfirm((prevState) => { return { ...prevState, "pincode": true } })
            return true;
        }
    }
    const checkPlace = (e: any) => {
        if (placeRegex.test(e.currentTarget.value) === false) {
            setError((prevState) => { return { ...prevState, "place": "Please Enter Valid Place i.e Indore" } })
            return false;
        }
        else {
            setError((prevState) => { return { ...prevState, "place": "" } })
            setConfirm((prevState) => { return { ...prevState, "place": true } })
            return true;
        }
    }
    const checkState = (e: any) => {
        if (stateRegex.test(e.currentTarget.value) === false) {
            setError((prevState) => { return { ...prevState, "state": "Please Enter Valid State i.e M.P/Goa" } })
            return false;
        }
        else {
            setError((prevState) => { return { ...prevState, "state": "" } })
            setConfirm((prevState) => { return { ...prevState, "state": true } })
            return true;
        }
    }
    const checkCountry = (e: any) => {
        if (countryRegex.test(e.currentTarget.value) === false) {
            setError((prevState) => { return { ...prevState, "country": "Please Enter Valid Country i.e Indie/Brazil" } })
            return false;
        }
        else {
            setError((prevState) => { return { ...prevState, "country": "" } })
            setConfirm((prevState) => { return { ...prevState, "country": true } })
            return true;
        }
    }





    const applyReq = async (e: any) => {
        e.preventDefault()

        let userLogged = localStorage.getItem("Session") as string;
        let applicantId = JSON.parse(userLogged).id
        const formdata = new FormData(e.currentTarget)
        if (formdata.get('aadhar') === "")
            setError((prevState) => { return { ...prevState, "aadhar": "Field is required" } })

        if (formdata.get('pan') === "")
            setError((prevState) => { return { ...prevState, "pan": "Field is required" } })

        if (formdata.get('income') === "")
            setError((prevState) => { return { ...prevState, "income": "Field is required" } })

        if (formdata.get('loanAmt') === "")
            setError((prevState) => { return { ...prevState, "loanAmt": "Field is required" } })

        if (formdata.get('duration') === "")
            setError((prevState) => { return { ...prevState, "duration": "Field is required" } })
        if (formdata.get('address1') === "")
            setError((prevState) => { return { ...prevState, "address1": "Field is required" } })

        if (formdata.get('address2') === "")
            setError((prevState) => { return { ...prevState, "address2": "Field is required" } })

        if (formdata.get('pincode') === "")
            setError((prevState) => { return { ...prevState, "pincode": "Field is required" } })

        if (formdata.get('place') === "")
            setError((prevState) => { return { ...prevState, "place": "Field is required" } })

        if (formdata.get('state') === "")
            setError((prevState) => { return { ...prevState, "state": "Field is required" } })

        if (formdata.get('country') === "")
            setError((prevState) => { return { ...prevState, "country": "Field is required" } })

        if(confirm.aadhar && confirm.pan && confirm.income && confirm.loanAmt && confirm.duration && confirm.address1 && confirm.address2 && confirm.pincode && confirm.place && confirm.state && confirm.country )
        {
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

                navigate('/myloanrequest');
                toast.success("Successfully Applied")
            }
            else if (result.data.success === 'false') {
                    toast.error(result.data.messages)
            }
            else {
                console.error(result.data)
            }
        }

    }



    return (
        <>
            <UserHeader />
            <form action="" onSubmit={applyReq} method="post">
                <div className="apply_loan">
                    <section className="h-100 " style={{ height: "100% !important", background:"linear-gradient(to right, rgba(161, 196, 253, 1), rgba(194, 233, 251, 1))" }} >
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
                                                                        Name</label>
                                                                    <input type="text" id="form3Examplev2"
                                                                        name='fname' className="form-control form-control-lg cap" value={userDetails?.fname} onChange={() => { }} />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6 mb-4 pb-2">

                                                                <div className="form-outline">
                                                                    <label className="form-label" htmlFor="form3Examplev3">Last Name</label>
                                                                    <input type="text" id="form3Examplev3"
                                                                        className="form-control form-control-lg cap" name='lname' value={userDetails?.lname} onChange={() => { }} />
                                                                </div>

                                                            </div>
                                                        </div>



                                                        <div className="mb-4 pb-2">
                                                            <div className="form-outline">
                                                                <label className="form-label" htmlFor="form3Examplev4">Email Address</label>
                                                                <input type="text" id="form3Examplev4"
                                                                    className="form-control form-control-lg cap" name='email' value={userDetails?.email} onChange={() => { }} />
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
                                                                            className="form-control form-control-lg" onChangeCapture={checkAadhar} />
                                                                        <p className='text-danger p-2 m-2 ' >{Error.aadhar}</p>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                            <div className="col-md-6 mb-4 pb-2 mb-md-0 pb-md-0">
                                                                <div className="mb-4 pb-2">
                                                                    <div className="form-outline">
                                                                        <label className="form-label" htmlFor="form3Examplev5">Pan
                                                                            Number</label>
                                                                        <input name='pan' type="text" id="form3Examplev5"
                                                                            className="form-control form-control-lg " onChangeCapture={checkPan} />
                                                                        <p className='text-danger p-2 m-2 ' >{Error.pan}</p>
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
                                                                        {/* <option value="Other">Other</option> */}
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6 mb-4 pb-2 mb-md-0 pb-md-0">
                                                                <div className="mb-4 pb-2">
                                                                    <div className="form-outline">
                                                                        <label className="form-label" htmlFor="form3Examplev5">Annual Income</label>
                                                                        <input name='income' type="text" id="form3Examplev5"
                                                                            className="form-control form-control-lg" onChangeCapture={checkIncome} />
                                                                        <p className='text-danger p-2 m-2 ' >{Error.income}</p>
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
                                                                            className="form-control form-control-lg" onChangeCapture={checkLoanAmt} />
                                                                        <p className='text-danger p-2 m-2 ' >{Error.loanAmt}</p>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                            <div className="col-md-6 mb-4 pb-2 mb-md-0 pb-md-0">
                                                                <div className="mb-4 pb-2">
                                                                    <div className="form-outline">
                                                                        <label className="form-label" htmlFor="form3Examplev5">Duration (In month)</label>
                                                                        <input name='duration' type="text" id="form3Examplev5"
                                                                            className="form-control form-control-lg" onChangeCapture={checkDuration} />
                                                                        <p className='text-danger p-2 m-2 ' >{Error.duration}</p>
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
                                                                    className="form-control form-control-lg  cap" onChangeCapture={checkAddress1} />
                                                                <label className="form-label" htmlFor="form3Examplea2">Flat no. / House No. + Street</label>
                                                                <strong className='text-danger p-2 m-2  ' >{Error.address1}</strong>
                                                            </div>
                                                        </div>

                                                        <div className="mb-4 pb-2">
                                                            <div className="form-outline form-white">
                                                                <input type="text" name='address2' id="form3Examplea3"
                                                                    className="form-control form-control-lg cap" onChangeCapture={checkAddress2} />
                                                                <label className="form-label" htmlFor="form3Examplea3">Locality / Area </label>
                                                                <strong className='text-danger p-2 m-2 ' >{Error.address2}</strong>
                                                            </div>
                                                        </div>

                                                        <div className="row">
                                                            <div className="col-md-5 mb-4 pb-2">

                                                                <div className="form-outline form-white">
                                                                    <input type="text" name='pincode' id="form3Examplea4"
                                                                        className="form-control form-control-lg" onChangeCapture={checkPincode} />
                                                                    <label className="form-label" htmlFor="form3Examplea4">Zip Code</label>
                                                                    <p><strong className='text-danger p-2 m-2 ' >{Error.pincode}</strong></p>
                                                                </div>

                                                            </div>
                                                            <div className="col-md-7 mb-4 pb-2">

                                                                <div className="form-outline form-white">
                                                                    <input name='place' type="text" id="form3Examplea5"
                                                                        className="form-control form-control-lg cap" onChangeCapture={checkPlace} />
                                                                    <label className="form-label" htmlFor="form3Examplea5">Place</label>
                                                                    <p><strong className='text-danger p-2 m-2 ' >{Error.place}</strong></p>
                                                                </div>

                                                            </div>
                                                        </div>

                                                        <div className="mb-4 pb-2">
                                                            <div className="form-outline form-white">
                                                                <input name='state' type="text" id="form3Examplea6"
                                                                    className="form-control form-control-lg cap" onChangeCapture={checkState} />
                                                                <label className="form-label" htmlFor="form3Examplea6">State</label>
                                                                <strong className='text-danger p-2 m-2 ' >{Error.state}</strong>
                                                            </div>
                                                        </div>
                                                        <div className="mb-4 pb-2">
                                                            <div className="form-outline form-white">
                                                                <input name='country' type="text" id="form3Examplea6"
                                                                    className="form-control form-control-lg cap" onChangeCapture={checkCountry} />
                                                                <label className="form-label" htmlFor="form3Examplea6">Country</label>
                                                                <strong className='text-danger p-2 m-2 ' >{Error.country}</strong>
                                                            </div>
                                                        </div>

                                                        <div className="row">

                                                            <div className="col-md-7 mb-4 pb-2">

                                                                <div className="form-outline form-white">
                                                                    <input name='mobile' type="text" id="form3Examplea8"
                                                                        className="form-control form-control-lg" value={userDetails?.mobile} onChange={() => { }} />
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

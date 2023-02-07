import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './component/Login';
import Signup from './component/Signup';
import Header from './component/Header';
import Admindashboard from './component/Admindashboard';
import Userdashboard from './component/Userdashboard';
import Home from './component/Home';
import Adminheader from './component/Adminheader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthRoutes from './component/AuthRoutes';
import Applyloan from './component/Applyloan';
import LoanApplicationList from './component/LoanApplicationList';
import MyLoanRequest from './component/MyLoanRequest';



function App() {
  

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<> <Header/> <Home /> </>}> </Route>
          <Route path="/login" element={<><Header /> <Login /> </>}></Route>
          <Route path="/signup" element={<><Header /><Signup /></>}></Route>
          <Route path='/admin' element={<AuthRoutes allowedRole='admin'><Adminheader /></AuthRoutes>}></Route>
          <Route path='/admindashboard' element={<AuthRoutes allowedRole='admin'><Admindashboard /></AuthRoutes>}></Route>
          <Route path='/userdashboard' element={<AuthRoutes allowedRole='user'><Userdashboard /></AuthRoutes>}></Route>
          <Route path='/myloanrequest' element={<AuthRoutes allowedRole='user'><MyLoanRequest /></AuthRoutes>}></Route>
          <Route path='/loanapplication' element={<AuthRoutes allowedRole='admin'><LoanApplicationList /></AuthRoutes>}></Route>
          <Route path='/user/apply' element={<AuthRoutes allowedRole='user'><Applyloan /></AuthRoutes>}></Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer limit={1} />
    </div>
  );
}

export default App;

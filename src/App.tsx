import React from 'react';
import { BrowserRouter,Route,Routes} from "react-router-dom";
import Login from './component/Login';
import Signup from './component/Signup';
import Header from './component/Header';
import Admindashboard from './component/Admindashboard';
import Userdashboard from './component/Userdashboard';
import Home from './component/Home';
import Adminheader from './component/Adminheader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


  
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<> <Header/> <Home/> </>}> </Route>
        <Route path="/login" element={<><Header/> <Login/> </>}></Route>
        <Route path="/signup" element={<><Header/> <Signup/></>}></Route>
        <Route path='/admin' element={<Adminheader/>}></Route>
        <Route path='/admindashboard' element={<> <Adminheader/> <Admindashboard/> </>}></Route>
        <Route path='/userdashboard' element={<Userdashboard/>}></Route>
        
      </Routes>
      </BrowserRouter>    
      <ToastContainer />
    </div>
  );
}

export default App;

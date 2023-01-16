import React from 'react';
import { BrowserRouter,Route,Routes} from "react-router-dom";
import Login from './component/Login';
import Signup from './component/Signup';
import Header from './component/Header';

  
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Header/>}> </Route>
        <Route path="/login" element={<><Header/> <Login/> </>}></Route>
        <Route path="/signup" element={<><Header/> <Signup/></>}></Route>
      </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;

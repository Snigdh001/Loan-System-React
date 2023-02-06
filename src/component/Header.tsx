import React from 'react'
import '../component/css/header.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
<header>
  <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active" style={{  backgroundImage: "url('https://source.unsplash.com/bF2vsubyHcQ/1920x1080')" }}>
        <div className="logo" >
          <img className='headimg'  src="https://seeklogo.com/images/H/home-loan-logo-47AE303918-seeklogo.com.png" alt="LOGO" />
          <h1 className='headertext'>WelCome</h1>
          <Link to="/" className='headerlink'>Home</Link>
          <Link to="/signup" className='headerlink'>Sign Up</Link>
          <Link to="/login" className='headerlink'>Login</Link>
          {/* <Link to="#" className='headerlink'>About</Link> */}
        </div>
      </div>
      <div className="carousel-item" style={{ backgroundImage: "url('https://source.unsplash.com/LAaSoL0LrYs/1920x1080')"}}>
        {/* <div className="carousel-caption">          </div> */}
        <div className="logo">
          <img  className='headimg' src="https://seeklogo.com/images/H/home-loan-logo-47AE303918-seeklogo.com.png" alt="LOGO" />
          <h1 className='headertext'>WelCome</h1>
          <Link to="/" className='headerlink'>Home</Link>
          <Link to="/signup" className='headerlink'>Sign Up</Link>
          <Link to="/login" className='headerlink'>Login</Link>
          {/* <Link to="#" className='headerlink'>About</Link> */}
        </div>
      </div>
      <div className="carousel-item" style={{ backgroundImage: "url('https://source.unsplash.com/szFUQoyvrxM/1920x1080')"}}>
        <div className="logo">
          <img  className='headimg' src="https://seeklogo.com/images/H/home-loan-logo-47AE303918-seeklogo.com.png" alt="LOGO" />
          <h1 className='headertext' style={{color:"red"}}>WelCome</h1>
          <Link to="/" style={{color:"red"}} className='headerlink'>Home</Link>
          <Link to="/signup" style={{color:"red"}} className='headerlink'>Sign Up</Link>
          <Link to="login" style={{color:"red"}} className='headerlink'>Login</Link>
          {/* <Link to="#" style={{color:"red"}} className='headerlink'>About</Link> */}
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden" style={{ color:"black !important"}}>Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
</header>
  )
}

export default Header
import React from 'react'

const UserHeader = () => {
    const logOut = () => {
        localStorage.removeItem("Session");
        return true;
    }
  return (
    <header>
  <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active" style={{ backgroundImage: "url('https://source.unsplash.com/LAaSoL0LrYs/1920x1080')"}}>
        {/* <div className="carousel-caption">
          
        </div> */}
        <div className="logo">
          <img src="https://seeklogo.com/images/H/home-loan-logo-47AE303918-seeklogo.com.png" alt="LOGO" />
          <h1 className='headertext'>WelCome</h1>
          <a href="/" className='headerlink'>Home</a>
          <a href="user/apply" className='headerlink'>Apply For Loan</a>
          <a className="headerlink" href="/login" onClick={logOut} >LogOut</a>
          {/* <a href="login" className='headerlink'>Login</a> */}
        </div>
      </div>
      <div className="carousel-item" style={{ backgroundImage: "url('https://source.unsplash.com/bF2vsubyHcQ/1920x1080')"}}>
        {/* <div className="carousel-caption">          </div> */}
        <div className="logo">
          <img src="https://seeklogo.com/images/H/home-loan-logo-47AE303918-seeklogo.com.png" alt="LOGO" />
          <h1 className='headertext'>WelCome</h1>
          <a href="/" className='headerlink'>Home</a>
          <a href="user/apply" className='headerlink'>Apply For Loan</a>
          {/* <a href="login" className='headerlink'>Login</a> */}
          <a className="headerlink" href="login" onClick={logOut} >LogOut</a>
        </div>
      </div>
      <div className="carousel-item" style={{ backgroundImage: "url('https://source.unsplash.com/szFUQoyvrxM/1920x1080')"}}>
        <div className="logo" style={{color:"red"}}>
          <img src="https://seeklogo.com/images/H/home-loan-logo-47AE303918-seeklogo.com.png" alt="LOGO" />
          <h1 className='headertext' style={{color:"red"}}>WelCome</h1>
          <a href="/" style={{color:"red"}} className='headerlink'>Home</a>
          <a href="user/apply" style={{color:"red"}} className='headerlink'>Apply For Loan</a>
          {/* <a href="login" style={{color:"red"}} className='headerlink'>Login</a> */}
          <a className="headerlink" style={{color:"red"}} href="/login" onClick={logOut}>LogOut</a>
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

export default UserHeader
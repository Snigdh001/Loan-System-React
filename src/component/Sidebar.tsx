import React from 'react'

const Sidebar = () => {
  return (
    <>
      <div>
        <div className="w3-sidebar w3-light-grey w3-bar-block" style={{  minWidth: "100px",width:"10%" }}>
          <h3 className="w3-bar-item">Menu</h3>
          {/* <a href="/admin" className="w3-bar-item w3-button">Home</a> */}
          <a href="/admindashboard" className="w3-bar-item w3-button">Register User</a>
          <a href="/loanapplication" className="w3-bar-item w3-button">Loan Request</a>
          {/* <a href="#" className="w3-bar-item w3-button">Link 3</a> */}
        </div>
        <div style={{ marginLeft: "10%" }}>
        </div>
      </div>
    </>
  )
}

export default Sidebar
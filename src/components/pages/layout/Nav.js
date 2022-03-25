import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
  return (
    
     <div className='row bg-secondary'>
          <div className='col-5'>
          <Link to="/" className="nav-link text-white px-2 fs-3 fw-bold logo ms-5"><span className='warning'>Ghumau</span>NEPAL</Link>
          </div>
          
           <div className='col-6 d-flex mt-2 justify-content-evenly'>
           <Link to="/" className="nav-link text-white px-2 ">Home</Link>
           <Link to="/destinations" className="nav-link text-white px-2 ">Destinations</Link>
           <Link to="#" className="nav-link text-white px-2 ">Gallery</Link>
           <Link to="#" className="nav-link text-white px-2 ">Recommendation</Link>
           <Link to="/review" className="nav-link text-white px-2 ">Reviews</Link>
           </div> 

          {/* <div className='col-4 d-flex justify-content-end mt-2'>
          <form className="">
          <input type="search" className="form-control form-control-dark" placeholder="Search..." aria-label="Search"/>
          </form>

          <div className="text-end">
          <Link to='/signin'><button type="button" className="btn btn-outline-light ms-2 me-2">Login</button></Link>
          <Link to='/register'><button type="button" className="btn btn-warning">Sign-up</button></Link>
          </div>
          </div> */}
      
      
      </div>

    
  )
}

export default Nav

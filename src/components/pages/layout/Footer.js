import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <>
     <div className="container-fluid footer-container">
  <footer className="py-5">
    <div className="row row-footer mt-2 pt-4 pb-3">
      <div className="col-2">
        <h4 className='fw-bold'>Quick Links</h4>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">Home</Link></li>
          <li className="nav-item mb-2"><Link to="/destinations" className="nav-link p-0 text-muted">Destinations</Link></li>
          <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-muted">Recommendation</Link></li>
          <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-muted">Gallery</Link></li>
          <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-muted">About Us</Link></li>
        </ul>
      </div>

      <div className="col-2">
        <h4 className='fw-bold'>Follow Us</h4>
        <ul className="nav flex-column">
          
          <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-muted">Facebook</Link></li>
          <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-muted">Instagram</Link></li>
          <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-muted">Twitter</Link></li>
          <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-muted">LinkedIn</Link></li>
        </ul>
      </div>


      <div className="col-6 offset-1 ">
        <form>
          <h5>Subscribe to our newsletter</h5>
          <p>Monthly digest of whats new and exciting from us.</p>
          <div className="d-flex w-100 gap-2">
            <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" className="form-control" placeholder="Email address"/>
            <button className="btn btn-primary" type="button">Subscribe</button>
          </div>
        </form>
      </div>
    </div>

    <div className="d-flex justify-content-end py-4 my-4 border-top">
      <p>&copy; 2021 Rabindra & Anit. All rights reserved.</p>
      <ul className="list-unstyled d-flex">
        <li className="ms-3"><Link className="link-dark" to="#"></Link></li>
        <li className="ms-3"><Link className="link-dark" to="#"></Link></li>
        <li className="ms-3"><Link className="link-dark" to="#"></Link></li>
      </ul>
    </div>
  </footer>
</div>

 
    </>
  )
}

export default Footer

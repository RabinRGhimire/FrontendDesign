import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './pages/layout/Footer'
import Nav from './pages/layout/Nav'


const Signin = () => {
  return (
    <>
        <Nav/>

        <main className="form-signin w-50 mx-auto shadow-lg p-5 mt-4 text-center">
  <form>
    <h1 className="h3 mb-4 fw-bold">Please Sign In</h1>

    <div className="form-floating mb-2">
      <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
      <label htmlFor="floatingInput">Email address</label>
    </div>
    <div className="form-floating mb-2">
      <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
      <label htmlFor="floatingPassword">Password</label>
    </div>

    <div className="checkbox mb-3 text-start">
      <label>
        <input type="checkbox" value="remember-me"/> Remember me
      </label>
    </div>
    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
    Do not have an account. <Link to="/register" className='text-decoration-none fw-bold'> Register </Link> 

    <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
  </form>
</main>

    <Footer/>

    </>
  )
}

export default Signin

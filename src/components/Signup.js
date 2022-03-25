import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Footer from './pages/layout/Footer'
import Nav from './pages/layout/Nav'




export default class Signup extends Component{

  handleSubmit=e=>{
    e.preventDefault();

    const data={
      first_name: this.firstName,
      last_name: this.lastName,
      email: this.email,
      password: this.password,
      password_confirm: this.confirmPassword
    };

    axios.post('http://localhost:8000/register ', data).then(
      res=>{
        console.log(res)
      }
    ).catch(
      err=>{
        console.log(err)
      }
    )

    
    
  }
  
  render(){
  return (
    <>
        <Nav/>

        <main className="form-signin w-50 mx-auto shadow-lg p-5 mt-4 text-center">
  <form onSubmit={this.handleSubmit}>
    <h1 className="h3 mb-4 fw-bold">Register</h1>

    <div className="form-floating mb-2">
      <input type="text" className="form-control" id="floatingInput" placeholder="First Name" onChange={e=>this.firstName=e.target.value}/>
      <label >First Name</label>
    </div>
    {/* <div className="form-floating mb-2">
      <input type="email" className="form-control" id="floatingInput1" placeholder="Middle Name" onChange={e=>this.middleName=e.target.value}/>
      <label >Middle Name</label>
    </div>  */}
    <div className="form-floating mb-2">
      <input type="text" className="form-control" id="floatingInput3" placeholder="Last Name" onChange={e=>this.lastName=e.target.value}/>
      <label >Last Name</label>
    </div>

    {/* <div className="form-floating mb-2">
      <input type="date" className="form-control" id="dob" />
      <label htmlFor='dob' >Date of Birth</label>
    </div> */}
    

    <div className="form-floating mb-2">
      <input type="email" className="form-control" id="floatingInput4" placeholder="name@example.com" onChange={e=>this.email=e.target.value}/>
      <label >Email address</label>
    </div>
    <div className="form-floating mb-2">
      <input type="password" className="form-control" id="floatingPassword5" placeholder="Password" onChange={e=>this.password=e.target.value}/>
      <label >Password</label>
    </div>
    <div className="form-floating mb-2">
      <input type="password" className="form-control" id="floatingPassword6" placeholder="Confirm Password" onChange={e=>this.confirmPassword=e.target.value} />
      <label >Confirm Password</label>
    </div>
    
    <div className="form-floating mb-2">
        <div className='form-control d-flex justify-content-center'>
        <div className="form-check">
        <input className="form-check-input me-2 " type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
        <label className="form-check-label" htmlFor="flexRadioDefault1">
        Male
        </label>
         </div>    
         <div className="form-check">
        <input className="form-check-input me-2 " type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
        <label className="form-check-label" htmlFor="flexRadioDefault2">
        Female
        </label>
         </div> 
         <div className="form-check">
        <input className="form-check-input me-2" type="radio" name="flexRadioDefault" id="flexRadioDefault3"/>
        <label className="form-check-label" htmlFor="flexRadioDefault3">
        Others
        </label>
         </div>       
        </div>
        {/* <label htmlFor=''>Gender</label> */}
    </div> 

    <div className="checkbox mb-3 text-start">
      <label>
        <input type="checkbox" value="remember-me"/> I accept the terms and conditions.
      </label>
    </div>
    <button className="w-100 btn btn-lg btn-primary" type="submit">Register</button>
    Already have an account. <Link to="/signin" className='text-decoration-none fw-bold'> Sign In </Link> 

    <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
  </form>
</main>

    <Footer/>

    </>
  )
}
}



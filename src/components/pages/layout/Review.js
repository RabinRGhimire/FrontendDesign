import React from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'
import './Review.css'

const Review = () => {
  return (
    <>
    <Nav/>

     <div className="row mt-2">
     <div className="col">
          <div className="card  my-3 rounded">
            <img
              src="images/pic1.png"
              className="card-img img-review mx-auto"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title text-center fw-bold fs-3">
                Anit Rajbhandari
              </h5>
              <p className="card-txt">
             <center>All Good!</center>
              </p>
              
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card my-3 rounded">
            <img
              src="images/pic2.png"
              className="card-img img-review mx-auto"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title text-center fw-bold fs-3">
                Rupesh Parajuli
              </h5>
              <p className="card-txt">
              <center>Best place for itineraries.</center>
              </p>
              
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card my-3 rounded">
            <img
              src="images/pic3.png"
              className="card-img img-review mx-auto"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title text-center fw-bold fs-3">
                Anush Shrestha
              </h5>
              <p className="card-txt">
              <center>Good to go.</center>
              </p>
              
            </div>
          </div>
        </div>

        <div className="col col-card">
          <div className="card my-3 rounded">
            <img
              src="images/pic4.png"
              className="card-img img-review mx-auto"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title text-center fw-bold fs-3">
                Prayush Dulal
              </h5>
              <p className="card-txt">
              <center>Travel the best with GhumauNEPAL</center>
              </p>
              
            </div>
          </div>
        </div>


        

    </div>
    </>
  )
}

export default Review

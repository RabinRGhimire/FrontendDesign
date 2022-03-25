import React from "react";
import Nav from "../pages/layout/Nav";
import { Link } from "react-router-dom";
import "./pokhara.css";
import Footer from "../pages/layout/Footer";

const Pokhara = () => {
  return (
    <>
      <Nav />

      <hr className="featurette-divider" />

      <div className="row featurette">
        <div className="col-md-7 order-md-2">
          <h2 className="featurette-heading mt-2 fw-bold">Itinerary</h2>
          {/* <ul className="list-group list-group-flush">
  <li className="list-group-item">Day 1: Arrive to Kathmandu</li>
  <li className="list-group-item">Day 2: Kathmandu to Pokhara</li>
  <li className="list-group-item">Day 3: Sarangkot View Tower, Boating at Fewa Lake & Davis Fall Visit</li>
  <li className="list-group-item">Day 4: Short Hike to Pumdikot & Visit Shanti Stupa</li>
  <li className="list-group-item">Day 5: Back to Kathmandu</li>
</ul> */}

          <div
            className="modal fade"
            id="exampleModalToggle"
            aria-hidden="true"
            aria-labelledby="exampleModalToggleLabel"
            tabindex="-1"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalToggleLabel">
                    By Road
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Day 1: Arrive to Kathmandu</li>
                    <li className="list-group-item">Day 2: Kathmandu to Pokhara <br/>- (200 KM || Approx 5-6 hrs)</li>
                    <li className="list-group-item">
                      Day 3: Sarangkot View Tower, Boating at Fewa Lake & Davis
                      Fall Visit
                    </li>
                    <li className="list-group-item">
                      Day 4: Short Hike to Pumdikot & Visit Shanti Stupa
                    </li>
                    <li className="list-group-item">Day 5: Back to Kathmandu<br/>- (200 KM || Approx 5-6 hrs)</li>
                  </ul>{" "}
                </div>
                <div className="modal-footer">
                  <button
                    className="btn btn-primary"
                    data-bs-target="#exampleModalToggle2"
                    data-bs-toggle="modal"
                  >
                    By Flight
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="modal fade"
            id="exampleModalToggle2"
            aria-hidden="true"
            aria-labelledby="exampleModalToggleLabel2"
            tabindex="-1"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalToggleLabel2">
                    By Flight
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Day 1: Arrive to Kathmandu</li>
                    <li className="list-group-item">Day 2: Kathmandu to Pokhara <br/>- (30 Min Flight Time)</li>
                    <li className="list-group-item">
                      Day 3: Sarangkot View Tower, Boating at Fewa Lake & Davis
                      Fall Visit
                    </li>
                    <li className="list-group-item">
                      Day 4: Short Hike to Pumdikot & Visit Shanti Stupa
                    </li>
                    <li className="list-group-item">Day 5: Back to Kathmandu</li>
                  </ul>{" "}
                </div>
                <div className="modal-footer">
                  <button
                    className="btn btn-primary"
                    data-bs-target="#exampleModalToggle"
                    data-bs-toggle="modal"
                  >
                    Back to first
                  </button>
                </div>
              </div>
            </div>
          </div>

          <a
            className="btn btn-primary"
            data-bs-toggle="modal"
            href="#exampleModalToggle"
            role="button"
          >
            By Road
          </a>
          <a
            className="btn btn-primary ms-2"
            data-bs-toggle="modal"
            href="#exampleModalToggle2"
            role="button"
          >
            By Flight
          </a>
        </div>
        

        

        <div className="col-md-5 order-md-1">
          <img src="./images/pokhara.jpeg"></img>
        </div>
      </div>

      <div className="container">
        <h1 className="heading">
          <span>G</span>
          <span>A</span>
          <span>L</span>
          <span>L</span>
          <span>E</span>
          <span>R</span>
          <span>Y</span>
        </h1>
      </div>

      <div className="row row-products row-cols-1 row-cols-md-3 row-cols-lg-4  g-4 my-1 mx-auto">
        <div className="col">
          <div className="card shadow-lg my-3 rounded">
            <img
              src="images/pokhara1.jpeg"
              className="card-img-top"
              alt="..."
            />
          </div>
        </div>

        <div className="col">
          <div className="card shadow-lg my-3 rounded">
            <img
              src="images/pokhara2.jpeg"
              className="card-img-top"
              alt="..."
            />
          </div>
        </div>

        <div className="col">
          <div className="card shadow-lg my-3 rounded">
            <img
              src="images/pokhara3.jpeg"
              className="card-img-top"
              alt="..."
            />
          </div>
        </div>

        <div className="col">
          <div className="card shadow-lg my-3 rounded">
            <img
              src="images/pokhara4.jpeg"
              className="card-img-top"
              alt="..."
            />
          </div>
        </div>
      </div>

      <div className="container">
        <h1 className="heading">
          <span>R</span>
          <span>E</span>
          <span>C</span>
          <span>O</span>
          <span>M</span>
          <span>M</span>
          <span>E</span>
          <span>N</span>
          <span>D</span>
          <span>A</span>
          <span>T</span>
          <span>I</span>
          <span>O</span>
          <span>N</span>
          <span>S</span>
        </h1>
      </div>

      <div className="row row-products row-cols-1 row-cols-md-3 row-cols-lg-3 row-cols-lg-3 g-4 my-1 w-75 mx-auto">
        <div className="col">
          <div className="card shadow-lg my-3 rounded">
            <img src="images/mustang.jpeg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center fw-bold fs-3">
                <i className="bi bi-geo-alt-fill fs-4 me-1"></i>Mustang
              </h5>
              <p className="card-text">
                Mustang District is one of the eleven districts of Gandaki
                Province and one of seventy-seven districts of Nepal. It covers
                an area of 3,573 km² and has a population of 13,452. The
                headquarters is located at Jomsom. Mustang is the 5th largest
                district of Nepal.
              </p>
              <center>
                <Link to="/mustang" className="btn-gen">
                  Generate Itinerary
                </Link>
              </center>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card shadow-lg my-3 rounded">
            <img src="images/mardi.jpeg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center fw-bold fs-3">
                <i className="bi bi-geo-alt-fill fs-4 me-1"></i>Mardi Himal
              </h5>
              <p className="card-text">
                Mardi Himal is a challenging and beautiful 4-day trek in the
                Annapurna region that offers breathtaking views of the Himalayan
                mountain range. It's a lesser-known route compared to the famous
                Everest Base Camp trek or Annapurna Circuit trek. We started the
                Mardi Himal trek in Ghandruk after finishing the Poon Hill trek.
              </p>
              <center>
                <Link to="#" className="btn-gen">
                  Generate Itinerary
                </Link>
              </center>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card shadow-lg my-3 rounded">
            <img src="images/kushma.jpeg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center fw-bold fs-3">
                <i className="bi bi-geo-alt-fill fs-4 me-1"></i>Kushma Parbat
              </h5>
              <p className="card-text">
                Kushma is a small village and the headquarter of Parbat District
                in Nepal. Kushma municipality was formed by merging thirteen
                village development committees Pang, Khurkot, Durlung,
                Shivalaya, Chuwa, Katuwa Chaupari, Pipaltari and Pakuwa on 18
                May 2014.
              </p>
              <center>
                <Link to="#" className="btn-gen">
                  Generate Itinerary
                </Link>
              </center>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Pokhara;

import React from "react";
import { Link } from "react-router-dom";
import Footer from "../pages/layout/Footer";
import Nav from "../pages/layout/Nav";

const Mustang = () => {
  return (
    <>
      <Nav />

      <hr class="featurette-divider" />

      <div className="row featurette">
        <div className="col-md-7 order-md-2">
          <h2 className="featurette-heading mt-2 fw-bold">Itinerary</h2>

          {/* <ul class="list-group list-group-flush">
<li class="list-group-item">Day 1: Arrive to Kathmandu</li>
<li class="list-group-item">Day 2: Kathmandu to Pokhara</li>
<li class="list-group-item">Day 3: Pokhara to Jomsom</li>
<li class="list-group-item">Day 4: Jomsom to Muktinath</li>
<li class="list-group-item">Day 5: Muktinath to Tatopani</li>

<li class="list-group-item">Day 6: Tatopani to Kathmandu</li>
</ul> */}
          {/* Start */}
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
                    Day 3: Pokhara to Jomsom <br/>- (160 KM || Approx 7-8 hrs)
                    </li>
                    <li className="list-group-item">
                    Day 4: Jomsom to Muktinath <br/>- (30 KM  || Approx 1.5 hrs)
                    </li>
                    <li className="list-group-item">Day 5: Muktinath to Tatopani <br/>- (76 KM || Approx 4hrs)</li>
                    <li className="list-group-item">Day 6: Tatopani to Kathmandu <br/>- (293 KM || Approx 8-9 hrs )</li>
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
                    <li className="list-group-item">Day 1: Kathmandu to Pokhara <br/>- (30 Minutes Flight)</li>
                    <li className="list-group-item">Day 2: Pokhara to Jomsom <br/>- (25 Minutes Flight)</li>
                    <li className="list-group-item">
                      Day 3: Jomsom to Muktinath via Road <br/>- (30 KMs - Approx 1.5 Hrs)
                    </li>
                    <li className="list-group-item">
                      Day 4: Explore Mustang
                    </li>
                    <li className="list-group-item">Day 5: Back to Pokhara</li>
                    <li className="list-group-item">Day 6: Pokhara to Kathmandu</li>
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

          {/* End */}
        </div>
        <div className="col-md-5 order-md-1">
          <img src="./images/mustang1.jpeg" width="500px"></img>
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
              src="images/mustang2.jpeg"
              className="card-img-top"
              alt="..."
            />
          </div>
        </div>

        <div className="col">
          <div className="card shadow-lg my-3 rounded">
            <img
              src="images/mustang3.jpeg"
              className="card-img-top"
              alt="..."
            />
          </div>
        </div>

        <div className="col">
          <div className="card shadow-lg my-3 rounded">
            <img
              src="images/mustang4.jpeg"
              className="card-img-top"
              alt="..."
            />
          </div>
        </div>

        <div className="col">
          <div className="card shadow-lg my-3 rounded">
            <img
              src="images/mustang5.jpeg"
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
            <img src="images/pokhara.jpeg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center fw-bold fs-3">
                <i class="bi bi-geo-alt-fill fs-4 me-1"></i>Pokhara
              </h5>
              <p className="card-text">
                Pokhara is a city on Phewa Lake, in central Nepal. It’s known as
                a gateway to the Annapurna Circuit, a popular trail in the
                Himalayas. Tal Barahi Temple, a 2-story pagoda, sits on an
                island in the lake. On the eastern shore, the Lakeside district
                has yoga centers and restaurants. In the city’s south, the
                International Mountain Museum has exhibits on the history of
                mountaineering and the people of the Himalayas.
              </p>
              <center>
                <Link to="/pokhara" class="btn-gen">
                  Generate Itinerary
                </Link>
              </center>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card shadow-lg my-3 rounded">
            <img src="images/abc.jpeg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center fw-bold fs-3">
                <i class="bi bi-geo-alt-fill fs-4 me-1"></i>Annapurna Base Camp
              </h5>
              <p className="card-text">
                Shey Phoksundo National Park provides a diversity of spectacular
                landscapes and ranks among the most scenic mountain parks in the
                world. Much of the park lies north of the Himalayan crest.
                Elevations range from 2,130 m (6,990 ft) in the southeast near
                Ankhe to 6,883 m (22,582 ft) at the summit of Kanjiroba Himal,
                which lies at the southern edge of the Tibetan plateau.
                Phoksundo Lake lies at an elevation of 3,660 m (12,010 ft) in
                the upper reaches of the Suligad river.
              </p>
              <center>
                <Link to="#" class="btn-gen">
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
                <i class="bi bi-geo-alt-fill fs-4 me-1"></i>Kushma Parbat
              </h5>
              <p className="card-text">
                Kushma is a small village and the headquarter of Parbat District
                in Nepal. Kushma municipality was formed by merging thirteen
                village development committees Pang, Khurkot, Durlung,
                Shivalaya, Chuwa, Katuwa Chaupari, Pipaltari and Pakuwa on 18
                May 2014.
              </p>
              <center>
                <Link to="#" class="btn-gen">
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

export default Mustang;

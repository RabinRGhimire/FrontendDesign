import React from 'react'
import Footer from './layout/Footer'
import Nav from './layout/Nav'
import { Link } from 'react-router-dom'

const Destinations = () => {
  return (
    <>
    <Nav/>

      <div className="row row-products row-cols-1 row-cols-md-3 row-cols-lg-3 row-cols-lg-3 g-4 my-1 w-75 mx-auto">
        <div className="col">
          <div className="card shadow-lg my-3 rounded">
            <img
              src="images/pokhara.jpeg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title text-center fw-bold fs-3">
                <i class="bi bi-geo-alt-fill fs-4 me-1"></i>Pokhara
              </h5>
              <p className="card-text">
              Pokhara is a city on Phewa Lake, in central Nepal. It’s known as a gateway to the Annapurna Circuit, a popular trail in the Himalayas. Tal Barahi Temple, a 2-story pagoda, sits on an island in the lake. On the eastern shore, the Lakeside district has yoga centers and restaurants. In the city’s south, the International Mountain Museum has exhibits on the history of mountaineering and the people of the Himalayas.
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
            <img src="images/mustang.jpeg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center fw-bold fs-3">
                <i class="bi bi-geo-alt-fill fs-4 me-1"></i>Mustang
              </h5>
              <p className="card-text">
              Mustang District is one of the eleven districts of Gandaki Province and one of seventy-seven districts of Nepal. It covers an area of 3,573 km² and has a population of 13,452. The headquarters is located at Jomsom. Mustang is the 5th largest district of Nepal.
              </p>
              <center>
                <Link to="/mustang" class="btn-gen">
                  Generate Itinerary
                </Link>
              </center>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card shadow-lg my-3 rounded">
            <img src="images/ebc.jpeg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center fw-bold fs-3">
                <i class="bi bi-geo-alt-fill fs-4 me-1"></i>Everest Base Camp
              </h5>
              <p className="card-text">
              The Everest Base Camp trek on the south side, at an elevation of 5,364 m (17,598 ft), is one of the most popular trekking routes in the Himalayas and about 40,000 people per year make the trek there from Lukla Airport.[5] Trekkers usually fly from Kathmandu to Lukla to save time and energy before beginning the trek to the base camp. However, trekking to Lukla is possible. 
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
            <img src="images/mardi.jpeg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center fw-bold fs-3">
                <i class="bi bi-geo-alt-fill fs-4 me-1"></i>Mardi Himal
              </h5>
              <p className="card-text">
              Mardi Himal is a challenging and beautiful 4-day trek in the Annapurna region that offers breathtaking views of the Himalayan mountain range. It's a lesser-known route compared to the famous Everest Base Camp trek or Annapurna Circuit trek. We started the Mardi Himal trek in Ghandruk after finishing the Poon Hill trek.
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
            <img src="images/badimalika.jpeg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center fw-bold fs-3">
                <i class="bi bi-geo-alt-fill fs-4 me-1"></i>Badimalika
              </h5>
              <p className="card-text">
              Badimalika trekking is named after a temple situated at an altitude of 4,200 meters above sea level on top of a hill in Bajura district. During the festival of Janai Purnima in the month of August, Badimalika Temple receives huge number of pilgrims.
              </p>
              <center>
                <Link to="#" class="btn-gen ">
                  Generate Itinerary
                </Link>
              </center>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card shadow-lg my-3 rounded">
            <img src="images/phoksundo.jpeg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center fw-bold fs-3">
                <i class="bi bi-geo-alt-fill fs-4 me-1"></i>Shey Phoksundo Lake
              </h5>
              <p className="card-text">
              Shey Phoksundo National Park provides a diversity of spectacular landscapes and ranks among the most scenic mountain parks in the world. Much of the park lies north of the Himalayan crest. Elevations range from 2,130 m (6,990 ft) in the southeast near Ankhe to 6,883 m (22,582 ft) at the summit of Kanjiroba Himal, which lies at the southern edge of the Tibetan plateau. Phoksundo Lake lies at an elevation of 3,660 m (12,010 ft) in the upper reaches of the Suligad river.
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
            <img src="images/abc.jpeg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center fw-bold fs-3">
                <i class="bi bi-geo-alt-fill fs-4 me-1"></i>Annapurna Base Camp
              </h5>
              <p className="card-text">
              Shey Phoksundo National Park provides a diversity of spectacular landscapes and ranks among the most scenic mountain parks in the world. Much of the park lies north of the Himalayan crest. Elevations range from 2,130 m (6,990 ft) in the southeast near Ankhe to 6,883 m (22,582 ft) at the summit of Kanjiroba Himal, which lies at the southern edge of the Tibetan plateau. Phoksundo Lake lies at an elevation of 3,660 m (12,010 ft) in the upper reaches of the Suligad river.
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
            <img src="images/patan.jpeg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center fw-bold fs-3">
                <i class="bi bi-geo-alt-fill fs-4 me-1"></i>Patan Durbar Square
              </h5>
              <p className="card-text">
              Shey Phoksundo National Park provides a diversity of spectacular landscapes and ranks among the most scenic mountain parks in the world. Much of the park lies north of the Himalayan crest. Elevations range from 2,130 m (6,990 ft) in the southeast near Ankhe to 6,883 m (22,582 ft) at the summit of Kanjiroba Himal, which lies at the southern edge of the Tibetan plateau. Phoksundo Lake lies at an elevation of 3,660 m (12,010 ft) in the upper reaches of the Suligad river.
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
            <img src="images/chandragiri1.jpeg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center fw-bold fs-3">
                <i class="bi bi-geo-alt-fill fs-4 me-1"></i>Chandragiri Hills
              </h5>
              <p className="card-text">
              Shey Phoksundo National Park provides a diversity of spectacular landscapes and ranks among the most scenic mountain parks in the world. Much of the park lies north of the Himalayan crest. Elevations range from 2,130 m (6,990 ft) in the southeast near Ankhe to 6,883 m (22,582 ft) at the summit of Kanjiroba Himal, which lies at the southern edge of the Tibetan plateau. Phoksundo Lake lies at an elevation of 3,660 m (12,010 ft) in the upper reaches of the Suligad river.
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
              Kushma is a small village and the headquarter of Parbat District in Nepal. Kushma municipality was formed by merging thirteen village development committees Pang, Khurkot, Durlung, Shivalaya, Chuwa, Katuwa Chaupari, Pipaltari and Pakuwa on 18 May 2014.
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
            <img src="images/lumbini.jpeg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center fw-bold fs-3">
                <i class="bi bi-geo-alt-fill fs-4 me-1"></i>Lumbini
              </h5>
              <p className="card-text">
              Shey Phoksundo National Park provides a diversity of spectacular landscapes and ranks among the most scenic mountain parks in the world. Much of the park lies north of the Himalayan crest. Elevations range from 2,130 m (6,990 ft) in the southeast near Ankhe to 6,883 m (22,582 ft) at the summit of Kanjiroba Himal, which lies at the southern edge of the Tibetan plateau. Phoksundo Lake lies at an elevation of 3,660 m (12,010 ft) in the upper reaches of the Suligad river.
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
            <img src="images/palpa.jpeg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center fw-bold fs-3">
                <i class="bi bi-geo-alt-fill fs-4 me-1"></i>Palpa
              </h5>
              <p className="card-text">
              Shey Phoksundo National Park provides a diversity of spectacular landscapes and ranks among the most scenic mountain parks in the world. Much of the park lies north of the Himalayan crest. Elevations range from 2,130 m (6,990 ft) in the southeast near Ankhe to 6,883 m (22,582 ft) at the summit of Kanjiroba Himal, which lies at the southern edge of the Tibetan plateau. Phoksundo Lake lies at an elevation of 3,660 m (12,010 ft) in the upper reaches of the Suligad river.
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


      <Footer/>
    </>
  )
}

export default Destinations

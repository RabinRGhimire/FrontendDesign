import React from 'react'
import './Readmore.css'
import {Link} from 'react-router-dom'

const Readmore = () => {
  return (
      <>
    <center>
       <Link to='/destinations'><button type="button" class="btn btn-warning btn-seemore fw-bold px-4 py-3">Show More</button></Link>
       </center>
      </>
    
  )
}

export default Readmore

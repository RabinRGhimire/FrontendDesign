import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Mustang from './components/itineraries/Mustang'
import Pokhara from './components/itineraries/Pokhara'
import Destinations from './components/pages/Destinations'
import Home from './components/pages/Home'
import Review from './components/pages/layout/Review'
import Signin from './components/Signin'
import Signup from './components/Signup'

const MyRoutes = () => {
  return (
    <>
    <Router>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/signin' element={<Signin/>}/>
            <Route path='/register' element={<Signup/>}/>
            <Route path='/destinations' element={<Destinations/>}/>
            <Route path='/pokhara' element={<Pokhara/>}/>
            <Route path='/mustang' element={<Mustang/>}/>
            <Route path='/review' element={<Review/>}/>
        </Routes>
    </Router>
    </>
      
    
  )
}

export default MyRoutes

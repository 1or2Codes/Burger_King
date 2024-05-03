import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Error from './Pages/Error'
// import Navbar from './components/Navbar'
import Offers from './Pages/Offers'
import Signup from './Pages/Signup'
import Learnmore from './Pages/Learnmore'


export const App = () => {
  
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path='signup' element={<Signup />} />
        <Route path='learnmore' element={<Learnmore />}></Route>
        <Route path='/' element={<Home />} />
        <Route path='offers' element={<Offers />} />
        <Route path='offers/:id' element={<Offers />} />
        <Route path='*' element={<Error />}/>
      </Routes>

    </BrowserRouter>
  )
}

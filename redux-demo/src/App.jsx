import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'

const App = () => {
  return (
    <Router >
      <div className='flex flex-col gap-2 bg-slate-200 min-h-screen max-w-[1400px] container'>
        <Navbar/>
        <div className='pt-2'>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/products/:id' element={<ProductDetail/>}/>
            <Route path='/cart' element={<Cart />}/>
          </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
  )
}

export default App
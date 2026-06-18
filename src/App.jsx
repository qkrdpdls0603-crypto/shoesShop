import { useState } from 'react'
import './App.css'
import data from './db/data'
import { Link, Outlet, Route, Routes, useNavigate } from 'react-router-dom'
import Home from './components/Home'
import Detail from './components/Detail'
import Footer from './components/Footer'
import Cart from './components/Cart'
import About from './components/About'

function App() {
  const [shoes, setShoes] = useState(data)
  console.log(shoes)
  const navigate = useNavigate()

  return (
    <div className="App">
      <nav className="bg-gray-900 text-white px-4 py-3 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a onClick={()=>{navigate('/')}} className="text-xl font-bold tracking-wide hover:text-gray-300 transition-colors cursor-pointer">
            ShoesShop
          </a>

          <div className="flex space-x-6 ml-6 mr-auto">
            <a onClick={()=>{navigate('/')}} className="text-gray-300 hover:text-white transition-colors font-medium cursor-pointer">
              Home
            </a>
            <a onClick={()=>{navigate('/about')}} className="text-gray-300 hover:text-white transition-colors font-medium cursor-pointer">
              About
            </a>
            <a onClick={()=>{navigate('/detail/0')}} className="text-gray-300 hover:text-white transition-colors font-medium cursor-pointer">
              Detail
            </a>
            <a onClick={()=>{navigate('/cart')}} className="text-gray-300 hover:text-white transition-colors font-medium cursor-pointer">
              Cart
            </a>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path='/' element={<Home shoes={shoes} setShoes={setShoes} />}></Route>
        <Route path='/detail/:id' element={<Detail shoes={shoes} />} />
        <Route path='/about' element={<About />}>
          <Route path='member' element={<div>멤버입니다.</div>} />
          <Route path='location' element={<div>위치입니다.</div>} />
        </Route>  
        <Route path='/cart' element={<Cart />}></Route>      
        <Route path="*" element={<div>페이지를 찾을 수 없습니다.</div>} />
      </Routes>

      <Footer />
      
    </div>
  )
}

export default App

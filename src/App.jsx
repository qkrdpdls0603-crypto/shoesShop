import './App.css'
import { useState } from 'react'
import data from './db/data'
import Product from './components/Product'
import { Link, Outlet, Route, Routes, useNavigate } from 'react-router-dom'
import Home from './components/Home'
import Detail from './components/Detail';

function App() {
  const [shoes, setShoes] = useState(data)
  console.log(shoes)
  const navigate = useNavigate()

  return (
    <div className="App">
      <nav className="bg-gray-900 text-white px-4 py-3 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a onClick={()=>{navigate('/')}} className="text-xl font-bold tracking-wide hover:text-gray-300 transition-colors">
            ShoesShop
          </a>

          <div className="flex space-x-6 ml-6 mr-auto">
            <a onClick={()=>{navigate('/')}} className="text-gray-300 hover:text-white transition-colors font-medium">
              Home
            </a>
            <a onClick={()=>{navigate('/about')}} className="text-gray-300 hover:text-white transition-colors font-medium">
              About
            </a>
            <a onClick={()=>{navigate('/detail/0')}} className="text-gray-300 hover:text-white transition-colors font-medium">
              Detail
            </a>
            <a onClick={()=>{navigate('/cart')}} className="text-gray-300 hover:text-white transition-colors font-medium">
              Cart
            </a>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home shoes={shoes} />} />
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
        <Route path="about" element={<div>About 페이지 <Outlet></Outlet></div>}>
          <Route path="about/member" element={<div>멤버입니다.</div>} />
          <Route path="about/location" element={<div>위치입니다.</div>} />
        </Route>
        <Route path="*" element={<div>페이지를 찾을 수 없습니다.</div>} />
      </Routes>

    </div> 
  )
}

export default App

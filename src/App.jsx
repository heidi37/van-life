import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/Vans'
import "./server"
import VanDetail from './pages/VanDetail'

function App() {

  return (
    <>
      <BrowserRouter>
      <header>
        <nav>
          <Link className='site-logo' to="/">#VanLife</Link>
          <Link to ="/about">About</Link>
          <Link to ="/vans">Vans</Link>
        </nav>
      </header>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/vans" element={<Vans />}></Route>
          <Route path="/vans/:id" element={<VanDetail />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

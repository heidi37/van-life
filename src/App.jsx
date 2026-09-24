import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import "./server"

function App() {

  return (
    <>
      <BrowserRouter>
      <header>
        <nav>
          <Link className='site-logo' to="/">#VanLife</Link>
          <Link to ="/about">About</Link>
        </nav>
      </header>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

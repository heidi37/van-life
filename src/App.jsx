import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import "./App.css"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages/Vans/Vans"
import "./server"
import VanDetail from "./pages/Vans/VanDetail"
import Layout from "./components/Layout"
import Dashboard from "./pages/Host/Dashboard"
import Income from "./pages/Host/Income"
import Reviews from "./pages/Host/Reviews"
import HostLayout from "./components/HostLayout"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/vans" element={<Vans />}></Route>
            <Route path="/vans/:id" element={<VanDetail />}></Route>
            <Route element={<HostLayout />}>
              <Route path="/host" element={<Dashboard />}></Route>
              <Route path="/host/income" element={<Income />}></Route>
              <Route path="/host/reviews" element={<Reviews />}></Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

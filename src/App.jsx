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
import HostVans from "./pages/Host/HostVans"
import HostVanDetail from "./pages/Host/HostVanDetail"
import HostVanInfo from "./pages/Host/HostVanInfo"
import HostVanPhotos from "./pages/Host/HostVanPhotos"
import HostVanPricing from "./pages/Host/HostVanPricing"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="vans" element={<Vans />}></Route>
            <Route path="vans/:id" element={<VanDetail />}></Route>
            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />}></Route>
              <Route path="income" element={<Income />}></Route>
              <Route path="reviews" element={<Reviews />}></Route>
              <Route path="vans" element={<HostVans />}></Route>
              <Route path="vans/:id" element={<HostVanDetail />}>
                <Route index element={<HostVanInfo />}></Route>
                <Route
                  path="pricing"
                  element={<HostVanPricing />}
                ></Route>
                <Route
                  path="photos"
                  element={<HostVanPhotos />}
                ></Route>
              </Route>
            </Route>
                <Route path="*" element={<NotFound />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

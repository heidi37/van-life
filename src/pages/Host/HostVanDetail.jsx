import React from "react"
import { NavLink, Link, useParams } from "react-router-dom"
import { Outlet } from "react-router-dom"

function HostVanDetail() {
  const [hostVanDetail, setHostVanDetail] = React.useState([])

  const params = useParams()

  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  }

  React.useEffect(() => {
    fetch(`/api/host/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setHostVanDetail(data.vans)
      })
  }, [params.id])

  return (
    <>
      <section>
        <Link to=".." relative="path" className="back-button">
          &larr; <span>Back to all vans</span>
        </Link>

        <div className="host-van-detail-layout-container">
          <div className="host-van-detail">
            <img src={hostVanDetail.imageUrl} />
            <div className="host-van-detail-info-text">
              <i className={`van-type van-type-${hostVanDetail.type}`}>
                {hostVanDetail.type}
              </i>
              <h3>{hostVanDetail.name}</h3>
              <h4>${hostVanDetail.price}/day</h4>
            </div>
          </div>
          <div>
            <nav className="host-van-detail-nav">
              <NavLink
                to="."
                end
                relative="path"
                style={({ isActive }) => (isActive ? activeStyles : null)}
              >
                Details
              </NavLink>

              <NavLink
                to="pricing"
                style={({ isActive }) => (isActive ? activeStyles : null)}
              >
                Pricing
              </NavLink>

              <NavLink
                to="photos"
                style={({ isActive }) => (isActive ? activeStyles : null)}
              >
                Photos
              </NavLink>
            </nav>
          </div>
          <Outlet context={{hostVanDetail}} />
        </div>
      </section>
    </>
  )
}

export default HostVanDetail

import React from "react"
import { NavLink, Link, useParams } from "react-router-dom"

function HostVanDetail() {
  const [hostVanDetail, setHostVanDetail] = React.useState([])

  const params = useParams()

  React.useEffect(() => {
    fetch(`/api/host/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setHostVanDetail(data.vans)
      })
  }, [params.id])

  return (
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
      </div>
    </section>
  )
}

export default HostVanDetail

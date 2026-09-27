import React from 'react'
import { useOutletContext } from 'react-router-dom'

function HostVanPhotos() {
  const {hostVanDetail} = useOutletContext()
  return (
        <img src={hostVanDetail.imageUrl} className="host-van-detail-image" />
    )
}

export default HostVanPhotos

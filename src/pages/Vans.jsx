import React from "react"
import Van from "./Van"

const Vans = () => {
  const [vans, SetVans] = React.useState([])

  React.useEffect(function () {
    fetch("/api/vans")
      .then((res) => res.json()) //returns regular js, takes the json out of it
      .then((data) => {
        SetVans(data.vans)
      })
  }, [])

  const vanElements = vans.map((van) => {
    return (
      <Van
        name={van.name}
        key={van.id}
        id={van.id}
        imageUrl={van.imageUrl}
        price={van.price}
        description={van.description}
        type={van.type}
      />
    )
  })

  return (
    <div className="van-list-container">
      <div className="van-list">{vanElements}</div>
    </div>
  )
}

export default Vans

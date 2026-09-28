import React from "react"
import Van from "./Van"
import { useSearchParams, Link } from "react-router-dom"


const Vans = () => {
  const [vans, SetVans] = React.useState([])

  const [searchParams, setSearchParams] = useSearchParams()

  const typeFilter = searchParams.get("type")

  React.useEffect(function () {
    fetch("/api/vans")
      .then((res) => res.json()) //returns regular js, takes the json out of it
      .then((data) => {
        SetVans(data.vans)
      })
  }, [])

  const filteredVans = typeFilter ? vans.filter((van) => van.type.toLowerCase() === typeFilter.toLowerCase()) : vans

  const vanElements = filteredVans.map((van) => {
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
      <h1>Explore our van options</h1>
      <div className="van-list-filter-buttons">
                <Link to="?type=simple" className="van-type simple">Simple</Link>
                <Link to="?type=luxury" className="van-type luxury">Luxury</Link>
                <Link to="?type=rugged" className="van-type rugged">Rugged</Link>
                <Link to="." className="van-type clear-filters">Reset</Link>
            </div>
      <div className="van-list">{vanElements}</div>
    </div>
  )
}

export default Vans

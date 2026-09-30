import React from "react"
import Van from "./Van"
import { useSearchParams } from "react-router-dom"


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

  const handleFilterChange = (key, value) => {
      setSearchParams(prevParams => {
        if (value === null){
          prevParams.delete(key)
        }
        else {
          prevParams.set(key, value)
        }
        return prevParams
      })
  }

  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list-filter-buttons">
                <button
                    onClick={() => handleFilterChange("type", "simple")}
                    className={`van-type simple ${typeFilter === "simple" ? "selected" : null}`}
                >Simple</button>
                <button
                    onClick={() => handleFilterChange("type", "luxury")}
                    className={`van-type luxury ${typeFilter === "luxury" ? "selected" : null}`}
                >Luxury</button>
                <button
                    onClick={() => handleFilterChange("type", "rugged")}
                    className={`van-type rugged ${typeFilter === "rugged" ? "selected" : null}`}
                >Rugged</button>
                { typeFilter ? (
                  <button onClick={() => handleFilterChange("type", null)} className="van-type clear-filters">Clear Filters</button>
                  ) : null}
            </div>
      <div className="van-list">{vanElements}</div>
    </div>
  )
}

export default Vans

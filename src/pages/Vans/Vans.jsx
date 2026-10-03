import React from "react"
import Van from "./Van"
import { useSearchParams } from "react-router-dom"
import { getVans } from "../../api"



const Vans = () => {
  const [vans, SetVans] = React.useState([])
  const [searchParams, setSearchParams] = useSearchParams()
  const [loading, setLoading] = React.useState(false)
  const [error, setError] =React.useState(null)

  const typeFilter = searchParams.get("type")

  React.useEffect(function () {
    async function loadVans() {
      setLoading(true)
      try {
      const data = await getVans()
      SetVans(data)
      } catch(err) {
        setError(err)
      } finally {
      setLoading(false)
      }
    }
    loadVans()
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
        searchParams={searchParams}
        typeFilter={typeFilter}
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

  if (loading) {
    return <h1 aria-live="polite">Loading...</h1>
  } 

  if (error) {
    return <h1 aria-live="assertive">There was an error: {error.message}</h1>
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

import React from 'react'

const Vans = () => {

React.useEffect(function() {
  fetch("/api/vans")
  .then(res => res.json())
  .then(data => console.log(data))
}, [])

  return (
    <div>
      <h1>Vans page goes here 🚐</h1>
    </div>
  )
}

export default Vans

import React from 'react'
import Van from './Van'


const Vans = () => {

const [vans, SetVans] = React.useState([])

React.useEffect(function() {
  fetch("/api/vans")
  .then(res => res.json())
  .then(data => {
    console.log(data.vans)
    SetVans(data.vans)
  })
}, [])

const vanElements = vans.map(van => {
      return <Van name={van.name} key={van.id} imageUrl={van.imageUrl} price={van.price} description={van.description} type={van.type} />
    })

  return (
    <div>
      {vanElements}
    </div>
  )
}

export default Vans

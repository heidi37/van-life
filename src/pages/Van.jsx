import { Link } from "react-router-dom"

export default function Van({name, imageUrl, price, description, type, id}){
  return (
    <div key={id} className="van-tile">
      <Link to={`/vans/${id}`}>
      <img src={imageUrl} alt={`Image of ${name}`}/>
            <div className="van-info">
                <h3>{name}</h3>
                <p>${price}<span>/day</span></p>
            </div>
            <i className={`van-type ${type} selected`}>{type}</i>
      </Link>
    </div>
  )
}
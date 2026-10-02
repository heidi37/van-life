import { Link } from "react-router-dom"

export default function Van({name, imageUrl, price, type, id, searchParams, typeFilter}){
  return (
    <div key={id} className="van-tile">
      <Link to={id} state={{ search: `?${searchParams.toString()}`, type:typeFilter }}>
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
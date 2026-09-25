export default function Van({name, imageUrl, price, description, type, id}){
  return (
    <div key={id} className="van-tile">
      <img src={imageUrl} />
            <div className="van-info">
                <h3>{name}</h3>
                <p>${price}<span>/day</span></p>
            </div>
            <i className={`van-type ${type} selected`}>{type}</i>
    </div>
  )
}
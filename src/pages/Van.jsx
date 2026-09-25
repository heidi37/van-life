export default function Van({name, imageUrl, price, description, type}){
  return (
    <div>
      <h1>{name}</h1>
      <img src={imageUrl} alt={name} width="150"/>
      <p><span>${price}</span>/per day</p>
      <p>{description}</p>
      <button>{type}</button>
    </div>
  )
}
// Write your code here.
import './index.css'

const Card = props => {
  const {cardData} = props
  const {title, description, imgUrl, className} = cardData
  return (
    <li className={`${className} list-container`}>
      <div className={`${className} card-container`}>
        <h1 className="card-title">{title}</h1>
        <p className="card-description">{description}</p>
        <div className="img-container">
          <img src={imgUrl} className="card-img" alt={title} />
        </div>
      </div>
    </li>
  )
}

export default Card

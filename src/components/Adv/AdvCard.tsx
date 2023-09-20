// Css
import './Adv.css'

type AdvProps = {
  image: string
  title: string
  text: string
}

const AdvCard = ({ image, title, text }: AdvProps) => {
  return (
    <div className="adv_card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  )
}
export default AdvCard

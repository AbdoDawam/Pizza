// Images
import pizza1 from '../../assets/pizza.png'
import pizza2 from '../../assets/pizza2.png'

// Css
import './SpecialHeading.css'

const SpecialHeading = ({ title }: { title: string }) => {
  return (
    <div className="special">
      <img src={pizza2} alt="" className="pizza_one" />
      <h1>{title}</h1>
      <img src={pizza1} alt="" className="pizza_two" />
    </div>
  )
}
export default SpecialHeading

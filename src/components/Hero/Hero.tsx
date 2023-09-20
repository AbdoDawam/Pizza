// Css
import './Hero.css'

// Images
import hero_image from '../../assets/hero-image.png'
import adv_top from '../../assets/adv-top.png'
const Hero = () => {
  return (
    <section className="hero">
      <img src={hero_image} alt="Pizza Image" className="pizza_image" />
      <img src={adv_top} alt="Decoration" className="decor" />
    </section>
  )
}
export default Hero

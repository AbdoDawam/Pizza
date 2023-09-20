// Css
import './Navbar.css'

// Icons
import { BiSolidDoorOpen } from 'react-icons/bi'
import { BiMenuAltRight } from 'react-icons/bi'
import { SlMustache } from 'react-icons/sl'

// images
import dish from '../../assets/dish.png'

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <ul>
          <li>
            <a href="#" className="sign">
              Sign <BiSolidDoorOpen />
            </a>
          </li>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Meals</a>
          </li>
        </ul>
        <h1 className="heading">
          <span>
            <SlMustache />
          </span>
          Pizza
        </h1>
        <ul>
          <li>
            <a href="#">Offers</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#" className="dish">
              Dish
              <img src={dish} alt="Image of Dish" className="w-14" />
            </a>
          </li>
        </ul>
        <span className=" block md:hidden text-3xl">
          <BiMenuAltRight />
        </span>
      </div>
    </nav>
  )
}
export default Navbar

// Css
import './Products.css'

// Components
import SpecialHeading from '../SpecialHeading/SpecialHeading'

// Images
import product1 from '../../assets/product1.png'
import product2 from '../../assets/product2.png'
import product3 from '../../assets/product3.png'
import product4 from '../../assets/product4.png'
import adv_bottom from '../../assets/adv-bottom.png'
import ProductCard from './ProductCard'

// Types
export type ProductsProps = {
  id: number
  image: string
  title: string
  price: number
}[]

const products: ProductsProps = [
  {
    id: 1,
    image: product1,
    title: 'CHEESE LOVERS',
    price: 24.99,
  },
  {
    id: 2,
    image: product2,
    title: 'BISMARCK',
    price: 24.99,
  },
  {
    id: 3,
    image: product3,
    title: 'FIORI DI ZUCCA',
    price: 24.99,
  },
  {
    id: 4,
    image: product4,
    title: 'VALDOSTANA',
    price: 24.99,
  },
  {
    id: 5,
    image: product3,
    title: 'FIORI DI ZUCCA',
    price: 24.99,
  },
  {
    id: 6,
    image: product4,
    title: 'VALDOSTANA',
    price: 24.99,
  },
]

const Products = () => {
  return (
    <section className="products">
      <img src={adv_bottom} alt="Decoration" />
      <SpecialHeading title="Most Popular" />
      <div className="container">
        {products.map((product) => {
          return <ProductCard key={product.id} {...product} />
        })}
      </div>
    </section>
  )
}
export default Products

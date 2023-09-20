// Css
import './Products.css'

type ProductProps = {
  image: string
  title: string
  price: number
}

const ProductCard = ({ image, title, price }: ProductProps) => {
  return (
    <div className="product_card">
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <p className="price">${price}</p>
    </div>
  )
}
export default ProductCard

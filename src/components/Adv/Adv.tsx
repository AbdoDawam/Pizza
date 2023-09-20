import React from 'react'
// Css
import './Adv.css'

// Images
import order_1 from '../../assets/order-1.png'
import order_2 from '../../assets/order-2.png'
import order_3 from '../../assets/order-3.png'

// Comp
import AdvCard from './AdvCard'

type ItemsProps = {
  id: number
  image: string
  title: string
  text: string
}[]

const items: ItemsProps = [
  {
    id: 1,
    image: order_1,
    title: 'Order Your Food',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
  },
  {
    id: 2,
    image: order_2,
    title: 'Order Your Food',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
  },
  {
    id: 3,
    image: order_3,
    title: 'Order Your Food',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
  },
]

const Adv = () => {
  return (
    <section className="adv">
      <div className="container">
        {items.map((item) => {
          return <AdvCard key={item.id} {...item} />
        })}
      </div>
    </section>
  )
}
export default Adv

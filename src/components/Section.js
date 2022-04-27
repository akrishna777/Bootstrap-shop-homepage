import React from 'react'
import Card from './Card'
import Star from './Star'

const Section = ({ cart, setCart }) => {
  const cardData = [
    {
      title: 'Fancy Product',
      rating: '',
      oldPrice: '',
      newPrice: '$40.00 - $80.00',
      sale: false,
      addToCart: false,
      button: 'View options',
    },
    {
      title: 'Special Item',
      rating: [<Star />, <Star />, <Star />, <Star />, <Star />],
      oldPrice: '$20.00',
      newPrice: '$18.00',
      sale: true,
      addToCart: true,
      button: 'Add to cart',
    },
    {
      title: 'Sale Item',
      rating: '',
      oldPrice: '$50.00',
      newPrice: '$25.00',
      sale: true,
      addToCart: true,
      button: 'Add to cart',
    },
    {
      title: 'Popular Item',
      rating: [<Star />, <Star />, <Star />, <Star />, <Star />],
      oldPrice: '',
      newPrice: '$40.00',
      sale: false,
      addToCart: true,
      button: 'Add to cart',
    },
    {
      title: 'Sale Item',
      rating: '',
      oldPrice: '$50.00',
      newPrice: '$25.00',
      sale: true,
      addToCart: true,
      button: 'Add to cart',
    },
    {
      title: 'Fancy Product',
      rating: '',
      oldPrice: '',
      newPrice: '$120.00 - $280.00',
      sale: false,
      addToCart: false,
      button: 'View options',
    },
    {
      title: 'Special Item',
      rating: [<Star />, <Star />, <Star />, <Star />, <Star />],
      oldPrice: '$20.00',
      newPrice: '$18.00',
      sale: true,
      addToCart: true,
      button: 'Add to cart',
    },
    {
      title: 'Popular Item',
      rating: [<Star />, <Star />, <Star />, <Star />, <Star />],
      oldPrice: '',
      newPrice: '$40.00',
      sale: false,
      addToCart: true,
      button: 'Add to cart',
    },
  ]

  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {cardData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              rating={card.rating}
              oldPrice={card.oldPrice}
              newPrice={card.newPrice}
              sale={card.sale}
              button={card.button}
              cart={cart}
              setCart={setCart}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Section

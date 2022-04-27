import React, { useState } from 'react'
import Star from './Star'

const Card = ({
  cart,
  setCart,
  title,
  rating,
  oldPrice,
  newPrice,
  sale,
  addToCart,
  button,
  card,
  handleReset,
}) => {
  const [isActive, setIsActive] = useState(true)

  const handleCart = (card) => {
    setCart((prevCart) => prevCart + 1)
    console.log(card)
    setIsActive(false)
  }

  let classes = 'btn btn-outline-dark mt-auto'
  classes += !isActive ? ' disabled' : ''

  return (
    <div class="col mb-5">
      <div class="card h-100">
        {/* <!-- Sale badge--> */}
        {sale && (
          <div
            class="badge bg-dark text-white position-absolute"
            style={{ top: '0.5rem', right: '0.5rem' }}
          >
            Sale
          </div>
        )}

        {/* <!-- Product image--> */}
        <img
          class="card-img-top"
          src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
          alt="..."
        />
        {/* <!-- Product details--> */}
        <div class="card-body p-4">
          <div class="text-center">
            {/* <!-- Product name--> */}
            <h5 class="fw-bolder">{title}</h5>
            {/* <!-- Product reviews--> */}
            <div class="d-flex justify-content-center small text-warning mb-2">
              {rating}
            </div>
            {/* <!-- Product price--> */}
            {oldPrice ? (
              <>
                <span class="text-muted text-decoration-line-through">
                  {oldPrice}
                </span>
                &nbsp;
                {newPrice}
              </>
            ) : (
              <>{newPrice}</>
            )}
          </div>
        </div>
        {/* <!-- Product actions--> */}
        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div class="text-center">
            <a class={classes} href="#" onClick={() => handleCart(card)}>
              {button}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card

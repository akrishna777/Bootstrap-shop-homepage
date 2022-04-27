import React, { useState } from 'react'

const Card = ({
  cart,
  setCart,
  title,
  rating,
  oldPrice,
  newPrice,
  sale,
  button,
}) => {
  const handleAddToCart = () => {
    setCart((prevCart) => prevCart + 1)
    setRemoveFromCart(true)
  }

  const handleRemoveFromCart = () => {
    setCart((prevCart) => prevCart - 1)
    setRemoveFromCart(false)
  }

  const [removeFromCart, setRemoveFromCart] = useState(false)

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
            {removeFromCart ? (
              <a
                class="btn btn-outline-dark mt-auto"
                href="#"
                onClick={() => handleRemoveFromCart()}
              >
                Remove from cart
              </a>
            ) : (
              <a
                class="btn btn-outline-dark mt-auto"
                href="#"
                onClick={() => handleAddToCart()}
              >
                {button}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card

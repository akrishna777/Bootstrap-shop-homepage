import React, { useState } from 'react'

const Navbar = ({ cart, setCart }) => {
  let [collapse, setCollapse] = useState(true)
  let [navButton, setNavButton] = useState(true)
  let [ariaExpanded, setAriaExpanded] = useState(false)

  const handleExpandNavbar = () => {
    setCollapse((prevCollapse) => !prevCollapse)
    setNavButton((prevnavButton) => !prevnavButton)
    setAriaExpanded((prevAriaExpanded) => !prevAriaExpanded)
  }

  let navbarClass = ''
  navbarClass += collapse
    ? 'navbar-collapse collapse'
    : 'navbar-collapse collapse show'

  let navButtonClass = ''
  navButtonClass += navButton ? 'navbar-toggler collapsed' : 'navbar-toggler'

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container px-4 px-lg-5">
        <a class="navbar-brand" href="#!">
          Start Bootstrap
        </a>
        <button
          class={navButtonClass}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded={ariaExpanded}
          aria-label="Toggle navigation"
          onClick={handleExpandNavbar}
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class={navbarClass} id="navbarSupportedContent" style={{}}>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#!">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#!">
                About
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                id="navbarDropdown"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Shop
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a class="dropdown-item" href="#!">
                    All Products
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="#!">
                    Popular Items
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#!">
                    New Arrivals
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <form
            class="d-flex"
            wtx-context="B8B7EAD4-BB8A-421F-8A97-53D8D69EE11D"
          >
            <button class="btn btn-outline-dark" type="submit">
              <i class="bi-cart-fill me-1"></i>
              Cart
              <span class="badge bg-dark text-white ms-1 rounded-pill">
                {cart}
              </span>
            </button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

import React from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'
import { BsCart2 } from "react-icons/bs";

function Navbar() {
  return (
    <div className='Navbar'>
      <div className="container nav-container">
        <div className="nav-left">
          <ul className='link-group '>
            <li className='hover-link'>
              <Link to="/products?category=comics">Comic</Link>

            </li>
            <li className='hover-link'>
              <Link to="/products?category=shows">Tv Shows</Link>
            </li>
            <li className='hover-link'>
              <Link to="/products?category=sports">Sports</Link>
            </li>

          </ul>
        </div>
        <div className="nav-center">
          <Link to="/">
            <h1 className='banner'>Posterz.</h1>
          </Link>
        </div>
        <div className="nav-right">
          <div className="nav-cart">
            <BsCart2 className='icon' />
            <span className='cart-count center'> 99+</span>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Navbar

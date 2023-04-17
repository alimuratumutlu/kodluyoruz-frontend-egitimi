import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai';



import "./Header.css"

export default function Header() {
  return (
    <div className='header-container'>
        <span className='logo' >e-Shop</span>
        <span className='page-list'> Sayfalar </span>
        <span className='cart-block'> <AiOutlineShoppingCart size="18" /> 0 </span>
    </div>
  )
}

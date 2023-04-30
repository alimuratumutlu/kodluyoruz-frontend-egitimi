import React, { useMemo, useState } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai';

import "./Header.css"

export default function Header({ cartItems }) {
  const [showItemList, setShowItemList] = useState(false)

  const handleToggleList = () => {
    setShowItemList(showItemList => !showItemList)
  }

  return (
    <>
      <div className='header-container'>
        <span className='logo' >e-Shop</span>
        <span className='page-list'> Sayfalar </span>
        <span onClick={handleToggleList} className='cart-block'> <AiOutlineShoppingCart size="18" /> {cartItems.length} </span>
      </div>
      {
        showItemList && (<div className='cart-items-container' >
          {
            cartItems?.map(item => (
              <div className='cart-item'>{item}</div>
            ))
          }
        </div>)
      }
    </>
  )
}

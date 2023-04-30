import React, { useMemo, useState } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai';

import "./Header.css"

export default function Header({ cartItems }) {
  const [showItemList, setShowItemList] = useState(false)

  const handleToggleList = () => {
    setShowItemList(showItemList => !showItemList)
  }

  const cartItemsCount = useMemo(() => {
    let count = 0;
    cartItems.map((item) => count = count + item.count)
    return count;
  }, [cartItems])

  return (
    <>
      <div className='header-container'>
        <span className='logo' >e-Shop</span>
        <span className='page-list'> Sayfalar </span>
        <span onClick={handleToggleList} className='cart-block'> <AiOutlineShoppingCart size="18" /> {cartItemsCount} </span>
      </div>
      {
        showItemList && (<div className='cart-items-container' >
          {
            cartItems?.map(item => (
              <div className='cart-item'>{item.name} <span className='item-count'>{item.count}</span></div>
            ))
          }
        </div>)
      }
    </>
  )
}

import React, { useState } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai';

import { useSelector } from 'react-redux'

import "./Header.css"
import CartList from '../../molecules/CartList/CartList';

export default function Header() {
  const cartItems = useSelector(state => state.cartList.cartItems)

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
        showItemList && (<CartList />)
      }
    </>
  )
}

import React from 'react'

import "./Product.css"
import Button from '../../atoms/Button/Button'
import Image from '../../atoms/Image/Image'

import { useSelector, useDispatch } from 'react-redux'
import { updateCartItems } from "../CartList/CartListSlice"


export default function Product({ urunAdi, aciklama, fiyat, kategori, urunResmi }) {

  const dispatch = useDispatch()

  const cartItems = useSelector(state => state.cartList.cartItems)


  function handleAddToCart(item) {
    const isExist = cartItems.find(element => element.title === item.title);

    if (isExist) {
      dispatch(updateCartItems(cartItems.map(element => element.title === item.title ? { ...element, count: element.count + 1 } : element))
      )
    } else {
      dispatch(updateCartItems([...cartItems, { ...item, count: 1 }]))
    }
  }


  return (
    <div className='product-card-container'>
      <div className='info-section' >
        <span className='product-cateogry' >{kategori}</span>
        <Image imageAlt={urunAdi} imagePath={urunResmi} />
        <div className='product-title'>{urunAdi}</div>
        <div className='product-description' >{aciklama}</div>
      </div>
      <Button onClick={() => handleAddToCart({ title: urunAdi })} butonMetni={"Add To Cart"} />
    </div>
  )
}

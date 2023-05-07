import React from 'react'

import { useSelector } from 'react-redux'

export default function CartList() {

    const cartItems = useSelector(state => state.cartList.cartItems)

    return (
        <div className='cart-items-container' >
            {
                cartItems?.map(item => (
                    <div className='cart-item'>{item.title} <span className='item-count'>{item.count}</span></div>
                ))
            }
        </div>
    )
}

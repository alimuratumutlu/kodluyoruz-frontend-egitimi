import React from 'react'
import { Text, Paper } from '@mantine/core';

import { useSelector } from 'react-redux'

import "./CartList.css"

export default function CartList() {

    const cartItems = useSelector(state => state.cartList.cartItems)

    return (
        <Paper shadow="sm" p="md" className='cart-items-container' >
            {
                cartItems?.map(item => (
                    <Text>{item.title} - {item.count}</Text>
                ))
            }
        </Paper>
    )
}

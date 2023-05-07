import { createSlice } from "@reduxjs/toolkit";

export const cartListSlice = createSlice({
    name: "cartlist",
    initialState: {
        cartItems: []
    },
    reducers: {
        updateCartItems: (state, action) => {
            state.cartItems = action.payload
        }
    }
})

export const { updateCartItems } = cartListSlice.actions

export default cartListSlice.reducer
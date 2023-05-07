import { configureStore } from "@reduxjs/toolkit";

import cartListReducer from "../components/molecules/CartList/CartListSlice";

export default configureStore({
    reducer: {
        cartList: cartListReducer
    }
})
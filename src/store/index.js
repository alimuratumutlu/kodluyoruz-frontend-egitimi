import { configureStore } from "@reduxjs/toolkit";

import cartListReducer from "../components/molecules/CartList/CartListSlice";
import productsReducer from "../components/organisms/Products/ProductSlice";
import filterReducer from "../components/organisms/Filter/FilterSlice"

export default configureStore({
    reducer: {
        cartList: cartListReducer,
        productList: productsReducer,
        filterList: filterReducer
    }
})
import { createSlice } from "@reduxjs/toolkit";

// 1 - createSlice yardımıyla slice oluşturma: productsSlide

// 2 - State güncelleyen reducer'ları slideAdi.actions ile export etme

// 3 - İlk adımda oluşturduğumuz slideAdi.reducer default olarak export etme

export const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        productCount: 0
    },
    reducers: {
        updateProducts: (state, action) => {
            state.products = action.payload
            state.productCount = action.payload.length
        }
    }
}
)

export const { updateProducts } = productsSlice.actions

export default productsSlice.reducer
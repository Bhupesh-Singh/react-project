import { configureStore } from "@reduxjs/toolkit";
import itemListReducer from "../Slices/itemListSlice";
import cartListReducer from "../Slices/cartListSlice"

export default configureStore({
    reducer: {
        itemList: itemListReducer,
        cartList: cartListReducer
    }
});
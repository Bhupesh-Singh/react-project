import { createSlice } from "@reduxjs/toolkit";

export const cartList = createSlice({
    name: 'cartList',
    initialState: [],
    reducers: {
        addItemToCart: (state, action) => {
            state.push(action.payload)
        },

        removeItemFromCart: (state, action) => {
            return state.filter(item => item.id !== action.payload.id)
        }
    }
});

export const {addItemToCart, removeItemFromCart} = cartList.actions;
export default cartList.reducer;
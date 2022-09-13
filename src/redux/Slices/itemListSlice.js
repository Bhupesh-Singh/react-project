import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
   SUCCESS: 'success',
   ERROR: 'error',
   LOADING: 'loading'
});

export const itemList = createSlice({
    name: 'itemList',
    initialState: {
        data: [],
        status: STATUSES.IDLE
    },
    reducers: {
        deleteItem: (state, action) => {
            return {
                ...state,
                data: state.data.filter(item => item.id !== action.payload.id)
            }
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchItemList.pending, (state) => {
            return {
                ...state,
                status: STATUSES.LOADING
            }
        })
        .addCase(fetchItemList.fulfilled, (state, action) => {
            return {
                status: STATUSES.SUCCESS,
                data: action.payload
            }
        })
        .addCase(fetchItemList.rejected, (state) => {
            return {
                ...state,
                status: STATUSES.ERROR
            }
        })
    }
});

// thunk middleware for data fetching

export const fetchItemList = createAsyncThunk('fetchItemList', async () => {
    const dataApi = 'https://dummyjson.com/products';
    const response = await fetch(dataApi);
    const {products} = await response.json();
    return products;
});

export const {deleteItem} = itemList.actions;
export default itemList.reducer;

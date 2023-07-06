import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../api/api";

const ordersSlice = createSlice({
    name: 'ordersSlice',
    initialState: {
        orders: {
            ordersData: [],
            currentPageNumber: 1,
            totalPageNumber: 0,
        }
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder
        .addCase(getListOrders.fulfilled, (state, action) => {
            state.orders.ordersData = action.payload.lists;
            state.orders.totalPageNumber = action.payload.pageNumber;
        })
        .addCase(getListOrders.rejected, (state, action) => {
            console.log(action);
        }) 
        .addCase(updateStatusOrder.rejected, (state, action) => {
            console.log(action);
        }) 
    }
})

export default ordersSlice;

export const getListOrders = createAsyncThunk(
    "orders/orders-shop",
    async(_, {getState}) => {
        const state = getState();
        const pageNumber = state.ordersSlice.orders;
        try{
            const res = await api.get(`/ship/orders`, {params: {pageNumber: pageNumber.currentPageNumber}});
            const data = res.data;
            return data;
        }catch(error){
            throw error;
        }
    }
);

export const updateStatusOrder = createAsyncThunk(
    "orders/orders-shop/update-status",
    async(changeStatus) => {
        try{
            const res = await api.put(`ship/orders?token=tothichcau`, changeStatus);
            const data = res.data;
            return data;
        }catch(error) {
            throw error;
        }
    } 
)

export const ordersSliceSelector = state => state.ordersSlice.orders;
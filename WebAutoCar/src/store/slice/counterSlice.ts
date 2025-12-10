import { createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
    name:"counter",
    initialState:{
        value:0
    },
    reducers:{
        increment: (state,action) => {
            state.value += action.payload;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        addByAmount: (state, action) => {
            state.value += action.payload;
        },
    }
})


export const { increment, decrement, addByAmount } = counterSlice.actions;
export default counterSlice.reducer;
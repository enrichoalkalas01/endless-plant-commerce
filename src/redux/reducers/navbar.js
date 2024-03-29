import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
    cartStatus: false,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
        SetCartStatus: (state, action) => {
            state.cartStatus = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { SetCartStatus, increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer
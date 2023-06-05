import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: 3,
}

export const counterSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increment: (state) => {
      state.cart += 1
    },

    empty: (state)=>{
      state.cart = 0
    },

    decrement: (state) => {
      state.cart -= 1
    },

    incrementByAmount: (state, action) => {
      state.cart += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer
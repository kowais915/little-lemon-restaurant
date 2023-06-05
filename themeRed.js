import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  bodyColor:  '#fff',
  navColor: '#38AB51',
  textColor: '#000000'
}

export const counterSlice = createSlice({
  name: 'toggle',
  initialState,
  reducers: {
    toggle: (state) => {
      state.textColor = '#fff',
      state.navColor = '#000',
      state.bodyColor = '#000'
      
    },

   

  
  },
})

// Action creators are generated for each case reducer function
export const { toggle } = counterSlice.actions

export default counterSlice.reducer
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  color:'',
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
   
    Changecolor: (state, action) => {
      state.color = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { Changecolor} = themeSlice.actions

export default themeSlice.reducer
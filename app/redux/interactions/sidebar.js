import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  information: false,
}

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    turnoff: (state) => {
      state.information = false
    },
    turnon: (state) => {
        state.information = true
    }
}

})

export const {turnoff,turnon} = sidebarSlice.actions

export default sidebarSlice.reducer
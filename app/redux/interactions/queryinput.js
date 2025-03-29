import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: "",
}

export const queryinputSlice = createSlice({
  name: 'queryinput',
  initialState,
  reducers: {
    setquery: (state,action) => {
      state.value = action.payload
    },
    empty: (state) => {
        state.value = ""
    }
}

})

export const {setquery,empty} = queryinputSlice.actions

export default queryinputSlice.reducer
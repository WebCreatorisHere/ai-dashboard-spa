import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const resultSlice = createSlice({
  name: 'resultindicator',
  initialState,
  reducers: {
    showresults: (state) => {
      state.value = true
    },
    hideresults: (state) => {
        state.value = false
    }
}

})

export const {showresults,hideresults} = resultSlice.actions

export default resultSlice.reducer
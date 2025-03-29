import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  queries: [
  { query: "What were the sales yesterday?", date: 1611651045123 },

  { query: "Show me today's schedule", date: 1711755045123 },
  { query: "What's the weather like in New York?", date: 1711751045123 },
  { query: "How much revenue we make yesterday?", date: 1611651045123 }, 
  { query: "What are the support tickets today?", date: 1711923045123 }
]
}

export const historySlice = createSlice({
  name: 'queryhistory',
  initialState,
  reducers: {
    addquery: (state,action) => {
      
      state.queries.push({query:action.payload,date:Date.now()})
    }
}

})

export const {addquery} = historySlice.actions

export default historySlice.reducer
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  queries: [
    "What was the total revenue for the last quarter?",
    "Show me a trend analysis of customer churn over the past year.",
    "Which product had the highest sales in the last month?",
    "Compare user engagement for the past 6 months.",
    "What are the top 5 performing marketing campaigns this year?",
    "Show customer sentiment analysis for recent product reviews.",
    "How does website traffic compare between mobile and desktop users?",
    "Which region had the highest conversion rate last week?",
    "Identify anomalies in sales data for the past 3 months.",
    "What is the predicted demand for our products next quarter?",
    "Show me a breakdown of customer acquisition sources.",
    "Which factors contribute most to customer churn?",
    "How does user engagement correlate with time spent on site?",
    "Provide a summary of social media mentions in the last 30 days.",
    "What are the key topics in customer support tickets?"
  ],
}

export const suggestionSlice = createSlice({
  name: 'querysuggestions',
  initialState
})

// Action creators are generated for each case reducer function

export default suggestionSlice.reducer
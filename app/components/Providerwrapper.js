"use client"
import { Provider } from 'react-redux'
import { store } from '../redux/store'

const Providerwrapper = ({children}) => {
  return (
    <Provider store={store}>
      
      {children}
      </Provider>
  )
}

export default Providerwrapper
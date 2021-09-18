import React, {createContext, useReducer} from 'react'
import AppReducer from '../context/AppReducer'

const initialState = {
  transactions: [
    {id: 1, text: 'Flower', amount: 5500},
    {id: 2, text: 'Salary', amount: -40},
    {id: 3, text: 'Book', amount: -430},
    {id: 4, text: 'Tennis', amount: 150},  
  ]
}
  

//Create context
export const GlobalContext = createContext(initialState)

//Provider component

export const GlobalProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)
  // Actions
function deleteTransaction(id) {
  dispatch({
    type: 'DELETE_TRANSACTION',
    payload: id
  })
}
function addTransaction(newTransaction) {
  dispatch({
    type: 'ADD_TRANSACTION',
    payload: newTransaction
  })
}

  return (<GlobalContext.Provider value={{transactions:state.transactions, deleteTransaction, addTransaction}}>
      {children}
  </GlobalContext.Provider>)
}
  

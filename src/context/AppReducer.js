export default (state, action) => {
  switch (action.type) {
    case 'ADD_TRANSACTION':
      
      return { ...state, 
        transactions:[action.payload,...state.transactions]
      }
    case 'DELETE_TRANSACTION':
      return {...state, transactions: state.transactions.filter((item) => {
        return item.id != action.payload
      })};
    default:
      return state
  }
}
const contextReducer = (state , action) => {
  
    let transactions;
    
    switch (action.type) {
        case 'DELETE_TRANSACTION':
            transactions = state.filter((t) => t.id !== action.payload);
            // Here payload is the id of the transaction
            return transactions;
        case 'ADD_TRANSACTION':
            transactions = [action.payload, ...state];
            return transactions;
        default:
            return state;
    }
    

}

export default contextReducer;
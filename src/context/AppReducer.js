export default (state, action) => {
    switch(action.type) {
        case 'DELETE_TRANSACTION':
            return{
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }

        //... is called the spread operator and it takes all the current values out of the preceding parameter and 'spreads' them out. e.g. numbers = [1, 2, 3], ...numbers = 1 2 3
        case 'ADD_TRANSACTION':
            return{
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
        default:
            return state;
    }
}
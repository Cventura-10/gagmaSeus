// Define initial state
const initialState = {
    orders: [],
    loading: false,
    error: null,
};

// Define action types
const FETCH_SALES_ORDERS_BEGIN = 'FETCH_SALES_ORDERS_BEGIN';
const FETCH_SALES_ORDERS_SUCCESS = 'FETCH_SALES_ORDERS_SUCCESS';
const FETCH_SALES_ORDERS_FAILURE = 'FETCH_SALES_ORDERS_FAILURE';
const ADD_SALES_ORDER = 'ADD_SALES_ORDER';

// Reducer function
function salesOrdersReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_SALES_ORDERS_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FETCH_SALES_ORDERS_SUCCESS:
            return {
                ...state,
                loading: false,
                orders: action.payload.orders
            };
        case FETCH_SALES_ORDERS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                orders: []
            };
        case ADD_SALES_ORDER:
            return {
                ...state,
                orders: [...state.orders, action.payload.order]
            };
        default:
            return state;
    }
}

export default salesOrdersReducer;

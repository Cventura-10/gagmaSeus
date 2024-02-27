const initialState = {
    liabilities: [],
    loading: false,
    error: null,
};

const FETCH_LIABILITIES_BEGIN = 'FETCH_LIABILITIES_BEGIN';
const FETCH_LIABILITIES_SUCCESS = 'FETCH_LIABILITIES_SUCCESS';
const FETCH_LIABILITIES_FAILURE = 'FETCH_LIABILITIES_FAILURE';
const ADJUST_LIABILITY = 'ADJUST_LIABILITY';

function liabilitiesReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_LIABILITIES_BEGIN:
            return {
                ...state,
                loading: true
            };
        case FETCH_LIABILITIES_SUCCESS:
            return {
                ...state,
                loading: false,
                liabilities: action.payload.liabilities
            };
        case FETCH_LIABILITIES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        case ADJUST_LIABILITY:
            // Example: Adjust liability by id
            const updatedLiabilities = state.liabilities.map(liability => 
                liability.id === action.payload.id ? {...liability, value: liability.value + action.payload.adjustment} : liability
            );
            return {
                ...state,
                liabilities: updatedLiabilities
            };
        default:
            return state;
    }
}

export default liabilitiesReducer;

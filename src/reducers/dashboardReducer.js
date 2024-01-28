import {
  FETCH_SALES_DATA_SUCCESS,
  FETCH_INVENTORY_DATA_SUCCESS,
  FETCH_PROFIT_LOSS_DATA_SUCCESS,
  FETCH_SALES_DATA_FAILURE,
  FETCH_INVENTORY_DATA_FAILURE,
  FETCH_PROFIT_LOSS_DATA_FAILURE,
} from '../actions/dashboardActions';

export const initialState = {
  salesData: { /* Add your sample sales data here */ },
  inventoryData: { /* Add your sample inventory data here */ },
  profitLossData: { /* Add your sample profit/loss data here */ },
  error: null,
};

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SALES_DATA_SUCCESS:
      return {
        ...state,
        salesData: action.payload,
        error: null,
      };
    case FETCH_INVENTORY_DATA_SUCCESS:
      return {
        ...state,
        inventoryData: action.payload,
        error: null,
      };
    case FETCH_PROFIT_LOSS_DATA_SUCCESS:
      return {
        ...state,
        profitLossData: action.payload,
        error: null,
      };
    case FETCH_SALES_DATA_FAILURE:
    case FETCH_INVENTORY_DATA_FAILURE:
    case FETCH_PROFIT_LOSS_DATA_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default dashboardReducer;

import * as api from '../api/dashboardApi';

export const FETCH_SALES_DATA_SUCCESS = 'FETCH_SALES_DATA_SUCCESS';
export const FETCH_INVENTORY_DATA_SUCCESS = 'FETCH_INVENTORY_DATA_SUCCESS';
export const FETCH_PROFIT_LOSS_DATA_SUCCESS = 'FETCH_PROFIT_LOSS_DATA_SUCCESS';
export const FETCH_SALES_DATA_FAILURE = 'FETCH_SALES_DATA_FAILURE';
export const FETCH_INVENTORY_DATA_FAILURE = 'FETCH_INVENTORY_DATA_FAILURE';
export const FETCH_PROFIT_LOSS_DATA_FAILURE = 'FETCH_PROFIT_LOSS_DATA_FAILURE';
export const ADD_SALES_DATA_SUCCESS = 'ADD_SALES_DATA_SUCCESS';
export const ADD_SALES_DATA_FAILURE = 'ADD_SALES_DATA_FAILURE';

export const fetchSalesData = () => async (dispatch) => {
  try {
    const response = await api.fetchSalesData();
    const { totalRevenue, monthlyData } = response;

    dispatch({
      type: FETCH_SALES_DATA_SUCCESS,
      payload: { totalRevenue, monthlyData },
    });
  } catch (error) {
    console.error('Error fetching sales data:', error);
    dispatch({
      type: FETCH_SALES_DATA_FAILURE,
      payload: error.message,
    });
  }
};

export const fetchInventoryData = () => async (dispatch) => {
  try {
    const response = await api.fetchInventoryData();
    const { totalItems } = response;

    dispatch({
      type: FETCH_INVENTORY_DATA_SUCCESS,
      payload: { totalItems },
    });
  } catch (error) {
    console.error('Error fetching inventory data:', error);
    dispatch({
      type: FETCH_INVENTORY_DATA_FAILURE,
      payload: error.message,
    });
  }
};

export const fetchProfitLossData = () => async (dispatch) => {
  try {
    const response = await api.fetchProfitLossData();
    const { netProfit } = response;

    dispatch({
      type: FETCH_PROFIT_LOSS_DATA_SUCCESS,
      payload: { netProfit },
    });
  } catch (error) {
    console.error('Error fetching profit/loss data:', error);
    dispatch({
      type: FETCH_PROFIT_LOSS_DATA_FAILURE,
      payload: error.message,
    });
  }
};

export const addSalesData = (newSaleAmount) => async (dispatch) => {
  try {
    const response = await api.addSalesData(newSaleAmount);

    dispatch({
      type: ADD_SALES_DATA_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    console.error('Error adding sales data:', error);

    dispatch({
      type: ADD_SALES_DATA_FAILURE,
      payload: error.message,
    });
  }
};

// src/store/actions/AccountingActions.js

// Actions Types
export const ActionTypes = {
  SET_TRANSACTIONS: 'SET_TRANSACTIONS',
  ADD_TRANSACTION: 'ADD_TRANSACTION',
  UPDATE_TRANSACTION: 'UPDATE_TRANSACTION'
}

// Action Creators
export const setTransactions = (transactions) => ({
  type: ActionTypes.SET_TRANSACTIONS,
  payload: transactions
})

export const addTransaction = (transaction) => ({
  type: ActionTypes.ADD_TRANSACTION,
  payload: transaction
})

export const updateTransaction = (transaction) => ({
  type: ActionTypes.UPDATE_TRANSACTION,
  payload: transaction
})

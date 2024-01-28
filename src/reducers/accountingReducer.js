// src/reducers/accountingReducer.js

// Example: Assume we have a more complex business scenario with multiple transactions and accounts

const transactions = [
  {
    transactionId: 'TXN-001',
    date: '2022-03-01',
    description: 'Product sales',
    items: [
      { description: 'Product A', quantity: 20, unitPrice: 30.0 },
      { description: 'Product B', quantity: 15, unitPrice: 25.0 },
    ],
  },
  {
    transactionId: 'TXN-002',
    date: '2022-03-05',
    description: 'Purchase raw materials',
    items: [
      { description: 'Raw Material X', quantity: 500, unitPrice: 5.0 },
      { description: 'Raw Material Y', quantity: 300, unitPrice: 8.0 },
    ],
  },
  // Add more transactions as needed
];

function calculateTotalAmount(items) {
  return items.reduce((total, item) => total + item.quantity * item.unitPrice, 0);
}

const initialState = {
  transactions: transactions,
  accounts: {
    assets: {
      cash: 10000,
      accountsReceivable: calculateTotalAmount(transactions[0].items), // Assuming first transaction is related to sales
      inventory: calculateTotalAmount(transactions[1].items), // Assuming second transaction is related to raw material purchase
    },
    liabilities: {
      accountsPayable: 0, // Assuming no outstanding payables at the beginning
      loansPayable: 15000,
    },
    equity: {
      ownerInvestment: 30000,
      retainedEarnings: 5000,
    },
    income: {
      sales: calculateTotalAmount(transactions[0].items),
      interestIncome: 200, // Placeholder value for interest income
    },
    expenses: {
      costOfGoodsSold: calculateTotalAmount(transactions[1].items), // Assuming second transaction is a purchase, representing cost of goods sold
      operatingExpenses: 2000, // Placeholder value for other operating expenses
    },
  },
  financialStatements: {
    balanceSheet: {
      totalAssets:
        10000 +
        calculateTotalAmount(transactions[0].items) +
        calculateTotalAmount(transactions[1].items),
      totalLiabilities: 0 + 15000,
      totalEquity: 30000 + 5000,
    },
    incomeStatement: {
      totalRevenue: calculateTotalAmount(transactions[0].items) + 200,
      totalExpenses: calculateTotalAmount(transactions[1].items) + 2000,
      netIncome:
        calculateTotalAmount(transactions[0].items) +
        200 -
        (calculateTotalAmount(transactions[1].items) + 2000),
    },
    cashFlowStatement: {
      // Customize based on cash flow components
    },
  },
  // Add other properties as needed for your accounting data
};

const accountingReducer = (state = initialState, action) => {
  // handle actions
  switch (action.type) {
    // actions
    default:
      return state;
  }
};

export default accountingReducer; // export as default

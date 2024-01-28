// src/actions/types.ts

export interface FetchInventoryDataAction {
    type: string;
    payload: {
      totalItems: number;
    };
  }
  
  export interface FetchProfitLossDataAction {
    type: string;
    payload: {
      netProfit: number;
    };
  }
  
  export interface OtherType {
    someProperty: string;
    anotherProperty: number;
    // ... other properties
  }
  
  export const INVENTORY_DATA_CONSTANT = 'INVENTORY_DATA_CONSTANT';
  export const PROFIT_LOSS_DATA_CONSTANT = 'PROFIT_LOSS_DATA_CONSTANT';
  // Other exports if any
  
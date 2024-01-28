// Example of settingReducer.js
const initialState = {
  theme: 'light',
  language: 'en',
  // ...other settings
};

const settingReducer = (state = initialState, action) => {
  switch (action.type) {
    // handle different action types here
    default:
      return state;
  }
};

export default settingReducer;

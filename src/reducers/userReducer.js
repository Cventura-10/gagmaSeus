// src/reducers/userReducer.js
const initialState = {
  // your initial state here
};

const userReducer = (state = initialState, action) => {
  // your reducer logic here, utilizing the 'action' variable
  console.log(action.type); // Example of using the 'action' variable
  return state;
};

export default userReducer;

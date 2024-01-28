// actions/userActions.js
export const fetchUsers = () => async (dispatch) => {
    try {
      // Example: Fetching data from an API
      const response = await fetch('https://api.example.com/users');
      const data = await response.json();
  
      dispatch({ type: 'FETCH_USERS_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'FETCH_USERS_FAILURE', error: error.message });
    }
  };
  
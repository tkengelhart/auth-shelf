const shelfReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_SHELF':
        return action.payload;
      case 'DELETE_SHELF':
        return [];
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default shelfReducer;
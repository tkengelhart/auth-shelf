const shelfReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_SHELF':
        console.log('The payload is,', action.payload);
        return action.payload;
      case 'DELETE_SHELF':
        return [];
      default:
        return state;
    }
  };
  export default shelfReducer;
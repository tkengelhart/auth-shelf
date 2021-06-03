import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_SHELF" actions
function* deleteItem(action) {
    console.log('in deleteItem', action);
  
    try {
      let id = action.payload
      // debugger;
      yield axios.delete(`/api/shelf/${id}/`); 
      yield put({ type: 'FETCH_SHELF' });
    } catch (error) {
      console.log('Error in adding new item', error);
    }
  }
  
  function* deleteSaga() {
    yield takeEvery('DELETE_ITEM', deleteItem)
}
  
  export default deleteSaga;
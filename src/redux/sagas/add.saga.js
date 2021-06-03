// worker Saga: will be fired on "FETCH_SHELF" actions
function* addItem(action) {
    console.log('in addItem', action);
  
    try {
      yield axios.post('/api/shelf', { item: action.payload });
      yield put({ type: 'FETCH_SHELF' });
    } catch (error) {
      console.log('Error in adding new item', error);
    }
  }
  
  function* addSaga() {
    yield takeEvery('ADD_ITEM', addItem)
}
  
  export default addSaga;




  
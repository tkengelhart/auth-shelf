import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_SHELF" actions
function* fetchShelf() {
  try {
    const response = yield axios.get('/api/shelf');
    console.log('Shelf from DB', response.data);

    yield put({ type: 'SET_SHELF', payload: response.data });
  } catch (error) {
    console.log('User get request failed', error);
  }
}

function* shelfSaga() {
  yield takeEvery('FETCH_SHELF', fetchShelf);
}

export default shelfSaga;

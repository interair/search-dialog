import { take, call, put, select, takeLatest } from 'redux-saga/effects';
//import axios from 'axios';
import request from 'utils/request';
import { FETCH_ATTR_REQUEST } from './constants';
import { fetchAttrSuccess } from './actions';

export function* fetchAttr() {
  const url = `http://react-api.webfortest.ru/?attr-list`;
  try {
    const response = yield call(request, url);
    yield put(fetchAttrSuccess(response));
  } catch (err) {
  }
}

export function* fetchAttr() {
  const url = `http://react-api.webfortest.ru/?attr-list`;
  try {
    const response = yield call(request, url);
    yield put(fetchAttrSuccess(response));
  } catch (err) {
  }
}

// Individual exports for testing
export default function* visualSearchPageSaga() {
  yield takeLatest(FETCH_ATTR_REQUEST, fetchAttr);
}

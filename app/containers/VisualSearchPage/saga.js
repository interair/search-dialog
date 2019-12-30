import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import createUploadFileChannel  from 'utils/request';
import { FETCH_ATTR_REQUEST,FETCH_IMG_REQUEST } from './constants';
import { fetchAttrSuccess,fetchImgSuccess } from './actions';

export function* fetchAttr() {
  const url = `http://react-api.webfortest.ru/?attr-list`;
  try {
    const response = yield call(request, url);
    yield put(fetchAttrSuccess(response));
  } catch (err) {
  }
}

export function* fetchImg(el) {
  console.log("3. saga - fetchImg");
  console.log("3. -",el.fileUpload);
  const url = `http://react-api.webfortest.ru/?search`;

  var formData = new FormData();
  formData.append("my_file", el.fileUpload);
  var request = new XMLHttpRequest();
  request.open("POST", url);
  request.send(formData);

  //yield put(fetchImgSuccess(response));
}

// Individual exports for testing
export default function* visualSearchPageSaga() {
  yield takeLatest(FETCH_ATTR_REQUEST, fetchAttr);
  yield takeLatest(FETCH_IMG_REQUEST, fetchImg);
}

/*
 *
 * VisualSearchPage actions
 *
 */

import {
  DEFAULT_ACTION,
  SELECT_IMG,
  CHANGE_ATTR,
  FETCH_ATTR_REQUEST,
  FETCH_ATTR_SUCCESS,
  FETCH_ATTR_ERROR,
  RESET_SEARCH,
  SEARCH,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
export function selectImg(selectedImg, fileUpload) {
  return {
    type: SELECT_IMG,
    selectedImg,
    fileUpload,
  };
}
export function changeAttr(name, value) {
  return {
    type: CHANGE_ATTR,
    name,
    value,
  };
}
export function fetchAttrRequest() {
  return {
    type: FETCH_ATTR_REQUEST,
  };
}
export function fetchAttrSuccess(fetch) {
  return {
    type: FETCH_ATTR_SUCCESS,
    fetch,
  };
}
export function fetchAttrError(message) {
  return {
    type: FETCH_ATTR_ERROR,
    message,
  };
}

export function resetSearchAction() {
  return {
    type: RESET_SEARCH,
  };
}
export function searchAction() {
  return {
    type: SEARCH,
  };
}

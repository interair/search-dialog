/*
 *
 * VisualSearchPage reducer
 *
 */
import produce from 'immer';
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

import defaultImg from './img/default_img.jpg';

export const initialState = {
  number: 0,
  uploadImg: {
    defaultImg,
    selectedImg: null,
    fileUpload: null,
  },
  attr: [
    {
      id: 1,
      name: 'Tags',
      value: [
        { value: 1, name: 'tag1' },
        { value: 2, name: 'tag2' },
        { value: 3, name: 'tag3' },
      ],
      selected: 0,
    },
    {
      id: 2,
      name: 'Material',
      value: [{ value: 1, name: 'material1' }, { value: 2, name: 'material2' }],
      selected: 0,
    },
  ],
};

const visualSearchPageReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case DEFAULT_ACTION:
        console.log('DEFAULT_ACTION');
        break;
      case SELECT_IMG:
        const { selectedImg } = action;
        const { fileUpload } = action;
        const img = { ...state, uploadImg: { ...state.uploadImg } };
        img.uploadImg.selectedImg = selectedImg || img.uploadImg.selectedImg;
        img.uploadImg.fileUpload = fileUpload || img.uploadImg.fileUpload;
        return img;
        break;
      case CHANGE_ATTR:
        const attr = { ...state, attr: [...state.attr] };
        attr.attr = attr.attr.map(el => {
          if (el.name === action.name) el.selected = action.value;
          return el;
        });
        return attr;
        break;
      case FETCH_ATTR_SUCCESS:
        return { ...state, attr: action.fetch.attr };
        break;
      case FETCH_ATTR_ERROR:
        console.log('FETCH_ATTR_ERROR');
        break;
      case RESET_SEARCH:
        const reset_state = {
          ...state,
          uploadImg: { defaultImg, selectedImg: null, fileUpload: null },
          attr: [...state.attr],
        };
        reset_state.attr = reset_state.attr.map(el => {
          el.selected= 0;
          return el;
        });
        return reset_state;
        break;
      case SEARCH:
        console.log('SEARCH');
        break;
    }
  });

export default visualSearchPageReducer;

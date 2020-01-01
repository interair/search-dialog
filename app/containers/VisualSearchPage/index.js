/**
 *
 * VisualSearchPage
 *
 */
import './style/style.css';

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectVisualSearchPage from './selectors';
import reducer from './reducer';
import saga from './saga';

import { UploadImg } from './components/UploadImg';
import { SelectAttr } from './components/SelectAttr';
import { SearchButton } from './components/SearchButton';
import { ListImg } from './components/ListImg';
import { DownloadButton } from './components/DownloadButton';
import {
  selectImg, changeAttr,
  fetchAttrRequest,
  resetSearchAction,
  fetchImgRequest,
  loadMoreAction,
} from './actions';

export function VisualSearchPage(props) {
  useInjectReducer({ key: 'visualSearchPage', reducer });
  useInjectSaga({ key: 'visualSearchPage', saga });

  useEffect(() => props.fetchAttr(), [1]);

  return (
    <div>
      <Helmet>
        <title>VisualSearchPage</title>
        <meta name="description" content="Description of VisualSearchPage" />
      </Helmet>

      <div className="c-visual-search">
        <div className="c-left">
          <UploadImg
            uploadImg={props.visualSearchPage.uploadImg}
            selectImg={props.selectImg}
          />
          <SelectAttr
            attr={props.visualSearchPage.attr}
            changeAttr={props.changeAttr}
          />
          <SearchButton
            resetSearchAction={props.resetSearchAction}
            fetchImg={props.fetchImg}
            fileUpload={props.visualSearchPage.uploadImg.fileUpload}
            attr={props.visualSearchPage.attr}
          />
        </div>
        <div className="c-right">
          <ListImg
            listImg={props.visualSearchPage.listImg}
            loadMoreAction={props.loadMoreAction}
          />
          <DownloadButton countImg={props.visualSearchPage.listImg.countImg} />
        </div>
      </div>
    </div>
  );
}

VisualSearchPage.propTypes = {
  fetchAttr: PropTypes.func.isRequired,
  fetchImg: PropTypes.func.isRequired,
  selectImg: PropTypes.func.isRequired,
  changeAttr: PropTypes.func.isRequired,
  fetchAttrRequest: PropTypes.func,
  fetchImgRequest: PropTypes.func,
  resetSearchAction: PropTypes.func.isRequired,
  loadMoreAction: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  visualSearchPage: makeSelectVisualSearchPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchAttr: () => {
      dispatch(fetchAttrRequest());
    },
    fetchImg: (fileUpload) => {
      dispatch(fetchImgRequest(fileUpload));
    },
    selectImg: (selectedImg, fileUpload) => {
      dispatch(selectImg(selectedImg, fileUpload));
    },
    changeAttr: (name, value) => {
      dispatch(changeAttr(name, value));
    },
    resetSearchAction: () => {
      dispatch(resetSearchAction());
    },
    loadMoreAction: () => {
      dispatch(loadMoreAction());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(VisualSearchPage);

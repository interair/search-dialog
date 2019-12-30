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
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectVisualSearchPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import { UploadImg } from './components/UploadImg';
import { SelectAttr } from './components/SelectAttr';
import { SearchButton } from './components/SearchButton';
import { ListImg } from './components/ListImg';
import { DownloadButton } from './components/DownloadButton';
import { selectImg, changeAttr, fetchAttrRequest, resetSearchAction, searchAction } from './actions';

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
      <FormattedMessage {...messages.header} />

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
          <SearchButton resetSearchAction={props.resetSearchAction} searchAction={props.searchAction}/>
        </div>
        <div className="c-right">
          <ListImg />
          <DownloadButton />
        </div>
      </div>
    </div>
  );
}

VisualSearchPage.propTypes = {
  fetchAttr: PropTypes.func.isRequired,
  selectImg: PropTypes.func.isRequired,
  changeAttr: PropTypes.func.isRequired,
  fetchAttrRequest: PropTypes.func,
  resetSearchAction: PropTypes.func.isRequired,
  searchAction: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  visualSearchPage: makeSelectVisualSearchPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchAttr: () => {
      dispatch(fetchAttrRequest());
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
    searchAction: () => {
      dispatch(searchAction());
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

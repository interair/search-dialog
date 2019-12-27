/**
 *
 * VisualSearchPage
 *
 */

import React, { memo } from 'react';
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

export function VisualSearchPage() {
  useInjectReducer({ key: 'visualSearchPage', reducer });
  useInjectSaga({ key: 'visualSearchPage', saga });

  return (
    <div>
      <Helmet>
        <title>VisualSearchPage</title>
        <meta name="description" content="Description of VisualSearchPage" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

VisualSearchPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  visualSearchPage: makeSelectVisualSearchPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
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

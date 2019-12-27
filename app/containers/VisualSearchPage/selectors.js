import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the visualSearchPage state domain
 */

const selectVisualSearchPageDomain = state =>
  state.visualSearchPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by VisualSearchPage
 */

const makeSelectVisualSearchPage = () =>
  createSelector(
    selectVisualSearchPageDomain,
    substate => substate,
  );

export default makeSelectVisualSearchPage;
export { selectVisualSearchPageDomain };

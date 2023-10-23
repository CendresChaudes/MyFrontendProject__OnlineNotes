import compose from 'compose-function';
import { withErrorBoundary } from './withErrorBoundary';
import { withHelmet } from './withHelmet';
import { withRedux } from './withRedux';
import { withRouter } from './withRouter';

export const withProviders = compose(withHelmet, withErrorBoundary, withRedux, withRouter);

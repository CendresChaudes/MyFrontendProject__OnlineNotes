import { Provider as ReduxProvider } from 'react-redux';
import { appStore } from '../store/appStore';

export const withRedux = (Component: Component) => {
  const DecoratedComponent = () => (
    <ReduxProvider store={appStore}>
      <Component />
    </ReduxProvider>
  );

  DecoratedComponent.displayName = 'Decorated component with Redux';

  return DecoratedComponent;
};

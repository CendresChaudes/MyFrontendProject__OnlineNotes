
import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Loader } from '@/shared/ui';

export const withRouter = (Component: Component) => {
  const DecoratedComponent = () => (
    <BrowserRouter>
      <Suspense fallback={<Loader fullPage/>}>
        <Component />
      </Suspense>
    </BrowserRouter>
  );

  DecoratedComponent.displayName = 'Decorated component with Browser Router';
  return DecoratedComponent;
};

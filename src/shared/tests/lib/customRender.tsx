import { render, RenderOptions } from '@testing-library/react';
import { ReactElement } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
// eslint-disable-next-line @conarti/feature-sliced/layers-slices
import { appStore } from '@/app/store/appStore';

const AllTheProviders = ({ children }: { children: React.ReactNode }) => (
  <ReduxProvider store={appStore}>
    <BrowserRouter>
      {children}
    </BrowserRouter>
  </ReduxProvider>
);

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';

export { customRender as render };

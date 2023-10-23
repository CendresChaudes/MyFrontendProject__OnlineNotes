import { ScrollToTop } from '@/shared/lib';
import { AppRouter } from './AppRouter';
import { withProviders } from './providers';

function App() {
  return (
    <>
      <ScrollToTop />
      <AppRouter />
    </>
  );
}

const appWithProviders = withProviders(App);

export default appWithProviders;

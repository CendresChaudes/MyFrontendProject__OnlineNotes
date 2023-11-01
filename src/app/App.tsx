import { getCurrentUserStatusObjectSelector } from '@/entities/user';
import { ScrollToTop, Notification, useAppSelector } from '@/shared/lib';
import { Loader } from '@/shared/ui';
import { AppRouter } from './AppRouter';
import { useGetCurrentUser } from './hooks/getCurrentUser';
import { withProviders } from './providers';

function App() {
  const getCurrentUserStatus = useAppSelector(getCurrentUserStatusObjectSelector);

  useGetCurrentUser();

  if (getCurrentUserStatus.isUncompleted) {
    return <Loader fullPage />;
  }

  return (
    <>
      <ScrollToTop />
      <Notification />
      <AppRouter />
    </>
  );
}

const appWithProviders = withProviders(App);

export default appWithProviders;

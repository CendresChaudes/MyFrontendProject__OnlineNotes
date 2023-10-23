import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppRoute } from '@/const';

const NotFoundPage = lazy(() => import('@/pages/error/notFound'));

export function AppRouter() {
  return (
    <Routes>
      <Route path={AppRoute.NotFound} element={<NotFoundPage />} />
    </Routes>
  );
}

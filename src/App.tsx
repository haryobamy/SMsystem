import { lazy, useEffect } from 'react';

import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { Suspensed } from './components/ui/suspensed';

const AuthModule = lazy(() => import('@/layouts/auth-layout'));
const RootModule = lazy(() => import('@/layouts/root-layout'));

function App() {
  const location = useLocation();

  useEffect(() => {
    if (window)
      window.scrollTo({
        behavior: 'smooth',
        top: 0,
        left: 0,
      });
  }, [location.pathname]);

  return (
    <Routes>
      <Route
        path="/auth/*"
        element={
          <Suspensed>
            <AuthModule />
          </Suspensed>
        }
      />

      <Route
        path="/app/*"
        element={
          <Suspensed>
            <RootModule />
          </Suspensed>
        }
      />

      <Route path="*" element={<Navigate to="/auth" />} />
    </Routes>
  );
}

export default App;

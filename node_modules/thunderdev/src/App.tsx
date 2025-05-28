import { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Home } from './pages/Home';
import { ErrorBoundary } from './components';
import { ROUTES } from './constants';

// Lazy load heavy components
const Builder = lazy(() => import('./pages/Builder').then(module => ({ default: module.Builder })));

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen bg-[#0F172A] flex items-center justify-center">
    <div className="loading-skeleton w-32 h-32 rounded-full"></div>
  </div>
);

// Declare gtag to avoid TS errors
declare global {
  interface Window {
    gtag?: (command: string, targetId: string, config?: Record<string, unknown>) => void;
  }
}

// Hook to track page views on route change
function usePageTracking() {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag('config', 'G-EQFZKPZ5MB', {
        page_path: location.pathname,
      });
    }
  }, [location]);
}

// Routes component with tracking
function AppRoutes() {
  usePageTracking();

  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route
        path={ROUTES.BUILDER}
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <Builder />
          </Suspense>
        }
      />
      <Route
        path={ROUTES.GITHUB_CALLBACK}
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <Builder />
          </Suspense>
        }
      />
    </Routes>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;

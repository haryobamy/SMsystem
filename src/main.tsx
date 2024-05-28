import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import ErrorBoundaryFallback from './components/ui/error-boundary-fallback';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from '@/lib/redux/store';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/*"
      element={<App />}
      errorElement={<ErrorBoundaryFallback />}
    />
  )
);

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={router} />
    </PersistGate>
  </Provider>
);

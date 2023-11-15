import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import '../assets/index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import ErrorPage from './pages/Error'
import { Provider } from 'react-redux'
import { store } from './state/store'
import {createTheme, ThemeProvider} from '@mui/material/styles';
import rtlPlugin from 'stylis-plugin-rtl';
import {prefixer} from 'stylis';
import {CacheProvider} from '@emotion/react';
import createCache from '@emotion/cache';
import { ToastProvider } from 'react-toast-notifications'

// eslint-disable-next-line react-refresh/only-export-components
const ShoppingList = lazy(() => import('./pages/ShoppingList')) 

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <Suspense fallback={<>Loading...</>}>
      <ShoppingList />
    </Suspense>,
    errorElement: <ErrorPage />,

  },
]);

const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});
const theme = createTheme({
  direction: 'rtl',
});


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
        <QueryClientProvider client={queryClient}> 
          <Provider store={store}>
            <ToastProvider>
              <CacheProvider value={cacheRtl}>
                <ThemeProvider theme={theme}>
                  <RouterProvider router={router} />
                </ThemeProvider>
              </CacheProvider>
            </ToastProvider>
          </Provider>
        </QueryClientProvider>
  </React.StrictMode>,
)
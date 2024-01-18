import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import FormPage from './pages/FormPage';
import DashboardPage from './pages/Dashboard/Dashboard.view';
import DashboardDetailPage from './pages/Dashboard/DashboardDetail.view';
import DashboardOverviewPage from './pages/Dashboard/DashboardOverview.view';
import './Styles.css';



const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/dashboard',
    element: <DashboardPage />,
    children: [
      {
        path: '/dashboard/overview',
        element: <DashboardOverviewPage />,
      },
      {
        path: '/dashboard/overview/:shipmentId',
        element: <DashboardDetailPage />,
      },
    ],
  },
  {
    path: '/formulier',
    element: <FormPage />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

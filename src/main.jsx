import './index.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Navigate,RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import AuthRedirect from './components/AuthRedirect.jsx'
import Cadastro from './pages/Cadastro.jsx'
import HomePage from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import TaskDetailsPage from './pages/TaskDetails.jsx'
import TasksPage from './pages/Tasks.jsx'

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/login" />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/cadastro',
    element: <Cadastro />,
  },
  {
    path: '/',
    element: <AuthRedirect />,
    children: [
      {
        path: '/home',
        element: <HomePage />,
      },
      {
        path: '/tasks',
        element: <TasksPage />,
      },
      {
        path: '/task/:taskId',
        element: <TaskDetailsPage />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Toaster
        toastOptions={{
          style: {
            color: '#35383E',
          },
        }}
      />
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
)

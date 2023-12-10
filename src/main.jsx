import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './router/router'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './provider/AuthProvider'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { HelmetProvider } from 'react-helmet-async'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='font-poppins '>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <React.StrictMode>
          <HelmetProvider>
            <RouterProvider router={router} />
          </HelmetProvider>
        </React.StrictMode>
      </AuthProvider>
    </QueryClientProvider>
  </div>,
)

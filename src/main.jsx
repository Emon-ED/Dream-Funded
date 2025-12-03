import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './Routes/Route.jsx'
import { RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AuthProviders from './Providers/AuthProviders.jsx'


const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
       <div className=' max-w-screen-xl mx-auto bg-gradient-to-br from-teal-900 via-teal-800 to-black min-h-screen '>
    <AuthProviders>
 <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
      </QueryClientProvider> 
    </AuthProviders>
    </div>
   
   
  </StrictMode>,
)

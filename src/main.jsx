import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './Routes/Route.jsx'
import { RouterProvider } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className=' max-w-screen-xl mx-auto bg-gradient-to-br from-teal-900 via-teal-800 to-black min-h-screen '>
    <RouterProvider router={router} />
    </div>
  </StrictMode>,
)

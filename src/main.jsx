import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import MyCreatedRoute from './Router/Route.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={MyCreatedRoute}></RouterProvider>
  </React.StrictMode>,
)

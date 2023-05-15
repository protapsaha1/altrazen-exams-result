import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayouts from './components/Layouts/MainLayouts'
import Home from './components/Home/Home'
import Refer from './components/Refer/Refer'
import ResultsLayout from './components/Layouts/ResultsLayout'
import Pass from './components/Pass/Pass'
import LoadingPage from './components/LoadingPage/LoadingPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayouts />,
    children: [
      {
        path: '/',
        element: <Home />
      },

    ]
  },
  {
    path: 'result',
    element: <ResultsLayout />,
    children: [
      {
        path: 'refer',
        element: <Refer />
      },
      {
        path: 'pass',
        element: <Pass />
      },
      {
        path: 'wait',
        element: <LoadingPage />
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

// import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

// css imports
import './index.css'

//bringind in the pages the router will use to conditionally show the appropriate views/pages
import App from './App.jsx'
import AboutPage from './pages/AboutPage.jsx'
// import ContactPage from './pages/ContactPage.jsx'
import HomePage from './pages/HomePage.jsx'
import ProjectPage from './pages/ProjectPage.jsx'
// import ResumePage from './pages/ResumePage.jsx'
import ErrorPage from './pages/ErrorPage.jsx'

const router = createBrowserRouter([
  { 
    path: '/', 
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/about', element: <AboutPage /> },
      // { path: '/contact', element: <ContactPage /> },
      { path: '/projects', element: <ProjectPage /> },
      // { path: '/resume', element: <ResumePage /> }
    ]
  }
]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
import { StrictMode } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import About from './pages/About.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './pages/Contact.jsx';
import Home from './pages/Home.jsx';
import Portfolio from './pages/Portfolio.jsx';

const BrowserRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,     
      },
      {
        path: 'portfolio',
        element: <Portfolio />,
      },
      {
        path: 'contact',
        element: <Contact />,
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={BrowserRouter}></RouterProvider>
  </StrictMode>,
)

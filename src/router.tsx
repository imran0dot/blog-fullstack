import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Signup from './pages/Signup';
import Singin from './pages/Singin';
import Dashboard from './pages/Dashboard';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        children: [
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/projects',
                element: <Projects />,
            },
            {
                path: '/sing-up',
                element: <Signup />
            },
            {
                path: '/sing-in',
                element: <Singin />
            }
        ],
    },
    {
        path: '/dashboard',
        element: <Dashboard />
    }
])

export default router;
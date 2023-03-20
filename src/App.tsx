import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { FundPage } from '@page/FundPage/FundPage'

import { HomeLayout } from './layout'
import { AboutPage, AuthPage, FundsPage, HomePage } from './pages'

const router = createBrowserRouter([
    {
        path: '/auth',
        element: <AuthPage />,
    },
    {
        path: '/',
        element: <HomeLayout />,
        children: [
            {
                path: '/',
                element: <HomePage />,
            },
            {
                path: 'about-us',
                element: <AboutPage />,
            },
            {
                path: 'funds',
                element: <FundsPage />,
            },
            {
                path: 'funds/:id',
                element: <FundPage />,
            },
        ],
    },
])

export const App = () => {
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    )
}

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import { FundPage } from '@page/FundPage/FundPage'

import { ChangePassword, Login, Register, ResetPassword } from './components'
import { HomeLayout } from './layout'
import { AboutPage, FundsPage, HomePage } from './pages'

import 'react-toastify/dist/ReactToastify.css'

const router = createBrowserRouter([
    {
        path: '/auth',
        children: [
            { path: 'login', element: <Login /> },
            { path: '/auth', element: <Register /> },
            { path: '/auth/reset', element: <ResetPassword /> },
            { path: '/auth/change', element: <ChangePassword /> },
        ],
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
            <ToastContainer />
        </div>
    )
}

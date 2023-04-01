import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import { ChangePassword, Login, Register, ResetPassword } from './components'
import { HomeLayout } from './layout'
import { AboutPage, FundPage, FundsPage, HomePage, ProfilePage } from './pages'

import 'react-toastify/dist/ReactToastify.css'

import HelpersPage from '@page/HelpersPage/HelpersPage'

const router = createBrowserRouter([
    { path: '/auth', element: <Register /> },
    { path: '/login', element: <Login /> },
    { path: '/reset', element: <ResetPassword /> },
    { path: '/change', element: <ChangePassword /> },
    {
        path: '/',
        element: <HomeLayout />,
        children: [
            {
                index: true,
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
            {
                path: 'profile',
                element: <ProfilePage />,
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

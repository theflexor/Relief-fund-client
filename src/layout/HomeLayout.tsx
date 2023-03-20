import { Outlet } from 'react-router-dom'

import { Footer, Header } from '@components/index'

export const HomeLayout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

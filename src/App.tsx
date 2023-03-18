import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { Header, Navbar } from './components'

import './App.scss'

export const App = () => {
    return (
        <div>
            <Header />
            <Navbar />
        </div>
    )
}

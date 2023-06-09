import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { persistor, store } from '@store/store'

import { App } from './App'

import './global.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={false} persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>
    </React.StrictMode>,
)

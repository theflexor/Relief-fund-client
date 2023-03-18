import { createSlice } from '@reduxjs/toolkit'
import { AuthTypes } from '@typess/index'

const initialState: AuthTypes = {
    user: null,
    token: '',
}

export const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth(state, action) {
            state.token = action.payload.token
            state.user = action.payload.user
        },
    },
})

export const { setAuth } = AuthSlice.actions
export default AuthSlice.reducer

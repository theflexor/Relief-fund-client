import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AuthTypes, LoginResponseTypes, UserTypes } from '@typess/index'

const initialState: AuthTypes = {
    isAuth: false,
    id: -1,
    user: null,
    refresh: '',
    access: '',
}

export const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth(state, action: PayloadAction<LoginResponseTypes>) {
            console.log(action)
            state.isAuth = true
            state.id = action.payload.id
            state.access = action.payload.access
            state.refresh = action.payload.refresh
        },
        setDataUser(state, action: PayloadAction<UserTypes>) {
            state.user = action.payload
        },
    },
})

export const { setAuth, setDataUser } = AuthSlice.actions
export default AuthSlice.reducer

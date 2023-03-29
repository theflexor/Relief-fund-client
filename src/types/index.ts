export interface AuthTypes {
    user: UserTypes | null
    token: string
}

export interface UserTypes {
    name: string
    age: number
}



export interface RegisterTypes {
    email: string
    password: string
    confirmPassword: string
    firstName: string
    lastName: string
    selectUserType: { value: string; label: string }
    condition: boolean
}
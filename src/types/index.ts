export interface AuthTypes {
    user: UserTypes | null
    token: string
}

export interface UserTypes {
    name: string
    age: number
}

export interface AuthUserTypes {
    email?: string
    password?: string
    firstName?: string
    lastName?: string
    confirmPassword?: string
    confirmCondition?: boolean
}

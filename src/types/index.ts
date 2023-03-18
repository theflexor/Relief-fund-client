export interface AuthTypes {
    user: UserTypes | null
    token: string
}

export interface UserTypes {
    name: string
    age: number
}

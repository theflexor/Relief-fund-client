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

export interface donationsTypes {
    id: number
    user: string
    charity_program: string
    amount: number
    donation_date: string
    charity_prigram: string
    fund: number
}

export interface donationTime {
    all_donations: number
    last_30_days_donations: number
    today_donations: number
}

export interface donatersType {
    email: string
    id: number
    username: string
    first_name: string
    last_name: string
    user_photo: string
    telegram_url: string
    twitter: string
    date: string
    facebook_url: string
    userType: string
    aboutUser: string
    verified_account: boolean
    phone_number: string
    your_programms: string
    region: string
    category: string
    adress: string
    requisites: string
}

export interface testType {
    count: number
    next: string | null
    previous: string | null
    results: donatersType[]
}

export interface DonateType {
    id: string
    amount: number
    charity_prigram?: string
    fund?: string
}

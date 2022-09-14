import { User } from '../../../models/user';

export interface AuthState {
    isAuthenticated: boolean
    currentUser?: User
}

export type ILogin = {
    email: string
    password: string
}

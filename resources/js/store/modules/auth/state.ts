import { defineStore } from 'pinia';
import { AUTH_TOKEN } from '../../../config/constants';
import { AuthState } from './types';
import Cookies from 'js-cookie';

export const useState = defineStore({
    id: 'auth.state',
    state: (): AuthState => {
        return {
            isAuthenticated: !!Cookies.get(AUTH_TOKEN),
        }
    },
})

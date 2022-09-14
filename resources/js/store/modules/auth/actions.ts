import { defineStore } from 'pinia';
import { ILogin } from './types';
import { removeToken, setToken } from '../../../utils/auth';
import router from '../../../router';
import { login, userInfo, logout } from '../../../api/v1/auth';
import { globalStore } from '../global';
import { useState } from './state';

export const useActions = defineStore('auth.actions', () => {
    const global = globalStore();

    const actLogin = async (payload: ILogin) => {
        login(payload).then(res => {
            const response = res.data;
            setToken(response.data.access_token);
            global.actLoading(false);
            router.push({ path: '/dashboard' });
        }).catch(err => {
            router.push({ path: '/404' });
        });
    }

    const actLogout = () => {
        logout().then(res => {
            removeToken();
            router.push({ path: '/login' });
        }).catch(err => {
            router.push({ path: '/404' });
        })
    }

    const actGetCurrentUserInfo = async () => {
        userInfo().then(res => {
            const response = res.data;
            const state = useState();
            state.currentUser = response.data;
            
        }).catch(err => {
            router.push({ path: '/404' });
        })
    }

    return {
        actLogin,
        actLogout,
        actGetCurrentUserInfo,
    }
})

import request from '../../utils/request'

export function login(form: Object) {
    return request({
        url: 'auth/login',
        method: 'post',
        data: form,
    });
}

export function logout() {
    return request({
        url: 'auth/logout',
        method: 'post',
    });
}

export function userInfo() {
    return request({
        url: 'auth/me',
        method: 'get',
    });
}

export function sendPasswordResetLink(form: Object) {
    return request({
        url: 'auth/forgot-password',
        method: 'post',
        data: form,
    });
}

export function callResetPassword(form: Object) {
    return request({
        url: 'auth/reset-password',
        method: 'post',
        data: form,
    });
}

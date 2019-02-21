export const LOGIN_USER = 'LOGIN_USER';
export const GET_USER = 'GET_USER';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGOUT_USER = 'LOGOUT_USER';

export function actionLoginUser(user) {
    return {
        type: LOGIN_USER,
        user
    }
}

export function actionLoginError(user) {
    return {
        type: LOGIN_ERROR,
    }
}

export function actionGetUser(user) {
    return {
        type: GET_USER,
        user
    }
}

export function actionLogoutUser() {
    return {
        type: LOGOUT_USER,
    }
}
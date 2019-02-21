export const LOGIN_USER = 'LOGIN_USER';
export const GET_USER = 'GET_USER';

export function actionLoginUser(user) {
    return {
        type: LOGIN_USER,
        user
    }
}

export function actionGetUser(user) {
    return {
        type: GET_USER,
        user
    }
}
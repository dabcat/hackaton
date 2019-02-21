import { LOGIN_USER, GET_USER, LOGIN_ERROR } from './actions';
import LocalStorageService from '../../services/LocalStorage';

const LocalStorage = LocalStorageService();

export default function user(state = [], action) {
    switch (action.type) {
        case LOGIN_USER:
            const loginUser = action.user;
            LocalStorage.save({ user: loginUser })
            return loginUser;
        case LOGIN_ERROR:
            return state;
        case GET_USER:
            return LocalStorage.read('user');
        default:
            return state;
    }
}
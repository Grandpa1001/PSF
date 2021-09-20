import {
    LOGIN_CHANGE_USER_LOGIN,
    LOGIN_CHANGE_USER_PASSWORD,
} from '../constants/actionTypes';

const initialState = {
    login: '',
    password: '',
    errorMessage: ''
};

export default function moduleReducer(state = initialState, action) {
    const {type, login, password} = action;

    switch (type) {
        case LOGIN_CHANGE_USER_LOGIN:
            return {
                ...state,
                errorMessage: '',
                login,
            };
        case LOGIN_CHANGE_USER_PASSWORD:
            return {
                ...state,
                errorMessage: '',
                password,
            };
        default:
            return state;
    }
}

function getLoginView(state) {
    return state.view.login;
}

export function getLogin(state) {
    return getLoginView(state).login;
}

export function getPassword(state) {
    return getLoginView(state).password;
}

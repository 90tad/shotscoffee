import * as types from './type'

export function userPostFetch(user) {
    return dispatch => {
        dispatch(login())
        fetch("https://csshotscoffeeapi.azurewebsites.net/api/token", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'

            },
            body: JSON.stringify(user)
        })
            .then(resp => resp.json())
            .then(data =>
                dispatch(loginSuccess(data))
            )
            .catch(error =>
                dispatch(loginError(error))
            )
    }
}

export function login() {
    return {
        type: types.LOGIN
    }

}

export function loginSuccess(data) {
    return {
        type: types.LOGIN_SUCCESS,
        token: data.token,
    }
}

export function loginError(error) {
    return {
        type: types.LOGIN_ERROR,
        error
    }

}
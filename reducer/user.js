import * as types from '../action/type'

const mState = {
    token: '',
    error: '',
    fetching: false
}

const user = function (state = mState, action) {
    switch (action.type) {
        case types.LOGIN: {
            return {
                ...state,
                fetching: true
            }
        }
        case types.LOGIN_SUCCESS: {
            return {
                ...state,
                token: action.token,
                fetching: false
            }
        }
        case types.LOGIN_ERROR: {
            return {
                ...state,
                error: action.error,
                fetching: false
            }
        }
        default: {
            return state;
        }
    }
}

export default user
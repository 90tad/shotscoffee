import * as types from '../action/type'

const mState = {
    data: [],
    error: '',
    fetching: false
}

const user = function (state = mState, action) {
    switch (action.type) {
        case types.START_FETCH: {
            return {
                ...state,
                fetching: true
            }
        }
        case types.FETCH_SUCCESS: {
            return {
                ...state,
                data: action.data,
                fetching: false
            }
        }
        case types.FETCH_ERROR: {
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
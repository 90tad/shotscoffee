import * as types from './type'

export function fetchData(token) {
    return dispatch => {
        dispatch(startFetch())
        fetch("https://csshotscoffeeapi.azurewebsites.net/api/item", {
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + token
            },
        })
            .then(resp => resp.json())
            .then(data =>
                dispatch(fetchSuccess(data))
            )
            .catch(error =>
                dispatch(fetchError(error))
            )
    }
}

export function startFetch() {
    return {
        type: types.START_FETCH
    }

}

export function fetchSuccess(data) {
    return {
        type: types.FETCH_SUCCESS,
        data: data
    }
}

export function fetchError(error) {
    return {
        type: types.FETCH_ERROR,
        error
    }

}
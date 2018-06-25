export const fetchUsers = () => async (dispatch) => {
    dispatch(startLoading())

    const response = await fetch('http://localhost:4000/')
    const users = await response.json()
    dispatch(setUsers(users))

    dispatch(stopLoading()) // TODO: here?
}

export const setUsers = (users) => ({
    type: "SET_USERS",
    payload: { users }
})

let pendingId = 0
export const addUser = (name) => async (dispatch) => {
    const reqPendingId = --pendingId
    dispatch({
        type: "ADD_USER_START",
        payload: { name, pendingId: reqPendingId }
    })
    const response = await fetch('http://localhost:4000/', {
        method: 'POST',
        body: JSON.stringify({ name }),
        headers: {
            'Content-Type': 'application/json'
        },
    })
    const user = await response.json()
    dispatch({
        type: "ADD_USER_SUCCESS",
        payload: { pendingId: reqPendingId, id: user.id }
    })
}

export const startLoading = () => ({
    type: "START_LOADING"
})

export const stopLoading = () => ({
    type: "STOP_LOADING"
})



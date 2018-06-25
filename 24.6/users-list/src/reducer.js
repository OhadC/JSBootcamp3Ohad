export const initialState = {
    isLoading: true,
    users: [],
    nextId: 2
}

const setUsers = (state, action) => ({
    ...state,
    users: action.payload.users
})

const addUserStart = (state, action) => {
    const { name, pendingId } = action.payload
    const user = { name, pendingId }
    const users = state.users.concat(user)
    return {
        ...state,
        users
    }
}

const addUserSuccess = (state, action) => {
    const { pendingId, id } = action.payload
    const users = state.users.concat([])
    const userIndex = users.findIndex(user => user.pendingId && user.pendingId === pendingId)
    const user = {
        ...users[userIndex],
        pendingId: undefined,
        id
    }
    users[userIndex] = user
    return {
        ...state,
        users
    }
}

const setLoading = (state, isLoading) => ({
    ...state,
    isLoading
})

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ("SET_USERS"): return setUsers(state, action)
        case ("ADD_USER_START"): return addUserStart(state, action)
        case ("ADD_USER_SUCCESS"): return addUserSuccess(state, action)
        case ("START_LOADING"): return setLoading(state, true)
        case ("STOP_LOADING"): return setLoading(state, false)
        default: return state
    }
}

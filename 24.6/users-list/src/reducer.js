export const initialState = {
    users: [
        { name: "Ori", id: 0 },
        { name: "Roni", id: 1 },
    ],
    nextId: 2
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ("ADD_USER"):
            const newUser = {
                name: action.payload.name,
                id: state.nextId
            }
            return {
                ...state,
                users: state.users.concat(newUser),
                nextId: state.nextId + 1
            }
        default: return state
    }
}

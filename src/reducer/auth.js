export const AUTH_LOGIN = 'AUTH_LOGIN'
export const AUTH_REGISTER = 'AUTH_REGISTER'

// const initialState = { token: null, user: {} }

export const authReducer = (state, action) => {
    switch (action.type) {
        case AUTH_LOGIN:
            return { ...state, token: action.payload.token, user: action.payload.user }

        case AUTH_REGISTER:
            return { ...state, token: action.payload.token, user: action.payload.user }

        default:
            return { ...state }
    }
}

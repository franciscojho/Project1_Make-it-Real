export const AUTH_LOGIN = 'AUTH_LOGIN'
export const AUTH_LOGOUT = 'AUTH_LOGOUT'
export const AUTH_REGISTER = 'AUTH_REGISTER'
export const USER_UPDATE_REQUEST = 'USER_UPDATE_REQUEST'
export const USER_UPDATE_SUCCESS = 'USER_UPDATE_SUCCESS'
export const USER_LOADING = 'USER_LOADING'

export const authReducer = (state, action) => {
    switch (action.type) {
        case AUTH_LOGIN:
            return { ...state, token: action.payload.token, user: action.payload.user }

        case AUTH_LOGOUT:
            return { ...state, token: null, user: null }

        case AUTH_REGISTER:
            return { ...state, token: action.payload.token, user: action.payload.user }

        case USER_UPDATE_REQUEST:
            return { ...state, isLoading: true }

        case USER_UPDATE_SUCCESS:
            return { ...state, user: action.payload, isLoading: false }

        default:
            return { ...state }
    }
}

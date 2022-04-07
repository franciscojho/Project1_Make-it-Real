export const REQUEST_AUTH_API = 'REQUEST_AUTH_API'
export const AUTH_LOGIN_SUCCESS = 'AUTH_LOGIN_SUCCESS'
export const AUTH_LOGOUT_SUCCESS = 'AUTH_LOGOUT_SUCCESS'
export const AUTH_REGISTER_SUCCESS = 'AUTH_REGISTER_SUCCESS'
export const USER_UPDATE_REQUEST = 'USER_UPDATE_REQUEST'
export const USER_UPDATE_SUCCESS = 'USER_UPDATE_SUCCESS'
export const AUTH_FAILURE = 'AUTH_FAILURE'

export const authReducer = (state, action) => {
    switch (action.type) {
        case REQUEST_AUTH_API:
            return { ...state, isLoading: true }

        case AUTH_LOGIN_SUCCESS:
            return {
                ...state,
                token: action.payload.token,
                user: action.payload.user,
                isLoading: false,
            }

        case AUTH_LOGOUT_SUCCESS:
            return { ...state, token: null, user: null, isLoading: false }

        case AUTH_REGISTER_SUCCESS:
            return {
                ...state,
                token: action.payload.token,
                user: action.payload.user,
                isLoading: false,
            }

        case USER_UPDATE_SUCCESS:
            return { ...state, user: action.payload, isLoading: false }

        case AUTH_FAILURE:
            return { ...state, user: null, token: null, isLoading: false }

        default:
            return { ...state }
    }
}

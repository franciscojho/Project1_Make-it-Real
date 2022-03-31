export const REQUEST_AD_API = 'REQUEST_AD_API'
export const GET_ADS_SUCCESS = 'GET_ADS_SUCCESS'
export const CREATE_AD_SUCCESS = 'CREATE_AD_SUCCESS'
export const UPDATE_AD_SUCCESS = 'UPDATE_AD_SUCCESS'
export const DELETE_AD_SUCCESS = 'DELETE_AD_SUCCESS'

export const adReducer = (state, action) => {
    switch (action.type) {
        case REQUEST_AD_API:
            return { ...state, isLoading: true }
        case GET_ADS_SUCCESS:
            return { ...state, ads: action.payload, isLoading: false }
        case CREATE_AD_SUCCESS:
            return { ads: [...state.ads, action.payload], isLoading: false }
        case UPDATE_AD_SUCCESS:
            return {
                ads: state.ads.map((ad) =>
                    ad.id === action.payload.id ? { ...ad, ...action.payload.ad } : ad
                ),
                isLoading: false,
            }
        case DELETE_AD_SUCCESS:
            return {
                ads: state.ads.filter((ad) => ad.id !== action.payload.id),
                isLoading: false,
            }
        default:
            return state
    }
}

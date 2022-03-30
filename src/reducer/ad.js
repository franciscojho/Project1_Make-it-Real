export const GET_ADS_REQUEST = 'GET_ADS_REQUEST'
export const GET_ADS_SUCCESS = 'GET_ADS_SUCCESS'
export const CREATE_AD_REQUEST = 'CREATE_AD_REQUEST'
export const CREATE_AD_SUCCESS = 'CREATE_AD_SUCCESS'
export const UPDATE_AD_REQUEST = 'UPDATE_AD_REQUEST'
export const UPDATE_AD_SUCCESS = 'UPDATE_AD_SUCCESS'
export const DELETE_AD_REQUEST = 'DELETE_AD_REQUEST'
export const DELETE_AD_SUCCESS = 'DELETE_AD_SUCCESS'
export const ADS_START_REQUEST = 'ADS_HTTP_REQUEST'

export const adReducer = (state, action) => {
    switch (action.type) {
        case ADS_START_REQUEST:
            return { ...state, isLoading: true }
        case GET_ADS_REQUEST:
            return { ...state, isLoading: true }
        case GET_ADS_SUCCESS:
            return { ...state, ads: action.payload, isLoading: false }
        case CREATE_AD_REQUEST:
            return { ...state, isLoading: true }
        case CREATE_AD_SUCCESS:
            return { ads: [...state.ads, action.payload], isLoading: false }
        case UPDATE_AD_REQUEST:
            return { ...state, isLoading: true }
        case UPDATE_AD_SUCCESS:
            return {
                ads: state.ads.map((ad) =>
                    ad.id === action.payload.selectedAd.id ? { ...ad, ...action.payload.ad } : ad
                ),

                isLoading: false,
            }
        case DELETE_AD_REQUEST:
            return { ...state, isLoading: true }
        case DELETE_AD_SUCCESS:
            return {
                ads: state.ads.filter((ad) => ad.id !== action.payload.id),
                isLoading: false,
            }
        default:
            return state
    }
}

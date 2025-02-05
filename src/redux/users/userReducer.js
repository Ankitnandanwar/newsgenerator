import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./userType"

const initialState = {
    loading: false,
    news: [],
    error: ''
}


const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER_REQUEST:
            return {
                ...state,
                loading: true,
                error: ''
            }

        case FETCH_USER_SUCCESS:
            return{
                loading: false,
                news: action.payload,
                error: ''
            }

        case FETCH_USER_FAILURE:
            return {
                loading: false,
                news:[],
                error: action.payload
            }

        default: return state
    }
}

export default userReducer
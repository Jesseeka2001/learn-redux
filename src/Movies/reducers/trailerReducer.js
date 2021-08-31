import { FETCH_TRAILERS } from "../actions/type";

const initialState = {
    items: [], 
}

function trailerReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_TRAILERS:
            return {
                ...state,
                items: action.payload
            }
        default:
            return state
    }
}

export default trailerReducer
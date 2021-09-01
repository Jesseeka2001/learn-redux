import { FETCH_DESCRIPTION } from "../actions/type";

const initialState = {
    items: {}
}

function descReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_DESCRIPTION:
            return {
                ...state,
                items: action.payload
            }
        default:
            return state
    }
}

export default descReducer
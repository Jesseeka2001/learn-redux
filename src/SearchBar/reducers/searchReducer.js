import { SEARCH_RESULTS } from '../actions/types';

const initialState = {
    results: []
}

function searchReducer(state = initialState, action) {
    switch (action.type) {
        case SEARCH_RESULTS:
            return {
                ...state,
                results: action.payload
            }
        default:
            return state;
    }
}

export default searchReducer
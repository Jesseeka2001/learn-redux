import { SORT_BY_POPULARITY, SORT_BY_RATING, SORT_BY_RELEASEDATE } from '../actions/types';


const initialState = {
    rd: [],
    rt: [],
    pop: []
}

function sortReducer(state = initialState, action) {
    switch (action.type) {
        case SORT_BY_RELEASEDATE:
            return {
                ...state,
                rd: action.payload
            }
        case SORT_BY_RATING:
            return {
                ...state,
                rt: action.payload
            }
        case SORT_BY_POPULARITY:
            return {
                ...state,
                pop: action.payload
            }
        default:
            return state;
    }
}

export default sortReducer
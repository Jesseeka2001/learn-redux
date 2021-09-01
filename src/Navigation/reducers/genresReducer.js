import { FETCH_GENRES, HIGHLIGHT, NEW_MOVIES } from '../actions/types';

const initialState = {
    items: [],
    item: [],
    itemt:[]
}

function genresReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_GENRES:
            return {
                ...state,
                items: action.payload
            }
        case NEW_MOVIES:
            return {
                ...state,
                item: action.payload
            }
        case HIGHLIGHT:
            return {
                ...state,
                itemt: action.payload
            }
        default:
            return state;
    }
}

export default genresReducer
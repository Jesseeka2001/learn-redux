import { SET_GENRE } from '../actions/types';


function counter(state = [], action) {
    switch (action.type) {
        case SET_GENRE:
            return action.payLoad;
        default:
            return state
    }
}

export default counter
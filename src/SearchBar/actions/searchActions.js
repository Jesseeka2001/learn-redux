import { searchURL } from "../../const"
import { SEARCH_RESULTS} from "./types"

export const search_results = (props) => dispatch => {
    fetch(`${searchURL}&query=${props}`)
        .then(res => res.json())
        .then(movies => dispatch({
            type: SEARCH_RESULTS,
            payload: movies.results
        }))
        .catch(error => console.log('Error fetching searched movies: ' + error))
}


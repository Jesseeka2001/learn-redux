import { SEARCH_RESULTS} from "./types"

export const search_results = (props) => dispatch => {
    fetch(`${process.env.REACT_APP_BASE_URL}/search/movie?${process.env.REACT_APP_API_KEY}&query=${props}`)
        .then(res => res.json())
        .then(movies => dispatch({
            type: SEARCH_RESULTS,
            payload: movies.results
        }))
        .catch(error => console.log('Error fetching searched movies: ' + error))
}


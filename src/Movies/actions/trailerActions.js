import { FETCH_TRAILERS } from './type';
import { BASE_URL, API_KEY } from '../../const';


export const fetchTrailers = (props) => dispatch => {
        fetch(`${BASE_URL}/movie/${props}/videos?${API_KEY}`)
        .then(res => res.json())
        .then(trailer => {dispatch({
            type: FETCH_TRAILERS,
            payload: trailer.results
        } );
         })
        .catch(error => console.log('Error fetching trailer: ' + error))
}
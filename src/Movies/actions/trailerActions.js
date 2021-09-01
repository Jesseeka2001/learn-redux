import { FETCH_TRAILERS } from './type';


export const fetchTrailers = (props) => dispatch => {
        fetch(`${process.env.REACT_APP_BASE_URL}/movie/${props}/videos?${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then(trailer => {dispatch({
            type: FETCH_TRAILERS,
            payload: trailer.results
        } );
         })
        .catch(error => console.log('Error fetching trailer: ' + error))
}
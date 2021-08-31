import { FETCH_DESCRIPTION } from './type';
import { BASE_URL, API_KEY } from '../../const';

export const fetchDesc = (props) => dispatch => {
        fetch(`${BASE_URL}/movie/${props}?${API_KEY}`)
        .then(res => res.json())
        .then(desc => {dispatch({
            type: FETCH_DESCRIPTION,
            payload: desc
        } );
         })
        .catch(error => console.log('Error fetching trailer: ' + error))
}
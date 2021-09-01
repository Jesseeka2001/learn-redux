import { FETCH_DESCRIPTION } from './type';

export const fetchDesc = (props) => dispatch => {
        fetch(`${process.env.REACT_APP_BASE_URL}/movie/${props}?${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then(desc => {dispatch({
            type: FETCH_DESCRIPTION,
            payload: desc
        } );
         })
        .catch(error => console.log('Error fetching trailer: ' + error))
}
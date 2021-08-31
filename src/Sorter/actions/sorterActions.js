import { releaseDates_URL, popularity_URL, rating_URL } from "../../const"
import { SORT_BY_RATING, SORT_BY_POPULARITY, SORT_BY_RELEASEDATE } from "./types"

export const ratingSort = () => dispatch => {
    fetch(rating_URL)
        .then(res => res.json())
        .then(movies => dispatch({
            type: SORT_BY_RATING,
            payload: movies.results
        }))
        .catch(error => console.log('Error fetching genres: ' + error))
}


export const popularitySort = () => dispatch => {
    fetch(popularity_URL)
        .then(res => res.json())
        .then(movies => dispatch({
            type: SORT_BY_POPULARITY,
            payload: movies.results
        }))
        .catch(error => console.log('Error fetching genres: ' + error))
}

export const releaseDateSort = () => dispatch => {
    fetch(releaseDates_URL)
        .then(res => res.json())
        .then(movies => dispatch({
            type: SORT_BY_RELEASEDATE,
            payload: movies.results
        }))
        .catch(error => console.log('Error fetching genres: ' + error))
}
import { SORT_BY_RATING, SORT_BY_POPULARITY, SORT_BY_RELEASEDATE } from "./types"

export const ratingSort = () => dispatch => {
    fetch(`${process.env.REACT_APP_BASE_URL}/discover/movie?sort_by=vote_average.desc&vote_count.gte=5000&${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then(movies => dispatch({
            type: SORT_BY_RATING,
            payload: movies.results
        }))
        .catch(error => console.log('Error fetching genres: ' + error))
}


export const popularitySort = () => dispatch => {
    fetch(`${process.env.REACT_APP_BASE_URL}/discover/movie?sort_by=popularity.desc&vote_average.gte=1.5&${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then(movies => dispatch({
            type: SORT_BY_POPULARITY,
            payload: movies.results
        }))
        .catch(error => console.log('Error fetching genres: ' + error))
}

export const releaseDateSort = () => dispatch => {
    fetch(`${process.env.REACT_APP_BASE_URL}/discover/movie?sort_by=primary_release_date.desc&vote_average.gte=6&primary_release_date.lte=2021-12-30&vote_count.gte=30&${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then(movies => dispatch({
            type: SORT_BY_RELEASEDATE,
            payload: movies.results
        }))
        .catch(error => console.log('Error fetching genres: ' + error))
}
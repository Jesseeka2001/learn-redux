export const API_KEY = 'api_key=5b6e6406d9a0fb2859535c275f83e448';
export const BASE_URL = 'https://api.themoviedb.org/3';


export const searchURL = BASE_URL + '/search/movie?' + API_KEY;
export const rating_URL = BASE_URL + '/discover/movie?sort_by=vote_average.desc&vote_count.gte=5000&' + API_KEY;
export const popularity_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&vote_average.gte=1.5&' + API_KEY;
export const releaseDates_URL = BASE_URL +
    '/discover/movie?sort_by=primary_release_date.desc&vote_average.gte=6&primary_release_date.lte=2021-12-30&vote_count.gte=30&' + API_KEY;


export const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&vote_average.gte=0.5&' + API_KEY;
export const IMG_URL = 'https://image.tmdb.org/t/p/w500';
export const ERR_IMG = "http://via.placeholder.com/1080x1580"
export const YTB='https://www.youtube.com/embed/'
export const GENRE_LIST= BASE_URL + '/genre/movie/list?' + API_KEY 

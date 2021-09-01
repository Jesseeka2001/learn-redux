import { combineReducers } from 'redux';
import genresReducer from './Navigation/reducers/genresReducer';
import counter from './Navigation/reducers/counter';
import trailerReducer from './Movies/reducers/trailerReducer'
import sortReducer from './Sorter/reducers/sortReducer';
import descReducer from './Movies/reducers/descReducer';
import searchReducer from './SearchBar/reducers/searchReducer';

export default combineReducers({
    genres: genresReducer ,
    counter:counter,
    trailer: trailerReducer,
    sort:sortReducer,
    description: descReducer,
    search: searchReducer

});

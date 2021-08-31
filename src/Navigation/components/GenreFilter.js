import { React, useEffect } from 'react';
import { updatedMovieList } from '../actions/genreActions'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import MovieList from '../../Movies/components/MovieList';
import Sorter from '../../Sorter/components/Sorter'
import Search from '../../SearchBar/components/Search';

const GenreFilter = (props) => {
    useEffect(() => {
        props.updatedMovieList(props.counter)
    }, [props])

    return (
        <div>
            <Sorter />
            <Search />
            <MovieList data={props.movies} />
        </div>
    )
}

GenreFilter.propTypes = {
    updatedMovieList: PropTypes.func.isRequired,
    movies: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    movies: state.genres.item,
    counter: state.counter
})

export default connect(mapStateToProps, { updatedMovieList })(GenreFilter)
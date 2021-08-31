import { React, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import MovieList from '../../Movies/components/MovieList';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { popularitySort } from '../actions/sorterActions';

const Popularity = (props) => {
    useEffect(() => {
        props.popularitySort();
    }, [props])

    return (
        <div>
            <Link to={'/'}>
                <Button>Return Home</Button>
            </Link>
            <h1 className="no-results">Sorted by Popularity</h1>
            <MovieList data={props.movies} />
        </div>
    )
}

Popularity.propTypes = {
    popularitySort: PropTypes.func.isRequired,
    movies: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    movies: state.sort.pop,
})

export default connect(mapStateToProps, { popularitySort })(Popularity)
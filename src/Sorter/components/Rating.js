import { useEffect } from 'react';
import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import MovieList from '../../Movies/components/MovieList';
import {PropTypes} from 'prop-types'
import {connect} from 'react-redux'
import { ratingSort } from '../actions/sorterActions';

const Rating=(props) =>{
    useEffect(() => {
        props.ratingSort()
    }, [props])


    return (
        <div>
            <Link to={'/'}>
                <Button>Return Home</Button>
            </Link>
            <h1 className="no-results">Sorted by Release Dates</h1>
            <MovieList data={props.movies}/>
        </div>

    )
}

Rating.propTypes = {
    ratingSort: PropTypes.func.isRequired,
    movies: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    movies: state.sort.rt,
})

export default connect(mapStateToProps, { ratingSort })(Rating)
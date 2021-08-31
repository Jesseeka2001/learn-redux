import { React, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import MovieList from '../../Movies/components/MovieList';
import {releaseDateSort} from '../actions/sorterActions';
import {PropTypes} from 'prop-types'
import {connect} from 'react-redux'

const ReleaseDates=(props) =>{
    useEffect(() => {
        props.releaseDateSort()
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

ReleaseDates.propTypes = {
    releaseDateSort: PropTypes.func.isRequired,
    movies: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    movies: state.sort.rd,
})

export default connect(mapStateToProps, { releaseDateSort })(ReleaseDates)
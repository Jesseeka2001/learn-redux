import React, { useEffect } from 'react'
import Search from './Search';
import '../styling/search.css'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import MovieList from '../../Movies/components/MovieList';
import { search_results } from '../actions/searchActions'
import {PropTypes} from 'prop-types'
import {connect} from 'react-redux'

function SearchResults(props) {
    useEffect(() => {
        props.search_results(props.id)
    }, [props])


    if (props.movies ==0) {
        return (
            <div>
                <Link to={'/'}>
                    <Button>Return Home</Button>
                </Link>
                <Search />
                <h1 className="no-results"> No Results</h1>
            </div>

        )
    } else {
        return (
            <div>
                <Link to={'/'}>
                    <Button>Home</Button>
                </Link>
                <Search/>
                <MovieList data={props.movies} />
            </div>
        )
    }
}

SearchResults.propTypes = {
    search_results: PropTypes.func.isRequired,
    movies: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    movies: state.search.results,
})

export default connect(mapStateToProps, { search_results })(SearchResults)
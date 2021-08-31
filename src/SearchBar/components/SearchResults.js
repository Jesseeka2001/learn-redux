import React, { useState, useEffect } from 'react'
import Search from './Search';
import '../styling/search.css'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import MovieList from '../../Movies/components/MovieList';


function SearchResults(params) {
    useEffect(() => {

        async function fetchItem() {
            const data = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=5b6e6406d9a0fb2859535c275f83e448&query=${params.id}`)

            const items = await data.json();
            setData(items.results)
        }
        fetchItem();
    }, [params])

    const [data, setData] = useState([]);
    if (data === null) {
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
                <MovieList data={data} />
            </div>
        )
    }
}

export default SearchResults

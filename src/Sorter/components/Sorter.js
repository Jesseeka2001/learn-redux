import '../styling/sorter.css'
import { Link } from 'react-router-dom';
import React from 'react'

const Sorter = () => {
    return (
        <div id="sort">
            <button className="btn"> Sort by: </button>
            <Link to={`/Sort_by/Rating`}>
                <button className="sort"  >   Best Rated          </button>
            </Link>
            <Link to={`/Sort_by/Release_dates`} >
                <button className="sort" >   Latest Release Dates </button>
            </Link>
            <Link to={`/Sort_by/Popularity`}>
                <button className="sort"  >  Popularity          </button>
            </Link>
        </div>
    )
}

export default Sorter

import React from 'react'
import { IMG_URL, ERR_IMG } from '../../const'
import '../styling/movies.css'
import Overview from './Overview'

const MovieList = (props) => {


    const getColor = (vote) => {
        switch (true) {
            case (vote >= 8): return `green`;
            case (vote >= 5): return 'orange';
            default: return 'red';
        }
    }


    if(props.data==0){
        return( 
            <h1 className='no-results'> No results</h1>
        )
    }
    return (
        <div>
            <div className="main">
                {props.data && props.data.map(item => (
                    <div className="movie" key={item.id}>
                        <div className="infos">
                            <img src={item.poster_path ? IMG_URL + item.poster_path : ERR_IMG} alt={item.title} />
                            <div className="movie-info">
                                <h3>{item.title}</h3>
                                <span className={getColor(item.vote_average)}>{item.vote_average}</span>
                            </div>
                            <Overview data={item} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MovieList

import { Link } from 'react-router-dom'
import React from 'react'

const Overview = (props) => {
    return (
        <div className="overview" key={props.data.id}>
            <h6>{props.data.release_date}</h6>
            <h3> Overview</h3>
            <p> {props.data.overview}</p>
            <Link to={`/Trailer/${props.data.id}`} key={props.data}>
                <button className='trailer' > Movie Trailer </button>
            </Link>
            <Link to={`/Description/${props.data.id}`} key={props.data.id}>
                <button className='know-more' > Know More </button>
            </Link>
        </div>
    )
}

export default Overview

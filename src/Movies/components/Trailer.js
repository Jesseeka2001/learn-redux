import { React, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { YTB } from '../../const';
import { fetchTrailers } from '../actions/trailerActions'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const Trailer = (props) => {

    useEffect(() => {
        props.fetchTrailers(props.id)
    }, [props])

    return (
        <div >
            <Link to={`/`} >
                <button className="closebtnt" > &times; </button>
            </Link>
            {props.trailer.map(movie =>
                <div className="overlay-content" id="overlay-content" key={movie.id}>
                    <iframe width="560" height="315" src={YTB + movie.key} title={movie.name}
                        className="embed" frameBorder="0" allow='accelerometer; autoplay; clipboard-write; 
                                encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
                </div>
            )}
        </div>
    )
}

Trailer.propTypes = {
    fetchTrailers: PropTypes.func.isRequired,
    trailer: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    trailer: state.trailer.items

})

export default connect(mapStateToProps, { fetchTrailers })(Trailer)

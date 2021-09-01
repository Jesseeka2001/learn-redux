import { React, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchDesc } from '../actions/descActions';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const Description = (props) => {
    useEffect(() => {
        props.fetchDesc(props.id)
    }, [props]);


    const getColor = (vote) => {
        switch (true) {
            case (vote >= 8): return `green`;
            case (vote >= 5): return 'orange';
            default: return 'red';
        }
    }



    const movie = props.desc;
    return (
        <div>
            <div id="myNav2" className="overlay2">
                <Link to={`/`} >
                    <button className="closebtn"  > &times; </button>
                </Link>
                <div className="overlay-content2" id="overlay-content2">
                    <img src={movie.poster_path ? process.env.REACT_APP_IMG_URL + movie.poster_path : process.env.REACT_APP_ERR_IMG} className="poster" alt="frf" />
                    <div className="title">     {movie.original_title}
                        <span className={getColor(movie.vote_average)}> {movie.vote_average}</span>
                    </div>
                    <div className="date">      {movie.release_date}       </div><br />
                    <div className="desc"> Overview: <br />  <p>{movie.overview} </p>              </div> <br />
                    <div className="rated">     {movie.adult ? `Rated R` : `General Audience`} </div>
                    <div className="lang">  Language:             {movie.original_language}  </div>
                </div>
            </div>


        </div>
    )
}
Description.propTypes = {
    fetchDesc: PropTypes.func.isRequired,
    desc: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    desc: state.description.items

})

export default connect(mapStateToProps, { fetchDesc })(Description)

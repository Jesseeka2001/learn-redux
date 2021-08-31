import { useState, useEffect, useCallback } from 'react'
import { useDispatch } from 'react-redux';
import GenreFilter from './GenreFilter'
import { fetchGenres, setGenre } from '../actions/genreActions';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import '../styling/navigation.css'
import {highlightSelection} from '../actions/highlightSelection'


const Genres = (props) => {
    const dispatch = useDispatch()
    const [current, setCurrent] = useState([])

    useEffect(() => {
        props.fetchGenres()
    }, [props])


    const onToggleGenre = useCallback(
        (item) => {
            let selectedGenre = []
            const index = selectedGenre.indexOf(item);
            if (index > -1) {
                selectedGenre.splice(index, 1);

            } else {
                selectedGenre.push(item);
                // setCurrent([ selectedGenre[0], ...current])
            }
            dispatch(setGenre([...current, selectedGenre[0]]))
            setCurrent([...current, selectedGenre[0]])
            props.highlightSelection([...current, selectedGenre[0]])

        },
        [current, dispatch]
    )

    // usecallback
    // function highlightSelection() {
    //     const tags = document.querySelectorAll('.tag');

    //     tags.forEach(tag => {
    //         tag.classList.remove('highlight')
    //     })
    //     if (current.length !== 0) {
    //         current.forEach(id => {
    //             const hightlightedTag = document.getElementById(id);
    //             hightlightedTag.classList.add('highlight');
    //         })
    //     }
    // }

    return (
        <div>
            <div className="header" >
                <div id="genr">
                    <button className="genre">   Genre </button>
                    {props.genres.map(item => (
                        <div key={item.id} >
                            <button className='tag' id={item.id}
                                onClick={() => {
                                    onToggleGenre(item.id);
                                }
                                }>
                                {item.name}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            <GenreFilter />
        </div>
    );
}

Genres.propTypes = {
    fetchGenres: PropTypes.func.isRequired,
    highlightSelection:PropTypes.func.isRequired,
    genres: PropTypes.array.isRequired,
    // newPost: PropTypes.object
}
const mapStateToProps = state => ({
    genres: state.genres.items
})

export default connect(mapStateToProps, { fetchGenres, highlightSelection })(Genres);


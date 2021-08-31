import '../styling/search.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import React from 'react'

const Search=() =>{
    const [value, setValue] = useState([])


    const handleChange=(event) => {
        setValue( event.target.value);
    }

    const handleSubmit=(event)=> {
        event.preventDefault();
    }

    return (
        <div>

            <form onSubmit={handleSubmit} id="form" >
                <label>
                    <input
                        type="text"
                        className="search"
                        placeholder="Search Movie Title..."
                        value={value}
                        onChange={handleChange} />
                </label>

                <Link to={`/Search/${value}`} key={value}>
                    <input type="submit" value="" style={{
                        backgroundColor: "transparent",
                        padding: "1px",
                        border: 'none'
                    }} />

                </Link>

            </form>

        </div>
    )
}

export default Search

import '../styling/search.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import React from 'react'
import { Button } from 'react-bootstrap'

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
                    <Button type="submit" value="submit" style={{
                        backgroundColor: "#2f87b9",
                        padding: "12px",
                        fontSize: '12px',
                        marginLeft: '15rem'

                    }} > Submit</Button>

                </Link>

            </form>

        </div>
    )
}

export default Search

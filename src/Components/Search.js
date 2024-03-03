import React from 'react';
import { useNavigate } from 'react-router-dom';

//search component
const Search = () => {
    //define navigate to navigate through pages
    const navigate = useNavigate();

    //hanndle changes when type on the search input box
    const handleChange = ev => {
        navigate('/search?s=' + ev.target.value);
    }
    return (
        <div id='search'>
            <label>Search</label>
            <input type='text' name='search' onChange={handleChange} />
        </div>
    )
}

export default Search
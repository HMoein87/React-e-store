import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

//search component
const Search = () => {
    //define search term property to use in debouncing
    const [searchTerm, setSearchTerm] = useState('');
    //define navigate to navigate through pages
    const navigate = useNavigate();

    //set timer to fetch data from API every 0.5 seconds 
    useEffect ( () => {
        const delay = setTimeout(() => {
            if (searchTerm) 
                navigate('/search?s=' + searchTerm);
        }, 500);
        
        //clear timout 
        return () => clearTimeout(delay);
    }, [searchTerm, navigate]);

    //hanndle changes when type on the search input box
    const handleChange = ev => {
        setSearchTerm(ev.target.value);
    }
    return (
        <div id='search'>
            <label>Search</label>
            <input type='text' name='search' onChange={handleChange} />
        </div>
    )
}

export default Search
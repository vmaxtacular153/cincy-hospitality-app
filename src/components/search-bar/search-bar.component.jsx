import React from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import './search-bar.styles.scss';

const SearchBar = () => {
    return (
        <div className='search-container'>
            <h2 className='search-title'>Search your favorite places here</h2>
            <p>Find places by name, type of business, neighborhood, outdoording etc..</p>
            <InputGroup className='search-bar'>
                <FormControl
                    placeholder='Search Here'
                    aria-label='Search Here'
                    aria-describedby='basic-addon2'
                />
                <InputGroup.Append>
                    <Button
                    type='button' 
                    className='btn btn-outline-secondary'>Search</Button>
                </InputGroup.Append>
            </InputGroup>
        </div>
    )
}

export default SearchBar;
import React from 'react';
import './button.styles.scss';
import { Button } from 'react-bootstrap';

const MainButton = () => {
    return (
        <Button varient='secondary' className='main-button'>Search</Button>
    )
}

export default MainButton;
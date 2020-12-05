import React from 'react';
import './button.styles.scss';
import { Button } from 'react-bootstrap';

const MainButton = () => {
    return (
        <Button varient='secondary' className='main-button'>Click Me</Button>
    )
}

export default MainButton;
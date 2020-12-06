import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import './header.styles.scss';

const Header = () => {
    return (
        <Jumbotron
        className='jumbotron-container' 
        fluid
        >
            <Container className='header-container'>
                <h1 className='header-title'>Cincy Hospitality</h1>
                <p className='header-tagline'>Connecting you to local businesses of Cincinnati</p>
            </Container>
        </Jumbotron>
    )
}

export default Header;
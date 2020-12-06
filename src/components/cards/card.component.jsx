import React from 'react';
import './card.styles.scss';
import { Card, Button } from 'react-bootstrap';

const FandBCard = () => {
    return (
        <Card style={{ width: '18rem' }} className='full-card mb-4'>
            <Card.Body variant="top" className='bd-placeholder-img card-img-top' />
            <Card.Body>
                <Card.Title>Restaurant Name</Card.Title>
                <Card.Text>
                    Information about the restaurant and more text to fill everything
                    and then even more stuff for a few extra lines
                    </Card.Text>
                    <Button variant="secondary" className='card-button'>website</Button>
            </Card.Body>
        </Card>
    )
}

export default FandBCard;
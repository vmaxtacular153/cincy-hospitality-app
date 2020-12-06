import React from 'react';
import FandBCard from '../components/cards/card.component';
import './card-container.styles.scss';

const CardContainer = () => {
    return (
        <div className='card-container'>
            <FandBCard />
            <FandBCard />
            <FandBCard />
            <FandBCard />
            <FandBCard />
            <FandBCard />
        </div>
    )
}

export default CardContainer;
import React from 'react';
import clock from '../../../assests/icons/clock.svg'
import phone from '../../../assests/icons/phone.svg'
import marker from '../../../assests/icons/marker.svg'
import InfoCard from './InfoCard';
const InfoCards = () => {
    const cardData = [
        {
            id: 1,
            name: 'Opening Hours',
            description: 'Open 9.00am to 5pm everyday',
            icon: clock,
            bgClass: 'bg-primary',
        },
        {
            id: 2,
            name: 'Visit our location',
            description: 'Brooklyn, NY 10036, United States',
            icon: marker,
            bgClass: 'bg-black',
        },
        {
            id: 3,
            name: 'Contact us now',
            description: '+000 123 456789',
            icon: phone,
            bgClass: 'bg-primary',
        },
    ]
    return (
        <div className='grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 mt-6'>
            {
                cardData.map(card=> <InfoCard
                    key={card.id}
                    card={card}
                />)
            }
        </div>
    );
};

export default InfoCards;
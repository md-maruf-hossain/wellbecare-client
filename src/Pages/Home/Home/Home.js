import React from 'react';
import InfoCards from '../InfoCards/InfoCards';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Testimonial from '../Testimonial/Testimonial';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div>
            <Banner/>
            <InfoCards/>
            <Services/>
            <MakeAppointment/>
            <Testimonial/>
            <Contact/>
        </div>
    );
};

export default Home;
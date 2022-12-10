import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';

const AvailableAppointment = ({selectedDate, setselectedDate}) => {
    const [appointmentOptions, setAppointmentOptions] = useState([]);
    useEffect( () =>{
        fetch('services..json')
        .then(res => res.json())
        .then(data=> setAppointmentOptions(data))
    }, []);
    return (
        <section className='mt-6'>
            <p className='text-center text-xl text-primary'>Available Appointments on {format(selectedDate, "PP")}</p>
            <div>

            </div>
        </section>
    );
};

export default AvailableAppointment;
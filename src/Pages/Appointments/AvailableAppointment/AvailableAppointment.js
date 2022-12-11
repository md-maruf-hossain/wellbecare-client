import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Booking from '../Booking/Booking';
import AppointmentOption from './AppointmentOption';

const AvailableAppointment = ({selectedDate, setselectedDate}) => {
    const [appointmentOptions, setAppointmentOptions] = useState([]);
    const [treatment, setTreatment] = useState(null);

    



    useEffect( () =>{
        fetch('http://localhost:5000/appointmentOptions')
        .then(res => res.json())
        .then(data=> setAppointmentOptions(data))
    }, []);
    return (
        <section className='mt-6'>
            <p className='text-center text-xl text-primary'>Available Appointments on {format(selectedDate, "PP")}</p>
            <div className='grid gap-6 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
                {
                    appointmentOptions.map(appointmentOption => <AppointmentOption
                        key={appointmentOption.id}
                        appointmentOption={appointmentOption}
                        setTreatment={setTreatment}
                    />)
                }
            </div>
            {
                treatment && 
                <Booking 
                    treatment={treatment}
                    selectedDate={selectedDate}
                    setTreatment={setTreatment}
                />
            }
        </section>
    );
};

export default AvailableAppointment;
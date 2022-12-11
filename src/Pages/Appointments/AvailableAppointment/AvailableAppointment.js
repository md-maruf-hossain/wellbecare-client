import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import Loading from '../../Shared/Loading/Loading';
import Booking from '../Booking/Booking';
import AppointmentOption from './AppointmentOption';

const AvailableAppointment = ({selectedDate, setselectedDate}) => {

    const [treatment, setTreatment] = useState(null);
    const date = format(selectedDate, "PPP");
    const {data:appointmentOptions = [], refetch, isLoading} = useQuery({
        queryKey:['appointmentOptions'],
        queryFn:()=>fetch(`http://localhost:5000/appointmentOptions?date=${date}`)
        .then(res => res.json())
    });
    if(isLoading){
        return <Loading/>
    }

    return (
        <section className='mt-6'>
            <p className='text-center text-xl text-primary'>Available Appointments on {format(selectedDate, "PP")}</p>
            <div className='grid gap-6 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
                {
                    appointmentOptions.map(appointmentOption => <AppointmentOption
                        key={appointmentOption._id}
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
                    refetch={refetch}
                />
            }
        </section>
    );
};

export default AvailableAppointment;
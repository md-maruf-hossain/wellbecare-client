import React, { useState } from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AvailableAppointment from '../AvailableAppointment/AvailableAppointment';

const Appointment = () => {
    const [selectedDate, setselectedDate] = useState(new Date());

    return (
        <div>
            <AppointmentBanner selectedDate={selectedDate} setselectedDate={setselectedDate}/>
            <AvailableAppointment selectedDate={selectedDate} setselectedDate={setselectedDate}/>
        </div>
    );
};

export default Appointment;
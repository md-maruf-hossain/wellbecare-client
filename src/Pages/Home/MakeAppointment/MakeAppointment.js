import React from "react";
import doctor from '../../../assests/images/doctor.png'
import appointment from "../../../assests/images/appointment.png"
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";

const MakeAppointment = () => {
  return (
    <section className="mt-32" >
      <div className="hero bg-base-200" style={{backgroundImage: `url(${appointment})`}}>
        <div className="hero-content flex-col lg:flex-row" style={{}}>
          <img src={doctor} alt='' className="lg:w-1/2 -mt-32 lg:block hidden" />
          <div>
            <h1 className="text-2xl text-primary font-bold mb-6">Appointment</h1>
            <h1 className="text-5xl font-bold text-white">Make an appointment Today</h1>
            <p className="py-6 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <PrimaryButton>Getting Started</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;

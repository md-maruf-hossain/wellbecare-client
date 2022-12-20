import React from "react";

const AppointmentOption = ({ appointmentOption, setTreatment }) => {
  const { name, price, slots } = appointmentOption;
  return (
    <div className="card shadow-xl my-10">
      <div className="card-body text-center">
        <h2 className="text-sec text-2xl font-semibold">{name}</h2>
        <p>{slots.length > 0 ? slots[0] : "Try another Day"}</p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available.{" "}
        </p>
        <p>
          Price: $<span>{price}</span>
        </p>
        <div className="card-actions justify-center">
          <label
            htmlFor="booking"
            disabled={slots.length === 0}
            className="btn btn-primary text-white"
            onClick={() => setTreatment(appointmentOption)}
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;

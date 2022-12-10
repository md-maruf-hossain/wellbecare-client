import { format } from "date-fns";
import React from "react";

const Booking = ({treatment, selectedDate, setTreatment}) => {
    const {name, slots} = treatment;
    const date = format(selectedDate, 'PPP');

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const slot = form.slot.value;
        const phone = form.phone.value;
        const booking = {
            appointmentDate: date,
            treatment: name,
            patientName: name,
            slot,
            email,
            phone,

        }
        console.log(booking);
        setTreatment(null)
    }
  return (
    <>
      <input type="checkbox" id="booking" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="booking" className="btn btn-sm btn-circle absolute right-2 top-2">
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form onSubmit={handleBooking} className="grid grid-cols-1 gap-5 mt-10">
            <input type="text" value={date} disabled className="input input-bordered w-full" />
            <select name="slot" className="select select-bordered w-full">
                <option disabled selected>Select</option>
                {
                    slots.map((slot, index)=><option key={index} value={slot}>{slot}</option>)
                }
            </select>
            <input name="name" type="text" placeholder="Your Name" className="input input-bordered w-full" required/>
            <input name="email" type="email" placeholder="Email Address" className="input input-bordered w-full" required/>
            <input name="phone" type="text" placeholder="Phone Number" className="input input-bordered w-full" required/>
            <input type="submit" value="submit" className="btn btn-success input-bordered w-full" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Booking;

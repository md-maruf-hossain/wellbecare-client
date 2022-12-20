import { format } from "date-fns";
import React, { useContext } from "react";
import { toast, Toaster } from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider";

const Booking = ({ treatment, selectedDate, setTreatment, refetch }) => {
  const { name, slots, price } = treatment;
  const date = format(selectedDate, "PPP");
  const { user } = useContext(AuthContext);

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const slot = form.slot.value;
    const phone = form.phone.value;
    const booking = {
      appointmentDate: date,
      treatment: treatment.name,
      patientName: name,
      slot,
      email,
      phone,
      price,
    };
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          setTreatment(null);
          toast.success("Booking Confirmed");
          refetch();
        } else {
          toast.error(data.message);
        }
      });
  };
  return (
    <>
      <input type="checkbox" id="booking" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-5 mt-10"
          >
            <input
              type="text"
              value={date}
              disabled
              className="input input-bordered w-full"
            />
            <select name="slot" className="select select-bordered w-full">
              <option disabled selected>
                Select
              </option>
              {slots.map((slot, index) => (
                <option key={slot.id} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <Toaster />
            <input
              name="name"
              defaultValue={user?.displayName}
              disabled
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full"
              required
            />
            <input
              name="email"
              defaultValue={user?.email}
              disabled
              type="email"
              placeholder="Email Address"
              className="input input-bordered w-full"
              required
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input input-bordered w-full"
              required
            />
            <input
              type="submit"
              value="submit"
              className="btn btn-success input-bordered w-full"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Booking;

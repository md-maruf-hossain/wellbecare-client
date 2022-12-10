import React from "react";
import banner from "../../../assests/banner.jpg";
import { DayPicker } from "react-day-picker";

const AppointmentBanner = ({selectedDate, setselectedDate}) => {

  return (
    <header className="mr-6">
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={banner} className="max-w-sm rounded-lg shadow-2xl" alt="" />
          <div className="mr-6">
            <DayPicker mode="single" selected={selectedDate} onSelect={setselectedDate} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppointmentBanner;

import React from "react";
import banner from "../../../assests/banner.jpg"
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";
const Banner = () => {
  return (
    <div className="hero bg-success bg-opacity-20 p-10">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={banner} className="w-1/2 rounded-lg" alt="banner" />
        <div>
          <h1 className="text-5xl font-bold">WellBe Care</h1>
          <p className="py-6 text-5xl">Bringing you the Highest quality Dental Care.</p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;

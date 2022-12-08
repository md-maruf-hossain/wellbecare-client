import React from "react";
import banner from "../../../assests/banner.png"
const Banner = () => {
  return (
    <div className="hero bg-success bg-opacity-30 p-10">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={banner} className="w-1/2 rounded-lg" alt="banner" />
        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <button className="btn btn-primary text-white">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

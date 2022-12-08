import React from "react";

const Reviews = ({ r }) => {
  const { name, review, location, image } = r;
  return (
    <section>
      <div className="card shadow-xl">
        <div className="card-body">
          <p>{review}</p>
          <div className="flex gap-6 mt-6">
            <div className="avatar">
              <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={image} alt=''/>
              </div>
            </div>
              <div>
                <p>{name}</p>
                <p>{location}</p>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;

import React from "react";
import quote from "../../../assests/icons/quote.svg";
import people1 from "../../../assests/images/people1.png";
import people2 from "../../../assests/images/people2.png";
import people3 from "../../../assests/images/people3.png";
import Reviews from "./Reviews";

const Testimonial = () => {
  const reviews = [
    {
      id: 1,
      name: "Maruf Hossain",
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      location: "Dhaka",
      image: people1,
    },
    {
      id: 2,
      name: "Alex Morgan",
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      location: "USA",
      image: people2,
    },
    {
      id: 1,
      name: "Dua Lipa",
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      location: "Brazil",
      image: people3,
    },
  ];

  return (
    <section className="mt-10">
      <div className="flex justify-between">
        <div>
          <h3 className="text-2xl text-primary font-bold">Testimonial</h3>
          <h3 className="text-4xl mt-3">What Our Patients Says</h3>
        </div>
        <figure>
          <img src={quote} className="lg:w-48 w-24" alt="" />
        </figure>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 mt-6">
        {reviews.map((r) => (
          <Reviews key={r.id} r={r} />
        ))}
      </div>
    </section>
  );
};

export default Testimonial;

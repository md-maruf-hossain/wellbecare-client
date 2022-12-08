import React from "react";
import fluoride from "../../../assests/images/fluoride.png";
import cavity from "../../../assests/images/cavity.png";
import whitening from "../../../assests/images/whitening.png";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const cardData = [
    {
      id: 1,
      name: "Fluoride Treatment",
      description:
        "Fluoride is an inorganic, monatomic anion of fluorine, with the chemical formula F⁻ , whose salts are typically white or colorless. Fluoride salts typically have distinctive bitter tastes, and are odorless.",
      icon: fluoride,
    },
    {
      id: 2,
      name: "Cavity Filling",
      description:
        "Dental restoration, dental fillings, or simply fillings are treatments used to restore the function, integrity, and morphology of missing tooth structure resulting from caries or external trauma as well as to the replacement of such structure supported by dental implants.",
      icon: cavity,
    },
    {
      id: 3,
      name: "Teeth Whitening",
      description:
        "Tooth whitening or tooth bleaching is the process of lightening the color of human teeth. Whitening is often desirable when teeth become yellowed over time for a number of reasons, and can be achieved by changing the intrinsic or extrinsic color of the tooth enamel.",
      icon: whitening,
    },
  ];

  return (
    <div className="mt-16 flex flex-col items-center">
      <div className="text-center">
        <h2 className="text-success text-3xl font-semibold uppercase">Our Services</h2>
        <h2 className="text-4xl">Services We Provide</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 mt-6">
        {
            cardData.map(card=> <ServiceCard
                key={card.id}
                card={card}
            />)
        }
      </div>
    </div>
  );
};

export default Services;

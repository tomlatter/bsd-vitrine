import React from 'react';
import "@smastrom/react-rating/style.css";
import { Rating } from "@smastrom/react-rating";

const InstructorsCard = ({staff}) => {
    const { name, image, designation, disciplines  } = staff;
    return (
      <div className="card card-compact max-w-md  shadow-xl">
        <figure>
          <img
            className="w-96 h-96 object-cover hover:grayscale transition-all duration-300"
            src={image}
            alt={name}
            title={name}
          />
        </figure>
        <div className="card-body text-majenta-800 dark:text-white">
          <h2 className="card-title ">{name}</h2>
          <p className="-mt-4">{designation}</p>
          <br/>
          <p className="-mt-2 text-base">
            <span className="font-semibold"></span> {disciplines}{" "}
          </p>
        </div>
      </div>
    );
};

export default InstructorsCard;
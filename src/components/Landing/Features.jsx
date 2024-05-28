import React from "react";
import moneyImage from "../../images/refugee.jpg";
import { BiWorld } from "react-icons/bi";
import { BsPeace } from "react-icons/bs";
import { FaArrowsDownToPeople } from "react-icons/fa6";

const Features = () => {
  return (
    <section className="bg-primary text-white py-12 font-Poppins">
      <div className="px-32 container mx-auto">
        <div className="flex flex-col md:flex-row items-center mb-12">
          <img
            src={moneyImage}
            alt="Money"
            className="w-full md:w-full max-w-md mb-4 md:mb-0 md:mr-8"
          />
          <div className="flex items-baseline">
            <h2 className="text-sm  mb-4">
              Save homeless people with real & enjoyable action.
            </h2>
            <p className="text-md mb-4">
              <span className="text-2xl">83% </span>
              <br></br>Benefactors saved
            </p>
            <p className="text-sm">
              <span className="text-2xl"> 20 June</span> -<br></br> World
              Refugee Day
            </p>
          </div>
        </div>
      </div>
      <div className="  bg-secondary h-80 flex flex-col items-center md:flex-row text-center md:text-left px-32 ">
        <div className="flex-1 p-4">
          <BiWorld className="w-16 h-16 mx-auto text-primary md:mx-0 mb-4" />
          <h3 className="text-xl text-black font-bold mb-2">Save the World</h3>
          <p className="text-gray-600">
            Each year on June 20, the world celebrates World Refugee Day. This
            year, the focus will be on the right to seek safety in times of
            peril.
          </p>
        </div>

        <div className="flex-1 p-4">
          <BsPeace className="w-16 h-16 mx-auto md:mx-0 mb-4 text-primary" />
          <h3 className="text-xl text-black font-bold mb-2">
            Comfortable Country
          </h3>
          <p className="text-gray-600">
            For many people, country life means a peaceful existence that is
            quieter, cleaner, and closer to the natural world.
          </p>
        </div>
        <div className="flex-1 p-4">
          <FaArrowsDownToPeople className="w-16 h-16 mx-auto md:mx-0 mb-4 text-primary" />
          <h3 className="text-xl text-black font-bold mb-2">
            Humane Treatment
          </h3>
          <p className="text-gray-600">
            People forced to flee should be treated with respect and dignity.
            They are entitled to safety and dignity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;

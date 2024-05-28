import React from "react";
import heroImage1 from "../../images/erhms.png"; // Replace with your image paths

const Hero = () => {
  return (
    <section className="bg-primary text-white py-16 pt-32  px-32 font-Poppins">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-[60px] font-Poppins font-bold mb-4">
            Save the Refugees
          </h1>
          <p className="text-lg mb-6">
            It's time to save the refugees for humanity.
          </p>
          <button className="bg-orange-500 text-white px-6 py-2  rounded text-sm">
            GET STARTED
          </button>
        </div>
        <div className="flex-1 flex justify-center gap-6  ">
          <img
            src={heroImage1}
            alt="Refugees"
            className="w-full filter drop-shadow-md "
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from "react";
import actionImage1 from "../../images/refugee.jpg";
import actionImage2 from "../../images/refugee.jpg";

const Action = () => {
  return (
    <section className="bg-primary text-white font-Poppins px-32 py-12">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center mb-12 gap-10">
          <div className="flex-1">
            <h2 className="text-5xl font-bold mb-4">
              Take Action:<br></br>
              <span className="italic">support the people, all of us</span>
            </h2>
            <p className="text-md mb-6">
              The world has often viewed "never again" in the face of genocide.
              Today, the people of Myanmar are suffering at the hands of a
              regime with a history of genocide.
            </p>
            <button className="bg-orange-500 text-white px-6 py-2 rounded text-sm">
              LEARN MORE
            </button>
          </div>
          <div className="flex-1 flex justify-center gap-5">
            <img src={actionImage1} alt="Action 1" className="w-64 " />
            <img src={actionImage2} alt="Action 2" className="w-64" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Action;

import React from "react";
import supportImage1 from "../../images/refugee.jpg";
import supportImage2 from "../../images/refugee.jpg";

const Support = () => {
  return (
    <section className="bg-white text-black font-Poppins py-12 px-32">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row-reverse items-center mb-12 gap-10  ">
          <div className="flex-1">
            <h2 className="text-5xl font-bold mb-4">
              Help us make a difference
            </h2>
            <p className="text-lg mb-6 italic">
              The war has helped nearly 1500 people build a better future in
              Scotland. Dignity behaviors change lives. Your support will allow
              us to continue helping refugees in Scotland.
            </p>
            <button className="bg-orange-500 text-white px-6 py-2 rounded text-sm">
              LEARN MORE
            </button>
          </div>
          <div className="flex-1 flex justify-center gap-5">
            <img
              src={supportImage1}
              alt="Support 1"
              className="w-64 max-w-md"
            />
            <img
              src={supportImage2}
              alt="Support 2"
              className="w-64 max-w-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;

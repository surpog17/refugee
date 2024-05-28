import React from "react";

const Donation = () => {
  return (
    <section className="bg-primary text-white font-Poppins py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Donation Collected
        </h2>
        <div className="flex justify-center mb-12">
          <button className="bg-orange-500 text-white px-6 py-2 rounded text-sm">
            SEE REPORTS
          </button>
        </div>
        <div className="flex flex-col md:flex-row justify-center text-center">
          <div className="flex-1 p-4">
            <h3 className="text-xl font-bold mb-2">$500</h3>
            <p className="text-white">Goal</p>
          </div>
          <div className="flex-1 p-4">
            <h3 className="text-xl font-bold mb-2">$700</h3>
            <p className="text-white">Raised</p>
          </div>
          <div className="flex-1 p-4">
            <h3 className="text-xl font-bold mb-2">$1000</h3>
            <p className="text-white">Total</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donation;

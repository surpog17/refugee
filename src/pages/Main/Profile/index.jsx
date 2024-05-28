// src/components/ProfilePage.js

import React from "react";

const index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-4xl">
        <img
          src="https://htmlstream.com/preview/unify-v2.6/assets/img-temp/400x450/img5.jpg"
          alt="Profile Picture"
          className="w-32 h-32 rounded-full object-cover mb-4 md:mb-0 md:mr-6"
        />
        <div className="flex flex-col items-center md:flex-row">
          <div className="flex flex-col space-y-4 w-full">
            <div className="flex flex-col">
              <span className="font-semibold">Full Name</span>
              <span>Abebe Kebede</span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold">Phone Number</span>
              <span>0987656432</span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold">Email address</span>
              <span>abebe@gmail.com</span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold">State</span>
              <span>Oromia</span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold">Address</span>
              <span>hsryg</span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold">City</span>
              <span>adama</span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold">Description</span>
              <p>
                I am someone who has been forced to leave my home country due to
                dangerous and life-threatening circumstances. I have fled
                persecution, conflict, or violence and am seeking safety and
                protection in a foreign land. I may have left behind everything
                I knew and loved, facing immense challenges and uncertainties
                along the way.
                <br />
                <br />I am reaching out for assistance because I am in dire need
                of support. I lack access to basic necessities such as food,
                water, shelter, and healthcare. I may be struggling with the
                psychological and emotional scars of my past experiences,
                requiring specialized care and counseling. I am often unfamiliar
                with the new environment, language, and cultural norms, making
                it even more difficult for me to navigate and survive.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;

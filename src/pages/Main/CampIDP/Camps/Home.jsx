import React from "react";
import ActorProfileCard from "../../../../components/Main/CampActorProfileCard";
import { FaUsers } from "react-icons/fa";
import { GrCompliance } from "react-icons/gr";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { NavLink } from "react-router-dom";

function Home({ actorProfileData }) {
  return (
    <div className="px-5 mt-10">
      <main className=" grid grid-cols-12 gap-x-5">
        <div className="col-span-5">
          <ActorProfileCard
            actorProfile={actorProfileData.actor_profile}
            profile={actorProfileData.profile}
          />
        </div>

        <NavLink
          to="IDP"
          className="flex flex-col items-center bg-gray-100  col-span-2"
        >
          <div className="w-full ">
            <div className="bg-white p-4 rounded-lg shadow-md   max-w-xl  text-center ">
              <div className="w-full text-white h-64 object-cover rounded-t-lg mb-4 bg-slate-500 text-4xl capitalize flex items-center justify-center">
                <FaUsers />
              </div>
              <div className="mb-2 grid ">
                <span className="text-black-500">Number of IDPs</span>
                <span className="text-gray-500">10</span>
              </div>
            </div>
          </div>
        </NavLink>
        <NavLink
          to="complain"
          className="flex flex-col items-center bg-gray-100  col-span-3"
        >
          {" "}
          <div className="w-full ">
            <div className="bg-white p-4 rounded-lg shadow-md   max-w-xl  text-center ">
              <div className="w-full text-white h-64 object-cover rounded-t-lg mb-4 bg-slate-500 text-4xl capitalize flex items-center justify-center">
                <GrCompliance />
              </div>
              <div className="mb-2 grid ">
                <span className="text-black-500">Number of Complain</span>
                <span className="text-gray-500">10</span>
              </div>
            </div>
          </div>
        </NavLink>
        <NavLink
          to="IDP"
          className="flex flex-col items-center bg-gray-100  col-span-2"
        >
          <div className="w-full ">
            <div className="bg-white p-4 rounded-lg shadow-md   max-w-xl  text-center ">
              <div className="w-full text-white h-64 object-cover rounded-t-lg mb-4 bg-slate-500 text-4xl capitalize flex items-center justify-center">
                <HiOutlineDocumentReport />
              </div>
              <div className="mb-2 grid ">
                <span className="text-black-500">Number of Report</span>
                <span className="text-gray-500">10</span>
              </div>
            </div>
          </div>
        </NavLink>
      </main>
    </div>
  );
}

export default Home;

import { NavLink } from "react-router-dom";
import host from "./../../../images/hostpng.png";
import refugee from "./../../../images/refugee.png";
import volunteer from "./../../../images/volunteer.png";
import campadmin from "./../../../images/campAdmin.png";
import Ngo from "./../../../images/Ngo.png";
import { IoMdArrowRoundBack } from "react-icons/io";

export default function index() {
  return (
    <div className="min-h-screen bg-blue-500 flex flex-col items-center justify-center text-white font-Poppins">
      <div className="flex justify-center items-center gap-4 mb-8">
        <NavLink
          to="/login"
          className="bg-yellow-500 text-black px-6 py-1 rounded text-xs"
        >
          <div className="">
            <IoMdArrowRoundBack className="inline-block mr-3 text-lg" />I have
            already an account
          </div>
        </NavLink>
        <h1 className="text-2xl font-bold ">Join As</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 px-20">
        <div className="bg-[#3aa4a4] p-6 rounded-lg text-center shadow-xl">
          <img
            src={refugee}
            alt="IDP Icon"
            className="mx-auto mb-4 w-32 h-32"
          />
          <h2 className="text-xl font-bold mb-2">IDP</h2>
          <p className="mb-4 text-xs">
            Internally displaced people are those who flee their homes due to
            conflict, disasters, or violence, but remain within their country's
            borders, facing significant challenges and limited access to
            resources.
          </p>
          <NavLink
            to="/ipdSignup"
            className="bg-yellow-500 text-black px-4 py-2 rounded"
          >
            Sign Up
          </NavLink>
        </div>
        <div className="bg-[#ea7128] p-6 rounded-lg text-center shadow-xl">
          <img
            src={campadmin}
            alt="Host Icon"
            className="mx-auto mb-4 w-32 h-32"
          />
          <h2 className="text-xl font-bold mb-2">Camp Admin</h2>
          <p className="mb-4 text-xs">
            {" "}
            Manages the daily operations and logistics of the refugee camp,
            ensuring a safe and orderly environment.
          </p>
          <NavLink
            to="/admincampSignup"
            className="bg-yellow-500 text-black  px-4 py-2 rounded"
          >
            Sign Up
          </NavLink>
        </div>
        <div className="bg-[#b3b31d] p-6 rounded-lg text-center shadow-xl">
          <img src={host} alt="Host Icon" className="mx-auto mb-4 w-32 h-32" />
          <h2 className="text-xl font-bold mb-2">Host</h2>
          <p className="mb-4 text-xs">
            Provides temporary shelter and support to refugees, fostering a
            welcoming and secure atmosphere.
          </p>
          <NavLink
            to="/hostSignup"
            className="bg-yellow-500 text-black  px-4 py-2 rounded"
          >
            Sign Up
          </NavLink>
        </div>
        <div className="bg-[#ea7128] p-6 rounded-lg text-center shadow-xl">
          <img src={Ngo} alt="Host Icon" className="mx-auto mb-4 w-32 h-32" />
          <h2 className="text-xl font-bold mb-2">NGO</h2>
          <p className="mb-4 text-xs">
            Provides temporary shelter and support to refugees, fostering a
            welcoming and secure atmosphere.
          </p>
          <NavLink
            to="/ngo-Signup"
            className="bg-yellow-500 text-black  px-4 py-2 rounded"
          >
            Sign Up
          </NavLink>
        </div>
        <div className="bg-[#3ba3a4] p-6 rounded-lg text-center shadow-xl">
          <img
            src={volunteer}
            alt="Volunteer Icon"
            className="mx-auto mb-4 w-32 h-32"
          />
          <h2 className="text-xl font-bold mb-2">Volunteer</h2>
          <p className="mb-4 text-xs">
            Assists with various tasks to support refugees, including
            distributing supplies, offering guidance, and providing emotional
            support.
          </p>
          <NavLink
            to="/volunteerSignup"
            className="bg-yellow-500 text-   px-4 py-2 rounded"
          >
            Sign Up
          </NavLink>
        </div>
      </div>
    </div>
  );
}

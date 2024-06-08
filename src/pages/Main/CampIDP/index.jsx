import { NavLink } from "react-router-dom";
import host from "./../../../images/hostpng.png";
import refugee from "./../../../images/refugee.png";
import volunteer from "./../../../images/volunteer.png";
import campadmin from "./../../../images/campAdmin.png";
import { IoMdArrowRoundBack } from "react-icons/io";

export default function index() {
  return (
    <div className="min-h-screen  flex flex-col items-start justify-center text-white font-Poppins">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-20">
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
            to="camps"
            className="bg-yellow-500 text-white  px-4 py-2 rounded"
          >
            See More
          </NavLink>
        </div>
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
            to="idps"
            className="bg-yellow-500 text-white px-4 py-2 rounded"
          >
            See More
          </NavLink>
        </div>
      </div>
    </div>
  );
}

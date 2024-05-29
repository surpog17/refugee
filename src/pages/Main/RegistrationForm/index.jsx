import { NavLink } from "react-router-dom";
import host from "./../../../images/hostpng.png";
import refugee from "./../../../images/refugee.png";
import volunteer from "./../../../images/volunteer.png";
export default function index() {
  return (
    <div className="min-h-screen bg-blue-500 flex flex-col items-center justify-center text-white font-Poppins">
      <h1 className="text-2xl font-bold mb-8">Join As</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-zinc-400 p-6 rounded-lg text-center shadow-xl">
          <img
            src={refugee}
            alt="IDP Icon"
            className="mx-auto mb-4 w-32 h-32"
          />
          <h2 className="text-xl font-bold mb-2">IDP</h2>
          <p className="mb-4">description about IDP situation</p>
          <NavLink
            to="/ipdSignup"
            className="bg-yellow-500 text-zinc-800 px-4 py-2 rounded"
          >
            Sign Up
          </NavLink>
        </div>
        <div className="bg-zinc-500 p-6 rounded-lg text-center">
          <img src={host} alt="Host Icon" className="mx-auto mb-4 w-32 h-32" />
          <h2 className="text-xl font-bold mb-2">Host</h2>
          <p className="mb-4">Description about host</p>
          <NavLink
            to="/hostSignup"
            className="bg-yellow-500 text-zinc-800 px-4 py-2 rounded"
          >
            Sign Up
          </NavLink>
        </div>
        <div className="bg-zinc-600 p-6 rounded-lg text-center">
          <img
            src={volunteer}
            alt="Volunteer Icon"
            className="mx-auto mb-4 w-32 h-32"
          />
          <h2 className="text-xl font-bold mb-2">Volunteer</h2>
          <p className="mb-4">description about volunteer</p>
          <NavLink
            to="/volunteerSignup"
            className="bg-yellow-500 text-zinc-800 px-4 py-2 rounded"
          >
            Sign Up
          </NavLink>
        </div>
      </div>
    </div>
  );
}

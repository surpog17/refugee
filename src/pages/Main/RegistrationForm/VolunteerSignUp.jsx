import { NavLink } from "react-router-dom";

export default function VolunteerSignUp() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-700 p-4 text-sm">
      <div className="w-full max-w-md">
        <h2 className="text-center text-2xl font-bold text-white     mb-6">
          Volunteer Sign up
        </h2>
        <form className="bg-zinc-200 p-8 rounded-lg shadow-md">
          <div className="mb-4">
            <label
              className="block ttext-black text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full p-2 text-zinc-700 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label
              className="block ttext-black text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full p-2 text-zinc-700 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="password"
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="mt-6 text-center flex items-center gap-5 text-sm">
            <NavLink
              to="/register"
              className="bg-gray-700 text-white px-6 py-1 rounded"
            >
              Cancel
            </NavLink>
            <button className="bg-blue-700 text-white px-6 py-1 rounded">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

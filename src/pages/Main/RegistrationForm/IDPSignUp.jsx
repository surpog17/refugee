import { useState } from "react";
import IDPConfirmModal from "./Modal/IDPConfirmModal";
import { NavLink } from "react-router-dom";

export default function IDPSignUp() {
  const [modal, setModal] = useState(false);
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-blue-500 text-sm">
        <div className="bg-zinc-200 p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-center text-2xl font-bold text-black mb-6">
            IDP Sign up
          </h2>
          <form>
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-black mb-2" htmlFor="first-name">
                  First Name
                </label>
                <input
                  id="first-name"
                  type="text"
                  className="w-full p-2 rounded bg-white text-black"
                />
              </div>
              <div>
                <label className="block text-black mb-2" htmlFor="middle-name">
                  Middle Name
                </label>
                <input
                  id="middle-name"
                  type="text"
                  className="w-full p-2 rounded bg-white text-black"
                />
              </div>
              <div>
                <label className="block text-black mb-2" htmlFor="last-name">
                  Last Name
                </label>
                <input
                  id="last-name"
                  type="text"
                  className="w-full p-2 rounded bg-white text-black"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-black mb-2" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full p-2 rounded bg-white text-black"
              />
            </div>
            <div className="mb-4">
              <label className="block text-black mb-2" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="w-full p-2 rounded bg-white text-black"
              />
            </div>
            <div className="mb-4">
              <label className="block text-black mb-2" htmlFor="age">
                Age
              </label>
              <input
                id="age"
                type="number"
                className="w-full p-2 rounded bg-white text-black"
              />
            </div>
            <div className="mb-4">
              <label className="block text-black mb-2">Gender</label>
              <div className="flex items-center">
                <input id="male" type="radio" name="sex" className="mr-2" />
                <label className="text-black mr-4" htmlFor="male">
                  Male
                </label>
                <input id="female" type="radio" name="sex" className="mr-2" />
                <label className="text-black" htmlFor="female">
                  Female
                </label>
              </div>
            </div>
          </form>
          <button
            onClick={() => setModal(true)}
            className="bg-zinc-400 text-black py-2 px-4 rounded"
          >
            Verification form
          </button>
          <NavLink
            to="/register"
            className="bg-blue-600 text-white py-2 px-4 rounded ml-4"
          >
            Cancel
          </NavLink>
        </div>
      </div>
      {modal && <IDPConfirmModal setModal={setModal} />}
    </div>
  );
}

export default function IDPConfirmModal({ setModal }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-zinc-800 bg-opacity-50 text-xs overflow-auto h-screen">
      <div className="bg-zinc-300 p-6  mt-24  rounded-lg w-full max-w-2xl ">
        <h2 className="text-xl font-bold mb-4">Personal Info</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div>
            <label className="block mb-2">Nationality</label>
            <input
              type="text"
              className="w-full p-2 border border-zinc-400 rounded"
            />
          </div>
          <div>
            <label className="block mb-2">Health condition</label>
            <input
              type="text"
              className="w-full p-2 border border-zinc-400 rounded"
            />
          </div>
          <div>
            <label className="block mb-2">Ethnicity</label>
            <input
              type="text"
              className="w-full p-2 border border-zinc-400 rounded"
            />
          </div>
          <div>
            <label className="block mb-2">
              How many people in your household
            </label>
            <input
              type="text"
              className="w-full p-2 border border-zinc-400 rounded"
            />
          </div>
          <div>
            <label className="block mb-2">Contact</label>
            <input
              type="text"
              className="w-full p-2 border border-zinc-400 rounded"
            />
          </div>
          <div>
            <label className="block mb-2">Current location</label>
            <input
              type="text"
              className="w-full p-2 border border-zinc-400 rounded"
            />
          </div>
        </div>
        <h2 className="text-xl font-bold mt-6 mb-4">
          Displacement Information
        </h2>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label className="block mb-2">Reason for displacement</label>
            <input
              type="file"
              className="w-full p-2 border border-zinc-400 rounded"
            />
          </div>
          <div>
            <label className="block mb-2">Location displaced from</label>
            <input
              type="file"
              className="w-full p-2 border border-zinc-400 rounded"
            />
          </div>
          <div>
            <label className="block mb-2">Date of displacement</label>
            <input
              type="file"
              className="w-full p-2 border border-zinc-400 rounded"
            />
          </div>
        </div>
        <div className="mt-6 text-center flex items-center gap-5">
          <button
            onClick={() => setModal(false)}
            className="bg-gray-700 text-white px-6 py-2 rounded"
          >
            Cancel
          </button>
          <button className="bg-blue-700 text-white px-6 py-2 rounded">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

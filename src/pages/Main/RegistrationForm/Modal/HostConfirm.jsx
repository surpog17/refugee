export default function HostConfirm({ setModal }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#0f3a6248] bg-opacity-75 text-xs  overflow-auto">
      <div className="bg-zinc-200 dark:bg-zinc-800 p-6 rounded-lg w-full min-h-screen max-w-2xl mt-40 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
          <div>
            <h2 className="font-bold text-lg mb-2">Location Information</h2>
            <label className="block mb-2">Address</label>
            <input
              type="text"
              className="w-full mb-4 p-2 border border-zinc-300 rounded"
            />
            <label className="block mb-2">City</label>
            <input
              type="text"
              className="w-full mb-4 p-2 border border-zinc-300 rounded"
            />
            <label className="block mb-2">State/province</label>
            <input
              type="text"
              className="w-full mb-4 p-2 border border-zinc-300 rounded"
            />
            <label className="block mb-2">Country</label>
            <input
              type="text"
              className="w-full mb-4 p-2 border border-zinc-300 rounded"
            />
          </div>
          <div>
            <h2 className="font-bold text-lg mb-2">Accommodation Detail</h2>
            <label className="block mb-2">Property type</label>
            <input
              type="text"
              className="w-full mb-4 p-2 border border-zinc-300 rounded"
            />
            <label className="block mb-2">
              Number of guests you can accommodate
            </label>
            <input
              type="text"
              className="w-full mb-4 p-2 border border-zinc-300 rounded"
            />
            <label className="block mb-2">House rules</label>
            <input
              type="text"
              className="w-full mb-4 p-2 border border-zinc-300 rounded"
            />
            <label className="block mb-2">When are you available to host</label>
            <input
              type="text"
              className="w-full mb-4 p-2 border border-zinc-300 rounded"
            />
          </div>
        </div>
        <h2 className="font-bold text-lg mb-2 mt-4">Verification</h2>
        <label className="block mb-2">Photo</label>
        <input
          type="file"
          className="w-full mb-4 p-2 border border-zinc-300 rounded"
        />
        <label className="block mb-2">ID photo</label>
        <input
          type="file"
          className="w-full mb-4 p-2 border border-zinc-300 rounded"
        />
        <label className="block mb-2">Billing Address</label>
        <input
          type="file"
          className="w-full mb-4 p-2 border border-zinc-300 rounded"
        />
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

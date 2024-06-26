import React from "react";
import { RiDeleteBinLine, RiEdit2Fill } from "react-icons/ri";

const ComplaintCard = ({
  complaint,
  handleSubmitDelete,
  toggleFormVisibilityEdit,
  user,
}) => {
  console.log(user, complaint, "9909");
  return (
    <div className="w-full     mx-auto bg-white shadow-md rounded-lg overflow-hidden mb-6">
      <div className="p-4">
        <div className="flex justify-between items-center">
          <div>
            <div className="flex gap-5 items-center">
              <h2 className="text-xl font-semibold text-gray-800">
                {complaint.complained_by.username}
              </h2>
              {user?.actor_profile?.username ===
                complaint?.complained_by?.username && (
                <div className="flex items-center gap-6 px-6 py-2 ">
                  <button
                    onClick={() => toggleFormVisibilityEdit(complaint)}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    title="View"
                  >
                    <RiEdit2Fill />
                  </button>

                  <button
                    onClick={(e) => handleSubmitDelete(e, complaint.id)}
                    className="font-medium text-red-600 dark:text-red-500 hover:underline"
                    title="Remove"
                  >
                    <RiDeleteBinLine />
                  </button>
                </div>
              )}
            </div>

            <p className="text-gray-600 text-sm">
              To: {complaint.complained_to.username}
            </p>
          </div>
          <div>
            <span
              className={`px-2 py-1 rounded-full text-xs font-medium ${
                complaint.status === "Active"
                  ? "bg-green-200 text-green-800"
                  : "bg-red-200 text-red-800"
              }`}
            >
              {complaint.status}
            </span>
          </div>
        </div>
        <p className="mt-4 text-gray-700">{complaint.description}</p>
        <p className="mt-2 text-gray-500 text-sm">
          Created At: {new Date(complaint.created_at).toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default ComplaintCard;

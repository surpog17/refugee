// ReportCard.js
import React from "react";
import { date } from "./DateFormat";
import { RiDeleteBinLine, RiEdit2Fill } from "react-icons/ri";

const ReportCard = ({
  report,
  handleSubmitDelete,
  toggleFormVisibilityEdit,
  user,
}) => {
  return (
    <div className="max-full bg-white rounded-xl shadow-md overflow-hidden  ">
      <div className="p-4">
        <div className="flex gap-5 items-center">
          <h2 className="text-xl font-semibold">Report ID: {report.id}</h2>

          <div className="flex items-center gap-6 px-6 py-2 ">
            <button
              onClick={() => toggleFormVisibilityEdit(report)}
              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              title="View"
            >
              <RiEdit2Fill />
            </button>

            <button
              onClick={(e) => handleSubmitDelete(e, report.id)}
              className="font-medium text-red-600 dark:text-red-500 hover:underline"
              title="Remove"
            >
              <RiDeleteBinLine />
            </button>
          </div>
        </div>
        <p className="text-sm">{date(report.created_at)}</p>
        <div className="mt-2 text-gray-600">
          <p className="text-sm">
            <strong>Reported By:</strong> {report.reported_by.username} (
            {report.reported_by.username})
          </p>
          <p className="text-sm">
            <strong>Reported To:</strong> {report.reported_to.username} (
            {report.reported_to.username})
          </p>
        </div>
        <p className="grid">
          <strong>Description </strong> {report.description}
        </p>
      </div>
    </div>
  );
};

export default ReportCard;

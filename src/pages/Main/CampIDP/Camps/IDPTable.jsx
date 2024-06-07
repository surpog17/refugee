import React, { useEffect, useState } from "react";
import CreateIDP from "./CreateIDP";
import { allApi } from "../../../../api/endPoint";
import NoRecordsFound from "../../../../components/Main/NoRecorde";
import { RiEyeLine, RiEdit2Line, RiDeleteBinLine } from "react-icons/ri"; // Import necessary icons
import { NavLink } from "react-router-dom";
import Loading from "../../../../components/Main/Loading";

const IDPTable = () => {
  const [user, setUser] = useState("IDP");
  const [data, setData] = useState(null);
  const [Editdata, setEditData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await allApi.get(
          `/app/search-users/?phone_number=&first_name&last_name&email&user_type=${user}`
        );
        console.log(response?.data, "***");
        setData(response?.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call the fetchData function
  }, [user]);

  const handleRemove = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const [modal, setModal] = useState(false);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="mt-10 px-10">
          <button
            onClick={() => setModal(true)}
            className="bg-blue-700 text-white hover:bg-white hover:text-blue-700  shadow-md text-sm w-32 h-10 rounded-md my-2"
          >
            Add IDP
          </button>
          {data?.length != 0 ? (
            <div className=" overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      First Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Last Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Email
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Phone Number
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data?.map((item) => (
                    <tr
                      key={item.id}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {item.first_name}
                      </th>
                      <td className="px-6 py-4">{item.last_name}</td>
                      <td className="px-6 py-4">{item.email}</td>
                      <td className="px-6 py-4">
                        {item?.actor_profile?.phone_number}
                      </td>

                      <td className="flex items-center px-6 py-4">
                        <NavLink
                          to={`/idp/${item?.id}`}
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          title="View"
                        >
                          <RiEyeLine />
                        </NavLink>

                        <button
                          onClick={() => handleRemove(item.id)}
                          className="font-medium text-red-600 dark:text-red-500 hover:underline"
                          title="Remove"
                        >
                          <RiDeleteBinLine />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <NoRecordsFound />
          )}
          {modal && <CreateIDP setModal={setModal} data={Editdata} />}
        </div>
      )}
    </>
  );
};

export default IDPTable;

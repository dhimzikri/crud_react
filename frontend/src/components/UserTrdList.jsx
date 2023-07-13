import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import { Transition } from "@headlessui/react";

const UserTrdList = () => {
  const [usersTrade, setUserTrade] = useState([]);
  // const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    getUserTrader();
  }, []);

  const getUserTrader = async () => {
    const response = await axios.get("http://localhost:5000/users_trd");
    setUserTrade(response.data);
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users_trd/${id}`);
      getUserTrader();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <table className="w-full text-sm text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              No
            </th>
            <th scope="col" className="px-6 py-3">
              User Nama
            </th>
            <th scope="col" className="px-6 py-3">
              Full Name
            </th>
            <th scope="col" className="px-6 py-3">
              Satker
            </th>
            <th scope="col" className="px-6 py-3">
              Description
            </th>
            {/* <th scope="col" className="px-6 py-3">
              Mekanisme Transaksi
            </th> */}
            {/* <th scope="col" className="px-6 py-3">
              Issues
            </th>
            <th scope="col" className="px-6 py-3">
              Note
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th> */}
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="flex-col text-center">
          {usersTrade.map((usersTrade, index) => (
            <tr
              key={usersTrade._id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <th>{index + 1}</th>
              <td className="px-6 py-4 font-semibold">{usersTrade.user_name}</td>
              <td className="px-6 py-4">{usersTrade.full_name}</td>
              <td className="px-6 py-4">{usersTrade.sat_ker}</td>
              <td className="px-6 py-4">{usersTrade.description}</td>
              {/* <td className="px-6 py-4">{usersTrade.mech_trx}</td>
              <td className="px-6 py-4">{usersTrade.issues}</td>
              <td className="px-6 py-4">{usersTrade.note}</td>
              <td className="px-6 py-4">{usersTrade.status}</td> */}
              <td className="">
                <button>
                  <Link
                    to={`edit/${usersTrade._id}`}
                    className="m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded-lg"
                  >
                    Edit
                  </Link>
                </button>
                <button
                  onClick={() => deleteUser(usersTrade._id)}
                  className="m-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded-lg"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default UserTrdList;

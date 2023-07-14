import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import { Transition } from "@headlessui/react";

const Dashboard = () => {
  const [users, setUser] = useState([]);
  // const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setUser(response.data);
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <table className="w-full text-sm text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-4 py-3">
              No
            </th>
            <th scope="col" className="px-4 py-3">
              Nama
            </th>
            <th scope="col" className="px-4 py-3">
              Date
            </th>
            <th scope="col" className="px-4 py-3">
              Type
            </th>
            <th scope="col" className="px-4 py-3">
              Bloomberg-ID
            </th>
            <th scope="col" className="px-4 py-3">
              Mekanisme Transaksi
            </th>
            <th scope="col" className="px-4 py-3">
              Issues
            </th>
            <th scope="col" className="px-4 py-3">
              Note
            </th>
            <th scope="col" className="px-4 py-3">
              Status
            </th>
            <th scope="col" className="px-4 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="flex-col text-justify">
          {users.map((user, index) => (
            <tr
              key={user._id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <th className="px-4 py-4" >{index + 1}</th>
              <td className="px-4 py-4 font-semibold">{user.name}</td>
              <td className="px-4 py-4">{user.date}</td>
              <td className="px-4 py-4">{user.trx_type}</td>
              <td className="px-4 py-4">{user.BBGfitID}</td>
              <td className="px-4 py-4">{user.mech_trx}</td>
              <td className="px-4 py-4">{user.issues}</td>
              <td className="px-4 py-4">{user.note}</td>
              <td className="px-4 py-4">{user.status}</td>
              <td className="flex items-center justify-center py-2">
                <button>
                  <Link
                    to={`edit/${user._id}`}
                    className="m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 border border-blue-700 rounded-lg"
                  >
                    Edit
                  </Link>
                </button>
                <button
                  onClick={() => deleteUser(user._id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 border border-red-700 rounded-lg"
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
export default Dashboard;

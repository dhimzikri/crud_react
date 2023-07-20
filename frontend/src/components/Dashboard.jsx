import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [users, setUser] = useState([]);

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
        <thead className="text-md text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="p-2 flex-col items-center justify-center">No</th>
            <th scope="col" className="flex-col">
              Nama
            </th>
            <th scope="col" className="flex-col">
              Date
            </th>
            <th scope="col" className="flex-col">
              Type
            </th>
            <th scope="col" className="flex-col">
              Bloomberg-ID
            </th>
            <th scope="col" className="flex-col">
              Mekanisme Transaksi
            </th>
            <th scope="col" className="flex-col">
              Issues
            </th>
            <th scope="col" className="flex-col">
              Note
            </th>
            <th scope="col" className="flex-col">
              Status
            </th>
            <th scope="col" className="flex-col">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="flex-col text-center">
          {users.map((user, index) => (
            <tr
              key={user._id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <th className="">{index + 1}</th>
              <td className="px-6 py-4 font-semibold ">{user.name}</td>
              <td className="px-6 py-4">{user.date}</td>
              <td className="px-6 py-4">{user.trx_type}</td>
              <td className="px-6 py-4">{user.BBGfitID}</td>
              <td className="px-6 py-4">{user.mech_trx}</td>
              <td className="px-6 py-4 text-justify">{user.issues}</td>
              <td className="px-6 py-4">{user.note}</td>
              <td className="px-6 py-4">{user.status}</td>
              <td className="flex-col gap-">
                <button>
                  <Link
                    to={`edit/${user._id}`}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded-lg"
                  >
                    Edit
                  </Link>
                </button>
                <button
                  onClick={() => deleteUser(user._id)}
                  className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded-lg"
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

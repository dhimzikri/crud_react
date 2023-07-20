import React, { useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import { useNavigate } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

const AddUser = () => {
  const [name, setName] = useState("");
  // const [date, setDate] = useState("");
  const [trx_type, setTrx_type] = useState("FX");
  const [BBGfitID, setBBGfitID] = useState("");
  const [mech_trx, setMechT] = useState("DirectSOA");
  const [issues, setIssues] = useState("");
  const [note, setNote] = useState("");
  const [status, setStatus] = useState("Masuk");
  const navigate = useNavigate();
  const [date, setDate] = useState();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/users", {
        name,
        date,
        trx_type,
        BBGfitID,
        mech_trx,
        issues,
        note,
        status,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen p-6 flex items-center justify-center">
      <div className="container max-w-screen-lg mx-auto">
        <form onSubmit={saveUser}>
          <div>
            <h2 className="font-semibold text-xl text-gray-600">
              Transaksi Form
            </h2>
            <p className="text-gray-500 mb-6">Untuk me-record Trade Capture</p>

            <div className="bg-gray-200 rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3 items-center justify-center">
                <div className="text-gray-600">
                  <p className="font-medium text-lg">Detail Transaksi</p>
                  <p>Silahkan isi kolom terkait informasi Transaksi.</p>
                  <div className="">
                    <img
                      src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                      className="w-full"
                      alt="Sample image"
                    />
                  </div>
                </div>
                <div className="lg:col-span-2">
                  <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                    <div className="md:col-span-5">
                      <label for="full_name">Name</label>
                      <input
                        type="text"
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Name"
                      />
                    </div>

                    <div className="md:col-span-3">
                      <label for="date">Date</label>
                      <input
                        type="date"
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        placeholder="Date"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label for="address">Type Transaksi</label>
                      <div>
                        <select
                          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          value={trx_type}
                          onChange={(e) => setTrx_type(e.target.value)}
                        >
                          <option value="FX">FX</option>
                          <option value="FXMON">FXMON</option>
                          <option value="MMIDR">MMIDR</option>
                          <option value="FIDR-LIAB">FIDR-LIAB</option>
                          <option value="FIDR-ASSETS">FIDR-ASSETS</option>
                          <option value="LIQUIDITY">LIQUIDITY</option>
                          <option value="GOLD">GOLD</option>
                        </select>
                      </div>
                    </div>

                    <div className="md:col-span-3">
                      <label for="bbgId">BBGfitID</label>
                      <input
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="text"
                        value={BBGfitID}
                        onChange={(e) => setBBGfitID(e.target.value)}
                        placeholder="Bloomberg-ID"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label for="country">Mekanisme Transaksi</label>
                      <div>
                        <select
                          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          value={mech_trx}
                          onChange={(e) => setMechT(e.target.value)}
                        >
                          <option value="DirectSOA">Direct SOA</option>
                          <option value="OMS">OMS</option>
                        </select>
                      </div>
                    </div>
                    <div className="md:col-span-5 resize rounded-md">
                      <label
                        for="message"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Detail Peyebab Issue
                      </label>
                      <textarea
                        id="message"
                        rows="4"
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={issues}
                        onChange={(e) => setIssues(e.target.value)}
                        placeholder="Write your thoughts here..."
                      ></textarea>
                    </div>

                    <div className="md:col-span-3">
                      <label for="Notes">Notes</label>
                      <input
                        type="Note"
                        name="Note"
                        id="Note"
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Notes"
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label for="country">Status</label>
                      <div>
                        <select
                          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          value={status}
                          onChange={(e) => setStatus(e.target.value)}
                        >
                          <option value="Masuk">Masuk</option>
                          <option value="Tidak Masuk">Tidak Masuk</option>
                        </select>
                      </div>
                    </div>

                    <div className="md:col-span-5 text-right">
                      <div className="inline-flex items-end">
                        <button
                          type="submit"
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* </form> */}
              </div>
            </div>
          </div>

          {/* <a href="https://www.buymeacoffee.com/dgauderman" target="_blank" className="md:absolute bottom-0 right-0 p-4 float-right">
          <img src="https://www.buymeacoffee.com/assets/img/guidelines/logo-mark-3.svg" alt="Buy Me A Coffee" className="transition-all rounded-full w-14 -rotate-45 hover:shadow-sm shadow-lg ring hover:ring-4 ring-white"/>
        </a> */}
        </form>
      </div>
    </div>
  );
};

export default AddUser;

import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = ({ handleSidebarItemClick }) => {
  return (
    <aside className="flex flex-col items-start lg:w-64 w-32  h-92 px-5 py-8 overflow-y-auto  border-r rtl:border-r-0 rtl:border-l bg-gray-900 border-gray-700">
      <div className="pt-2">
        <Link
          to="/"
          className="flex justify-center items-center flex-row gap-3"
        >
          <FaHome className="w-6 h-6  text-accent" />
          <span className=" text-white block lg:text-2xl text-sm  font-primary">Daily Love</span>
        </Link>
      </div>

      <div className="flex pt-8 flex-col justify-between flex-1 mt-6">
        <nav className="-mx-3 space-y-3 ">
            
          <button
            className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
            onClick={() => handleSidebarItemClick("addRoom")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>

            <span className="mx-2 text-sm font-medium">Add New Room</span>
          </button>

          <button
            className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
            onClick={() => handleSidebarItemClick("reservedRooms")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
              />
            </svg>

            <span className="mx-2 text-sm font-medium">Reserved Rooms</span>
          </button>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;

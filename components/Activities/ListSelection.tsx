import Link from "next/link";
import React from "react";

{
  /* https://codepen.io/1159985/pen/PomGXPY */
}
const ActivitiesListSelection = ({ conferences, onDelete }) => {
  return (
    <>
      <div className="p-8">
        <div className="px-16 pt-8 content">
          <div className="h-2 border-gray-200 border-t-2 w-2/3"></div>
          <h4 className="text-xl font-bold text-gray-800 w-1/2 pt-4 mb-4">
            Upcomming
          </h4>
        </div>

        {conferences.map((conf: any, index: any) => (
          <div key={`la-id-${index}`}>
            <div className="flex px-4 items-center bg-white shadow-lg ml-16 h-24 rounded-custom border-l-8 border-orange-500">
              <div className="flex flex-col justify-center items-center border-r-2 border-gray-200 px-4">
                <button
                  className="bg-orange-500 text-white active:bg-orange-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() =>
                    (location.href = `/dashboard/conference/${conf.id}`)
                  }
                >
                  進入活動
                </button>
              </div>
              <div className="flex flex-col px-4">
                <p className="font-extrabold text-xl text-gray-900">
                  {conf.conf_name}
                </p>
                <p className="text-sm text-gray-600 flex items-center">
                  {conf.location}
                </p>
              </div>
              <div className="flex flex-col px-4">
                <p className="font-extrabold text-xl text-gray-900">4 Events</p>
                <div className="flex items-center">
                  <div className="h-2 w-2 mr-1 rounded-full bg-orange-500"></div>
                  <span className="text-sm font-bold text-orange-500">
                    Preparing
                  </span>
                </div>
              </div>
              <div className="flex  flex-grow justify-end">
                <button
                  className="bg-blueGray-500 text-white active:bg-blueGray-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() =>
                    (location.href = `/dashboard/conference/${conf.id}/edit`)
                  }
                >
                  編輯
                </button>
              </div>
            </div>
            <br />
            <br />
          </div>
        ))}
        <br />
      </div>
    </>
  );
};

export default ActivitiesListSelection;

import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

{
  /* https://codepen.io/1159985/pen/PomGXPY */
}
const ActivitiesListSelection = ({ teams, onDelete }) => {
  const router = useRouter();
  const { conference_id } = router.query;

  return (
    <>
      <div className="p-8">
        <div className="px-16 pt-8 content">
          <div className="h-2 border-gray-200 border-t-2 w-2/3"></div>
          <h4 className="text-xl font-bold text-gray-800 w-1/2 pt-4 mb-4">
            Teams
          </h4>
        </div>

        {teams.map((team: any, index: any) => (
          <div key={`la-id-${index}`}>
            <div className="flex px-4 items-center bg-white shadow-lg ml-16 h-24 rounded-custom">
              <div className="flex flex-col justify-center items-center border-r-2 border-gray-200 px-4">
                <button
                  className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() =>
                    (location.href = `/dashboard/conference/${team.id}`)
                  }
                >
                  志工資料
                </button>
              </div>
              <div className="flex flex-col px-4">
                <div className="flex items-center">
                  <div className="h-2 w-2 mr-1 rounded-full bg-lightBlue-500"></div>
                  <p className="font-extrabold text-xl text-gray-900">
                    &nbsp;{team.team_name}
                  </p>
                </div>
              </div>
              <div className="flex flex-col px-4">
                <p className="font-extrabold text-xl text-gray-900"></p>
                <div className="flex items-center">
                  <p className="text-sm text-gray-600 flex items-center">
                    4 Members
                  </p>
                </div>
              </div>
              <div className="flex  flex-grow justify-end">
                <button
                  className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  通知管理
                </button>
                <button
                  className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  面試管理
                </button>
                <button
                  className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  匯入
                </button>
                <button
                  className="bg-blueGray-500 text-white active:bg-blueGray-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() =>
                    (location.href = `/dashboard/conference/${conference_id}/teams/${team.id}/edit`)
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

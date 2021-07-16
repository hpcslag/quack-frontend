import React, { useState } from "react";
import PureConfirmModal from "../PureModels/PureConfirm";

{
  /* https://codepen.io/1159985/pen/PomGXPY */
}
const ActivitiesListSelection = () => {
  const deleteActivityHook = useState(null);
  const onDeleteActivityConfirm = (activity_id: any) => {};
  return (
    <>
      <div className="p-8">
        <div className="px-16 pt-8 content">
          <div className="h-2 border-gray-200 border-t-2 w-2/3"></div>
          <h4 className="text-xl font-bold text-gray-800 w-1/2 pt-4 mb-4">
            Upcomming
          </h4>
        </div>
        <div className="flex px-4 items-center bg-white shadow-lg ml-16 h-24 rounded-custom border-l-8 border-orange-500">
          <div className="flex flex-col justify-center items-center border-r-2 border-gray-200 px-4">
            <p className="font-extrabold text-xl text-gray-900">4:00 PM</p>
            <p className="text-sm text-gray-600">45 minutes</p>
          </div>
          <div className="px-4">
            <img
              src="https://www.mykhel.com/thumb/250x90x250/football/players/4/19054.jpg"
              alt=""
              className="h-16 w-16 rounded-full"
            />
          </div>
          <div className="flex flex-col px-4">
            <p className="font-extrabold text-xl text-gray-900">
              Conference 2021
            </p>
            <p className="text-sm text-gray-600 flex items-center">
              ICCK 高雄國際會議中心 (Taiwan, Kaohsiung)
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
            進入活動 | 編輯 | 刪除
          </div>
        </div>
        <br />
        <br />
        <br />
      </div>

      {/* Delete Modal Confirm */}
      <PureConfirmModal
        title="您確定要刪除? "
        content="一旦刪除之後，就無法復原這個活動。"
        modalStateHook={deleteActivityHook}
        onConfirm={onDeleteActivityConfirm}
      />
    </>
  );
};

export default ActivitiesListSelection;

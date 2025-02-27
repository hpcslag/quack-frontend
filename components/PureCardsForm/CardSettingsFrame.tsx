import React from "react";

// components

const CardSettingsFrame = ({ children, name, onClick }) => {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">{name}</h6>
            <div>
              <button
                className="bg-blueGray-400 active:bg-blueGray-300 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => history.back()}
              >
                取消編輯
              </button>
              <button
                className="bg-blueGray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                type="button"
                onClick={onClick}
              >
                儲存
              </button>
            </div>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase"></h6>
          <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4">{children}</div>
          </div>

          <hr className="mt-6 border-b-1 border-blueGray-300" />
        </div>
      </div>
    </>
  );
};

export default CardSettingsFrame;

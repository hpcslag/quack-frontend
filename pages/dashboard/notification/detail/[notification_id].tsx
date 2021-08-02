import React from "react";

// layout for page

import PureDark from "../../../../layouts/PureDark";

const NotificationDetail = () => {
  const notifications = [{}];
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full mb-12 px-4">
          <>
            <div
              className={
                "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white"
              }
            >
              <div className="rounded-t mb-0 px-4 py-3 border-0">
                <div className="flex flex-wrap items-center">
                  <div className="relative w-full px-4 max-w-full flex-grow flex-1 pt-6">
                    <h3 className={"font-semibold text-lg text-blueGray-700"}>
                      信件內文
                    </h3>
                  </div>
                </div>
                <div className="flex flex-wrap items-center">
                  <div className="relative w-full px-4 max-w-full flex-grow flex-1 py-8">
                    <h4>
                      主旨標題 (適用於 Email):{" "}
                      <span className="font-semibold text-lg text-blueGray-700">
                        dsfds
                      </span>
                    </h4>
                    <h4>
                      副本 (適用於 Email):{" "}
                      <span>caca@cccc.com, fkldlfk@ccc.com</span>
                    </h4>
                    <h4>
                      密件副本 (適用於 Email):{" "}
                      <span>caca@cccc.com, fkldlfk@ccc.com</span>
                    </h4>
                    <h4>
                      傳送時間: <span>2021-08-02 15:20:11</span>
                    </h4>
                    <h4>信件內容: </h4>
                    <br />
                    <p>
                      terskmflksdjfkjsdkfjsdlkjf
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={
                "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white"
              }
            >
              <div className="rounded-t mb-0 px-4 py-3 border-0">
                <div className="flex flex-wrap items-center">
                  <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                    <h3 className={"font-semibold text-lg text-blueGray-700"}>
                      寄件對象
                    </h3>
                  </div>
                </div>
              </div>
              <div className="block w-full overflow-x-auto">
                {/* Projects table */}
                <table className="items-center w-full bg-transparent border-collapse">
                  <thead>
                    <tr>
                      <th
                        className={
                          "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                        }
                      >
                        名稱
                      </th>
                      <th
                        className={
                          "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                        }
                      >
                        傳送目標
                      </th>
                      <th
                        className={
                          "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                        }
                      >
                        已讀狀態 (適用 Email)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                        <span className={"font-bold text-blueGray-600"}>
                          Argon Design System
                        </span>
                      </th>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        $2,500 USD
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <i className="fas fa-circle text-orange-500 mr-2"></i>{" "}
                        未知
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </>
        </div>
      </div>
    </>
  );
};

export default NotificationDetail;

NotificationDetail.layout = PureDark;

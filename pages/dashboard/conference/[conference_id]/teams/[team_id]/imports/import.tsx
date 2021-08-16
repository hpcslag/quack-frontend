import { useRouter } from "next/router";
import React, { useState } from "react";

// layout for page

import Pure from "../../../../../../../layouts/Pure";

const ImportStaff = () => {
  const router = useRouter();
  const { conference_id, team_id } = router.query;

  const [formData, setFormData] = useState({
    meet_url: "",
    memo: "",
  });
  const setFormDataByName = (key: string) => (event: any) => {
    const newFormData = { ...formData, ...{ [key]: event.target.value } };
    setFormData(newFormData);
  };

  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
            <div className="rounded-t bg-white mb-0 px-6 py-6">
              <div className="text-center flex justify-between">
                <h6 className="text-blueGray-700 text-xl font-bold">
                  匯入志工資料 - 匯入至 ____ 組
                </h6>
              </div>
            </div>

            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <div className="w-full lg:w-6/12 px-4">
                <br />
                <br />
                <h3>匯入選項</h3>
                <br />
                <div className="relative w-full mb-3">
                  <input
                    type="checkbox"
                    className="border-0 placeholder-blueGray-300 text-blueGray-600 bg-white rounded shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
                    onChange={setFormDataByName("meet_url")}
                    value={formData.meet_url}
                  />{" "}
                  &nbsp; 參考電子郵件減少重複新增志工
                  <br />
                  <br />
                  <input
                    type="checkbox"
                    className="border-0 placeholder-blueGray-300 text-blueGray-600 bg-white rounded shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
                    onChange={setFormDataByName("meet_url")}
                    value={formData.meet_url}
                  />{" "}
                  &nbsp; 參考電話減少重複新增志工
                  <br />
                  <br />
                  <input
                    type="checkbox"
                    className="border-0 placeholder-blueGray-300 text-blueGray-600 bg-white rounded shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
                    onChange={setFormDataByName("meet_url")}
                    value={formData.meet_url}
                  />{" "}
                  &nbsp; 同時新增至面談清單中
                  <br />
                  <br />
                  <br />
                  <h3>選擇欲匯入的檔案</h3>
                  <br />
                  <input
                    type="file"
                    multiple
                    id="files"
                    className="border-0 placeholder-blueGray-300 text-blueGray-600 bg-white rounded shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
                  />
                </div>
              </div>
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200">
                        等待匯入中
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold inline-block text-lightBlue-600">
                        73%
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-lightBlue-200">
                    <div
                      style={{ width: "73%" }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-lightBlue-500"
                    ></div>
                  </div>
                </div>
                <div className="relative w-full mb-3">
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {}}
                  >
                    開始匯入
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImportStaff;

ImportStaff.layout = Pure;

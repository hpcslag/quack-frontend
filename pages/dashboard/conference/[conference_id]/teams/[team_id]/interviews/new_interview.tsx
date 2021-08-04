import React, { useState } from "react";

// components
import PureCardsAutoForm, {
  AutoFormColumn,
} from "../../../../../../../components/PureCardsForm/PureCardsAutoForm";

// layout for page

import Pure from "../../../../../../../layouts/Pure";

const AddInterview = () => {
  const [suggest, setSuggest] = useState([]);
  const searchVolunteer = (e) => {
    const searchText = e.target.value;
    setSuggest([{ name: "TEST VOLUNTEER", id: 1 }]);
  };
  const [btwCreateVolunteer, setBtwCreateVolunteer] = useState(false);
  const onCreateVolunteer = (values: any) => {
    console.log("submit", values);
  };

  const columns: AutoFormColumn[] = [
    {
      name: "hd",
      label: "志工資料",
      defaultValue: "",
      type: "header",
    },
    {
      name: "lastname",
      label: "姓氏",
      defaultValue: "",
      type: "text",
    },
    {
      name: "firstname",
      label: "名字",
      defaultValue: "",
      type: "text",
    },
    {
      name: "age",
      label: "age",
      defaultValue: "",
      type: "年齡",
    },
    {
      name: "living",
      label: "居住地",
      defaultValue: "",
      type: "text",
    },
    {
      name: "hometown",
      label: "家鄉",
      defaultValue: "",
      type: "text",
    },
    {
      name: "occupation",
      label: "職業",
      defaultValue: "",
      type: "text",
    },
    {
      name: "unit",
      label: "服務單位 / 就讀學校",
      defaultValue: "",
      type: "text",
    },
    {
      name: "tshirt",
      label: "T-Shirt 大小",
      defaultValue: "",
      type: "selection",
      optionsValue: [
        {
          label: "XS",
          value: "XS",
        },
        {
          label: "S",
          value: "S",
        },
        {
          label: "M",
          value: "M",
        },
        {
          label: "L",
          value: "L",
        },
        {
          label: "XL",
          value: "XL",
        },
        {
          label: "XXL",
          value: "XXL",
        },
        {
          label: "XXXL",
          value: "XXXL",
        },
      ],
    },
    {
      name: "vegetable",
      label: "飲食習慣 (葷 / 素 / 不蝦...)",
      defaultValue: [],
      type: "multi-checkbox",
      optionsValue: [
        {
          label: "葷",
          value: "葷",
        },
        {
          label: "素",
          value: "素",
        },
        {
          label: "不蝦",
          value: "不蝦",
        },
      ],
    },
    {
      name: "professional",
      label: "專業",
      defaultValue: "",
      type: "text",
    },
    {
      name: "intro",
      label: "自我介紹",
      defaultValue: "",
      type: "text",
    },
    {
      name: "email",
      label: "Email",
      defaultValue: "",
      type: "text",
    },
    {
      name: "phone",
      label: "連絡電話 (+886)",
      defaultValue: "",
      type: "text",
    },
    {
      name: "facebook_id",
      label: "Facebook ID",
      defaultValue: "",
      type: "text",
    },
    {
      name: "slack_id",
      label: "Slack ID",
      defaultValue: "",
      type: "text",
    },
  ];

  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
            <div className="rounded-t bg-white mb-0 px-6 py-6">
              <div className="text-center flex justify-between">
                <h6 className="text-blueGray-700 text-xl font-bold">
                  新增面談資料
                </h6>
              </div>
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase"></h6>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4">
                  <input
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
                    type="checkbox"
                    name="isNewVolunteer"
                    checked={btwCreateVolunteer}
                    onChange={(e) => setBtwCreateVolunteer(e.target.checked)}
                  />
                  &nbsp;&nbsp;是否需要新建志工資料?
                </div>
              </div>

              <hr className="mt-6 border-b-1 border-blueGray-300" />
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    選擇加入面談的志工 - 尋找志工
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    onChange={searchVolunteer}
                  />
                  <div className="absolute w-full z-50 bg-white border border-gray-300 mt-1 mh-48 overflow-hidden overflow-y-scroll rounded-md shadow-md">
                    <ul className="py-1">
                      {suggest.map((volunteer) => (
                        <li className="px-3 py-2 cursor-pointer hover:bg-blueGray-200">
                          {volunteer.name}
                        </li>
                      ))}
                      {suggest.length === 0 && (
                        <li className="px-3 py-2 text-center">
                          No Matching Results
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {btwCreateVolunteer && (
        <div className="flex flex-wrap mt-4">
          <div className="w-full mb-12 px-4">
            <PureCardsAutoForm
              id="conference-setting"
              title="新增志工"
              onSubmit={onCreateVolunteer}
              columns={columns}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default AddInterview;

AddInterview.layout = Pure;

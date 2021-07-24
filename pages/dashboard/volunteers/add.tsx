import React from "react";

// components
import PureCardsAutoForm, {
  AutoFormColumn,
} from "../../../components/PureCardsForm/PureCardsAutoForm";

// layout for page

import Pure from "../../../layouts/Pure";

const AddVolunteer = () => {
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
          <PureCardsAutoForm
            id="conference-setting"
            title="新增志工"
            onSubmit={onCreateVolunteer}
            columns={columns}
          />
        </div>
      </div>
    </>
  );
};

export default AddVolunteer;

AddVolunteer.layout = Pure;

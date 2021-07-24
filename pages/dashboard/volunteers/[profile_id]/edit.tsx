import React from "react";

// components
import PureCardsAutoForm, {
  AutoFormColumn,
} from "../../../../components/PureCardsForm/PureCardsAutoForm";

import PureConfirmModal from "../../../../components/PureModels/PureConfirm";

// layout for page

import Pure from "../../../../layouts/Pure";
import { useRouter } from "next/router";
import { useState } from "react";

const Edit = () => {
  const router = useRouter();
  const { profile_id } = router.query;

  const onSaveVolunteer = (profile_id: any) => (values: any) => {
    console.log("submit", values, profile_id);
  };

  const deleteVolunteerHook = useState<any>(null);

  const onDeleteVolunteerConfirm = (profile_id: any) => {
    console.log("delete volunteer", profile_id);
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
      defaultValue: "sdffdsdfs",
      type: "text",
    },
    {
      name: "firstname",
      label: "名字",
      defaultValue: "fdsfdsfds",
      type: "text",
    },
    {
      name: "age",
      label: "age",
      defaultValue: "43",
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
      defaultValue: ["不蝦"],
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
    {
      name: "lb",
      label: "",
      defaultValue: "",
      type: "linebreak",
    },
    {
      name: "hd",
      label: "其他選項",
      defaultValue: "",
      type: "header",
    },
    {
      name: "volunteer_delete",
      label: "刪除志工",
      defaultValue: "dasda",
      customChildren: (_input, _meta) => (
        <>
          <button
            className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => {
              const [_, setDeleteStaff] = deleteVolunteerHook;
              setDeleteStaff(profile_id);
            }}
          >
            刪除
          </button>
        </>
      ),
      type: "custom",
    },
  ];

  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <PureCardsAutoForm
            id="volunteer-setting"
            title="志工設定"
            onSubmit={onSaveVolunteer(profile_id)}
            columns={columns}
          />
        </div>
      </div>
      {/* Delete Modal Confirm */}
      <PureConfirmModal
        title="您確定要刪除? "
        content="一旦刪除之後，就無法復原這個志工。"
        modalStateHook={deleteVolunteerHook}
        onConfirm={onDeleteVolunteerConfirm}
      />
    </>
  );
};

export default Edit;

Edit.layout = Pure;

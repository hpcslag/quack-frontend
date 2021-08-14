import React from "react";
import { useCreateVolunteerMutations } from "../../common/hooks/CreateVolunteer";
import PureCardsAutoForm, {
  AutoFormColumn,
} from "../PureCardsForm/PureCardsAutoForm";

export interface CreateVolunteerFormProps {
  onCreated: (result: any) => void;
}

export const CreateVolunteerForm = ({
  onCreated,
}: CreateVolunteerFormProps) => {
  const createVolunteer = useCreateVolunteerMutations();

  const onCreateVolunteer = async (values: any) => {
    values["age"] = parseInt(values["age"]);
    console.log(values);
    if (typeof values["vegetable"] === "object") {
      values["vegetable"] = values["vegetable"].join(",");
    }
    const result = await createVolunteer({ variables: { input: values } });
    onCreated ? onCreated(result.data?.createVolunteer) : null;
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
      label: "年齡",
      defaultValue: "",
      type: "text",
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
      defaultValue: "S",
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

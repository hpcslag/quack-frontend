import React from "react";

// components
import PureCardsAutoForm, {
  AutoFormColumn,
} from "../../../components/PureCardsForm/PureCardsAutoForm";
import { SearchAndSelectVolunteerForm } from "../../../components/Volunteers/SearchVolunteer";

// layout for page

import Pure from "../../../layouts/Pure";

const WriteNotificationDraft = () => {
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
      name: "subject",
      label: "主旨",
      defaultValue: "",
      type: "text",
    },
    {
      name: "content",
      label: "內容",
      defaultValue: "",
      type: "textarea",
    },
    {
      name: "lb",
      label: "",
      defaultValue: "",
      type: "linebreak",
    },
    {
      name: "hd",
      label: "人物",
      defaultValue: "",
      type: "header",
    },
    {
      name: "to",
      label: "傳送對象 (TO)",
      defaultValue: "dasda",
      customChildren: (_input, _meta) => (
        <>
          <SearchAndSelectVolunteerForm onResult={(a) => console.log(a)} />
        </>
      ),
      type: "custom",
    },
    {
      name: "cc",
      label: "副本對象 (CC)",
      defaultValue: "dasda",
      customChildren: (_input, _meta) => (
        <>
          <SearchAndSelectVolunteerForm onResult={(a) => console.log(a)} />
        </>
      ),
      type: "custom",
    },
    {
      name: "bcc",
      label: "密件副本對象 (BCC)",
      defaultValue: "dasda",
      customChildren: (_input, _meta) => (
        <>
          <SearchAndSelectVolunteerForm onResult={(a) => console.log(a)} />
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
            id="conference-setting"
            title="新增通知"
            onSubmit={onCreateVolunteer}
            columns={columns}
          />
        </div>
      </div>
    </>
  );
};

export default WriteNotificationDraft;

WriteNotificationDraft.layout = Pure;

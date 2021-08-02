import React from "react";

// components
import PureCardsAutoForm, {
  AutoFormColumn,
} from "../../../components/PureCardsForm/PureCardsAutoForm";

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
      label: "Subject",
      defaultValue: "",
      type: "text",
    },
    {
      name: "cc",
      label: "cc (multiple with comma ,)",
      defaultValue: "",
      type: "text",
    },
    {
      name: "bcc",
      label: "bcc (multiple with comma ,)",
      defaultValue: "",
      type: "text",
    },
    {
      name: "target",
      label: "target",
      defaultValue: "",
      type: "multi-selection",
    },
    {
      name: "schedule",
      label: "schedule",
      defaultValue: "",
      type: "text",
    },
    {
      name: "content",
      label: "content",
      defaultValue: "",
      type: "textarea",
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

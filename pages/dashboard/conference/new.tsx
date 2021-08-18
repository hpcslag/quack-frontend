import React from "react";

// components
import PureCardsAutoForm, {
  AutoFormColumn,
} from "../../../components/PureCardsForm/PureCardsAutoForm";

// layout for page

import Pure from "../../../layouts/Pure";

const AddConference = () => {
  const onCreateActivity = (values: any) => {
    console.log("submit", values);
  };

  const columns: AutoFormColumn[] = [
    {
      name: "hd",
      label: "主要設定",
      defaultValue: "",
      type: "header",
    },
    {
      name: "conf_name",
      label: "活動名稱",
      defaultValue: "",
      type: "text",
    },
    {
      name: "conf_id",
      label: "活動 ID",
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
            title="新增活動"
            onSubmit={onCreateActivity}
            columns={columns}
          />
        </div>
      </div>
    </>
  );
};

export default AddConference;

AddConference.layout = Pure;

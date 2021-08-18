import React from "react";

// components
import PureCardsAutoForm, {
  AutoFormColumn,
} from "../../../../../components/PureCardsForm/PureCardsAutoForm";

// layout for page

import Pure from "../../../../../layouts/Pure";

const AddTeam = () => {
  const onCreateTeam = (values: any) => {
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
      name: "team_name",
      label: "團隊名稱",
      defaultValue: "",
      type: "text",
    },
    {
      name: "team_id",
      label: "團隊 ID",
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
            onSubmit={onCreateTeam}
            columns={columns}
          />
        </div>
      </div>
    </>
  );
};

export default AddTeam;

AddTeam.layout = Pure;

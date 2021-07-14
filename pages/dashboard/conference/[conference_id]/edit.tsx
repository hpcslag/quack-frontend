import React from "react";

// components
import PureCardsAutoForm, {
  AutoFormColumn,
} from "../../../../components/PureCardsForm/PureCardsAutoForm";

// layout for page

import Pure from "../../../../layouts/Pure";
import { useRouter } from "next/router";

const Edit = () => {
  const router = useRouter();
  const { conference_id } = router.query;

  const columns: AutoFormColumn[] = [
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
            title="活動設定"
            onSubmit={(val) => {
              console.log("submit", val);
            }}
            columns={columns}
          />
        </div>
      </div>
    </>
  );
};

export default Edit;

Edit.layout = Pure;

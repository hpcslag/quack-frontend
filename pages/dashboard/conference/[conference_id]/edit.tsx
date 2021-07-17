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

  const onSaveActivity = (conference_id) => (values: any) => {
    console.log("submit", values);
  };

  const onDeleteActivity = (conference_id) => () => {
    console.log("delete activity", conference_id);
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
      name: "conf_delete",
      label: "刪除活動",
      defaultValue: "dasda",
      customChildren: (_input, _meta) => (
        <>
          <button
            className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={onDeleteActivity(conference_id)}
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
            id="conference-setting"
            title="活動設定"
            onSubmit={onSaveActivity(conference_id)}
            columns={columns}
          />
        </div>
      </div>
    </>
  );
};

export default Edit;

Edit.layout = Pure;

import React from "react";

// components
import PureCardsAutoForm, {
  AutoFormColumn,
} from "../../../../../../../../components/PureCardsForm/PureCardsAutoForm";

import PureConfirmModal from "../../../../../../../../components/PureModels/PureConfirm";

// layout for page

import Pure from "../../../../../../../../layouts/Pure";
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
      name: "interview_date",
      label: "面試日期",
      defaultValue: "",
      type: "text",
    },
    {
      name: "interview_url",
      label: "面試 URL",
      defaultValue: "",
      type: "text",
    },
    {
      name: "admit_status",
      label: "面試狀態",
      defaultValue: "",
      type: "text",
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

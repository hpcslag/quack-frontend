import React from "react";

// components
import CardSettingsFrame from "../../../../components/PureCardsForm/CardSettingsFrame";

// layout for page

import Pure from "../../../../layouts/Pure";
import { useRouter } from "next/router";
import { CardTextInput } from "../../../../components/PureCardsForm/CardInputItems";

const Edit = () => {
  const router = useRouter();
  const { conference_id } = router.query;

  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardSettingsFrame name="活動設定">
            <CardTextInput name="test" label="test" defaultValue="" />
          </CardSettingsFrame>
        </div>
      </div>
    </>
  );
};

export default Edit;

Edit.layout = Pure;

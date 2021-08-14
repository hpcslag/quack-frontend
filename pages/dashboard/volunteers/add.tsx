import React from "react";

// components
import { CreateVolunteerForm } from "../../../components/Volunteers/CreateVolunteer";

// layout for page

import Pure from "../../../layouts/Pure";

const AddVolunteer = () => {
  const onCreated = (result: any) => {
    console.log(result.data?.createVolunteer.id);
    if (result.data) {
      setTimeout(() => (location.href = "/dashboard/volunteers"), 1000);
    }
  };

  return (
    <>
      <CreateVolunteerForm onCreated={onCreated} />
    </>
  );
};

export default AddVolunteer;

AddVolunteer.layout = Pure;

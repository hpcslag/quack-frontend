import React from "react";

// components

import CardLineChart from "../../components/Cards/CardLineChart.js";
import CardBarChart from "../../components/Cards/CardBarChart.js";
import CardPageVisits from "../../components/Cards/CardPageVisits.js";
import CardSocialTraffic from "../../components/Cards/CardSocialTraffic.js";
import CardTable from "../../components/Cards/CardTable.js";
import ActivitiesListSelection from "../../components/Activities/ListSelection";

// layout for page

import Pure from "../../layouts/Pure";
import { withSession } from "../../components/Auth/SessionHOC";

const Dashboard = withSession(() => {
  const onDeleteActivity = (id:number) {
    
  }

  const conferecnes = [
    {
      id: 1,
      conference_name: "CONFERENCE 21",
      location: "ICCK 高雄國際會議中心 (Taiwan, Kaohsiung)",
      status: "Preparing",
      
    }
  ]
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <ActivitiesListSelection conferences={conferecnes} onDelete={onDeleteActivity} />
        </div>
      </div>
    </>
  );
});

export default Dashboard;

Dashboard.layout = Pure;

import { useRouter } from "next/router";
import React, { useState } from "react";
import { useEffect } from "react";
import { useConferenceTeams } from "../../../../../../../common/hooks/ConferenceTeams";
import { useCreateInterviewsMutation } from "../../../../../../../common/hooks/CreateInterview";
import { useSearchVolunteer } from "../../../../../../../common/hooks/LazySearchSuggestVolunteer";

// components
import { CreateVolunteerForm } from "../../../../../../../components/Volunteers/CreateVolunteer";

// layout for page

import Pure from "../../../../../../../layouts/Pure";

const AddInterview = () => {
  const router = useRouter();
  const { conference_id } = router.query;

  const [formData, setFormData] = useState({
    meet_url: "",
    memo: "",
  });
  const setFormDataByName = (key: string) => (event: any) => {
    const newFormData = { ...formData, ...{ [key]: event.target.value } };
    setFormData(newFormData);
  };
  const [searchText, setSearchText] = useState("");
  const [selectedVolunteers, setSelectedVolunteers] = useState<
    { name: string; id: number }[]
  >([]);

  const [search, searchResult] = useSearchVolunteer();
  useEffect(() => {
    (async () => {
      await search({
        variables: {
          name: searchText,
        },
      });
    })();
  }, [searchText]);

  const [btwCreateVolunteer, setBtwCreateVolunteer] = useState(false);
  const onCreatedVolunteer = (result: any) => {
    const name = result.firstname + " " + result.lastname;
    const id = result.id;
    setSelectedVolunteers([...selectedVolunteers, { name, id }] as any);
    setBtwCreateVolunteer(false);
  };

  const selectedExistsVolunteer = (volunteer: any) => () => {
    const name = volunteer.firstname + " " + volunteer.lastname;
    const id = volunteer.id;

    setSelectedVolunteers([...selectedVolunteers, { name, id }] as any);
    setSearchText("");
  };

  const removeSelectedVolunteer = (volunteer_id: any) => () => {
    const newSelectedVolunteers = selectedVolunteers.filter(
      (v: any) => v.id !== volunteer_id
    );
    setSelectedVolunteers(newSelectedVolunteers);
  };

  const teamsByConference = useConferenceTeams(conference_id as any) as any[];

  const createInterviewMutation = useCreateInterviewsMutation();
  const onCreateInterview = async () => {
    const team_id = document.getElementById("joiningTeam") as any;

    const eachInterviewerInfoObjects = selectedVolunteers.map((vol) => ({
      interview_meeting_url: formData.meet_url,
      interview_memo: formData.memo,
      profile_id: vol.id,
      conference_id: conference_id,
      team_id: team_id.value,
    }));

    const result = await createInterviewMutation({
      variables: {
        input: eachInterviewerInfoObjects as any[],
      },
    });
    if (result.data?.createInterviews) {
      setTimeout(() => (location.href = "./"), 1000);
    }
  };

  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
            <div className="rounded-t bg-white mb-0 px-6 py-6">
              <div className="text-center flex justify-between">
                <h6 className="text-blueGray-700 text-xl font-bold">
                  新增面談資料
                </h6>
              </div>
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase"></h6>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4">
                  <input
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
                    type="checkbox"
                    name="isNewVolunteer"
                    checked={btwCreateVolunteer}
                    onChange={(e) => setBtwCreateVolunteer(e.target.checked)}
                  />
                  &nbsp;&nbsp;是否需要新建志工資料?
                </div>
              </div>

              <hr className="mt-6 border-b-1 border-blueGray-300" />
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    選擇加入面談的志工 - 尋找志工
                  </label>
                  <br />
                  {selectedVolunteers.map((volunteer: any) => (
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-emerald-600 bg-emerald-200 uppercase last:mr-0 mr-1">
                      {volunteer.name} &nbsp;
                      <span>
                        <button
                          type="button"
                          className="flex-shrink-0 -mr-0.5 ml-1.5 inline-flex hover:bg-emerald-600 p-1 rounded-full outline-none hover:text-white"
                          onClick={removeSelectedVolunteer(volunteer.id)}
                        >
                          <svg
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 8 8"
                            className="h-2 w-2"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-width="1.5"
                              d="M1 1l6 6m0-6L1 7"
                            ></path>
                          </svg>
                        </button>
                      </span>
                    </span>
                  ))}

                  <br />
                  <br />
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    onChange={(e) => setSearchText(e.target.value)}
                    value={searchText}
                  />
                  {searchText && (
                    <div className="absolute w-full z-50 bg-white border border-gray-300 mt-1 mh-48 overflow-hidden overflow-y-scroll rounded-md shadow-md">
                      <ul className="py-1">
                        {!!searchResult &&
                          searchResult.searchVolunteers.length > 0 &&
                          searchResult.searchVolunteers.map((volunteer) => (
                            <li
                              className="px-3 py-2 cursor-pointer bg-white hover:bg-blueGray-200"
                              onClick={selectedExistsVolunteer(volunteer)}
                            >
                              {volunteer.firstname} {volunteer.lastname} (
                              {volunteer.id})
                            </li>
                          ))}
                        {!!searchResult &&
                          searchResult.searchVolunteers.length === 0 && (
                            <li className="px-3 py-2 text-center">
                              No Matching Results
                            </li>
                          )}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              <hr className="mt-6 border-b-1 border-blueGray-300" />
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    選擇要加入的組別
                  </label>
                  <br />
                  <select name="joiningTeam" id="joiningTeam">
                    {teamsByConference.map((team: any) => (
                      <option value={team.id}>{team.team_name}</option>
                    ))}
                  </select>
                </div>
              </div>
              <hr className="mt-6 border-b-1 border-blueGray-300" />
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <div className="w-full lg:w-6/12 px-4">
                <h3>面談資料預先建立</h3>
                <br />
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    面談會議室線上連結
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    onChange={setFormDataByName("meet_url")}
                    value={formData.meet_url}
                  />
                  <br />
                  <br />
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    面談前備註
                  </label>
                  <textarea
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    onChange={setFormDataByName("memo")}
                    value={formData.memo}
                  />
                </div>
              </div>
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={onCreateInterview}
                  >
                    建立面談資料
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {btwCreateVolunteer && (
        <CreateVolunteerForm onCreated={onCreatedVolunteer} />
      )}
    </>
  );
};

export default AddInterview;

AddInterview.layout = Pure;

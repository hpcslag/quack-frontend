import React, { useEffect, useState } from "react";
import { useSearchVolunteer } from "../../common/hooks/LazySearchSuggestVolunteer";

export interface SearchVolunteerFormProps {
  onResult: (result: any) => void;
}

export const SearchAndSelectVolunteerForm = ({
  onResult,
}: SearchVolunteerFormProps) => {
  const [selectedVolunteers, setSelectedVolunteers] = useState<
    { name: string; id: number }[]
  >([]);

  const [searchText, setSearchText] = useState("");
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

  const selectedExistsVolunteer = (volunteer: any) => () => {
    const name = volunteer.firstname + " " + volunteer.lastname;
    const id = volunteer.id;

    const allSelectedResult = [...selectedVolunteers, { name, id }] as any;
    setSelectedVolunteers(allSelectedResult);
    setSearchText("");
    onResult(allSelectedResult);
  };

  const removeSelectedVolunteer = (volunteer_id: any) => () => {
    const newSelectedVolunteers = selectedVolunteers.filter(
      (v: any) => v.id !== volunteer_id
    );
    setSelectedVolunteers(newSelectedVolunteers);
  };

  return (
    <>
      {selectedVolunteers.map((volunteer: any) => (
        <div className="bg-indigo-100 inline-flex items-center text-sm rounded mt-2 mr-1">
          <span className="ml-2 mr-1 leading-relaxed truncate max-w-xs">
            {volunteer.name}
          </span>
          <button
            onClick={removeSelectedVolunteer(volunteer.id)}
            className="w-6 h-8 inline-block align-middle text-gray-500 hover:text-gray-600 focus:outline-none"
          >
            <svg
              className="w-6 h-6 fill-current mx-auto"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M15.78 14.36a1 1 0 0 1-1.42 1.42l-2.82-2.83-2.83 2.83a1 1 0 1 1-1.42-1.42l2.83-2.82L7.3 8.7a1 1 0 0 1 1.42-1.42l2.83 2.83 2.82-2.83a1 1 0 0 1 1.42 1.42l-2.83 2.83 2.83 2.82z"
              />
            </svg>
          </button>
        </div>
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
              searchResult.searchVolunteers.map((volunteer: any) => (
                <li
                  className="px-3 py-2 cursor-pointer bg-white hover:bg-blueGray-200"
                  onClick={selectedExistsVolunteer(volunteer)}
                >
                  {volunteer.firstname} {volunteer.lastname} ({volunteer.id})
                </li>
              ))}
            {!!searchResult && searchResult.searchVolunteers.length === 0 && (
              <li className="px-3 py-2 text-center">No Matching Results</li>
            )}
          </ul>
        </div>
      )}
    </>
  );
};

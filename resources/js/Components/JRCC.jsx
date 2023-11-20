import React from "react";
import CsvDownloader from "react-csv-downloader";
export default function Excel({ users }) {
    const columns = [
        { id: "ref_number", displayName: "Reference Number" },
        { id: "last_name", displayName: "Last Name" },
        { id: "first_name", displayName: "First Name" },
        { id: "placeholder1", displayName: "Middle_Name" },
        { id: "passport_number", displayName: "Passport#" },
        { id: "country_of_issue", displayName: "Country of issue" },
        { id: "country_of_birth", displayName: "Country of birth" },
        { id: "gender", displayName: "Gender" },
        { id: "placeholder2", displayName: "Third Country Visa" },
        { id: "visa_Number", displayName: "Visa Number" },
        { id: "visa_issued_date", displayName: "Visa Issue Date" },
        { id: "visa_expiration_date", displayName: "Visa Expiry Date" },
        // Add more columns as needed
      ];
      const datas = users.map((user) =>
    Object.keys(user).reduce((acc, key) => {
      acc[key] = user[key];
      return acc;
    }, {})
  );
  const downloadIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="w-6 h-6"
    >
      {/* SVG path for the download icon */}
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 5l7 7-7 7"
      />
    </svg>
  );
    return (

<div>
      <CsvDownloader
        filename="myfile"
        extension=".csv"
        separator=";"
        wrapColumnChar=""
        columns={columns}
        datas={datas}
        children={downloadIcon}
        className="button-with-icon"  />

    </div>


    );
}

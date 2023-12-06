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
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15M9 12l3 3m0 0l3-3m-3 3V2.25" />
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

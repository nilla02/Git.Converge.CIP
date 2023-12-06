import AuthenticatedLayoutAA from "@/Layouts/AuthenticatedLayoutAA";
import Authenticated from "@/Layouts/AuthenticatedSidebar";
import Footer from "@/Components/Footer";
import PrimaryButton from "@/Components/PrimaryButton";
import { useState, useEffect } from "react";
import Excel from "@/Components/JRCC";
import ReactPaginate from 'react-paginate';



export default function Edit({ auth, users, roles ,days,notifications,count}) {

    const [searchQuery, setSearchQuery] = useState("");
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [selectedCriteria, setSelectedCriteria] = useState(''); // Initialize with a default value
    const [selectedCriteriadays, setSelectedCriteriadays] = useState(''); // Initialize with a default value
    const [selectedCriterialaw, setSelectedCriterialaw] = useState('');
    const [currentPage, setCurrentPage] = useState(0);
const usersPerPage = 20; // Adjust the number of users per page as needed


  // Function to handle page change
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);


  };
    const handleSearch = (query) => {
        setSearchQuery(query);
        setCurrentPage(0);
    };


 const performFilter = () => {
    let queryString = "?"
    if (selectedCriteriadays){
        queryString += "days="+selectedCriteriadays
    }


    location.href=queryString
};

    const handleEditProject = (projectId) => {
        setEditingProjectId(projectId);
    };

    useEffect(() => {
        const filtered = users
          .filter((user) => {
            if (!selectedCriteria) {
              return (
                user.status_id == searchQuery
              );
            } else {
                return user.status_id == selectedCriteria
            }
          })
          .slice(0, 50);

        setFilteredUsers(filtered);
      }, [users, searchQuery, selectedCriteria]);

      useEffect(() => {
        const filtered = users
          .filter((user) => {
            if (!selectedCriterialaw) {
              // Return criteria based on law_enforcement_sent if no specific law criteria is selected
              return user.law_enforcement_sent && user.law_enforcement_sent.toLowerCase().includes(searchQuery.toLowerCase());
            } else {
              console.log('selectedCriterialaw:', selectedCriterialaw);
              console.log('searchQuery:', searchQuery);

              if (selectedCriterialaw === 'row' && searchQuery.toLowerCase() === 'null') {
                // Return users where the row is null
                console.log('Filtering by row being null');
                return user.row === null;
              } else if (searchQuery.toLowerCase() === 'null') {
                // Return criteria based on the selectedCriterialaw and handle other cases
                console.log('Filtering by other criteria');
                // ...
              } else if (searchQuery.toLowerCase() === 'yes') {
                // Handle other conditions if needed
                console.log('Filtering by law_enforcement_sent being yes');
                return user.law_enforcement_sent === 'yes';
              } else {
                // Return criteria based on the selectedCriterialaw and handle other cases
                console.log('Filtering by other criteria');
                return user[selectedCriterialaw] && user[selectedCriterialaw].toLowerCase().includes(searchQuery.toLowerCase());
              }
            }
          })
          .slice(0, 50);

        console.log('Filtered users:', filtered);

        setFilteredUsers(filtered);
      }, [users, searchQuery, selectedCriterialaw]);


    useEffect(() => {
        const startIndex = currentPage * usersPerPage;
        const endIndex = startIndex + usersPerPage;
        const filtered = users
            .filter(
                (user) =>
                    user.first_name
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase()) ||
                    user.last_name
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase())
                        ||
                        user.ref_number
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase())

                // Add more filters for other columns if needed
            )
            .slice(startIndex, endIndex); // Limit to latest 5 inputs
            setFilteredUsers(filtered);
        }, [searchQuery, currentPage]);

    const columnsByRole = {
        processing:["id","ref_number","First Name", "Last Name", "Status",  ],
        corp_sec:["id","ref_number","First Name", "Last Name", "Status", ],
        accountant:["id","ref_number","First Name", "Last Name", "Status", ],
        agents: ["id","ref_number","First Name", "Last Name", "Status", ],
        super_administrators: ["First Name", "Last Name", "Status", ],
        compliance_officer: [
            "First Name",
            "Last Name",
            "Status",

            "co_notes",
        ],
        admin_compliance_officer: [
            "First Name",
            "Last Name",
            "Status",

            "co_notes",
            "Assigned_Compliance",
            "ACO",
        ],
        due_diligence_officer: [
            "ref_number",
            "First Name",
            "Last Name",
            "Status",

            "co_notes",
            "Duration",
        ],
        admin_due_diligence_officer: [
            "First Name",
            "Last Name",
            "Status",

            "co_notes",
            "Assigned_DDO",
            "ADDO",

        ],

        law_enforcement_officer: [
            "First Name",
            "Last Name",
            "Status",
            "FV",
            "ddo_notes",
        ],
        website_admin: [
            "First Name",
            "Last Name",
            "Status",

            "ACO",
            "ADDO",
            "Duration",
            "FV",
            "dayfilter",
        ],
        bank:[
            "First Name",
            "Last Name",
            "Status",
            "Duration",
            "FV",
            "dayfilter",
        ],
        promoter:[
            "First Name",
            "Last Name",
            "Status",
            "Duration",
            "FV",
            "dayfilter",
        ],

        clerks:[
            "First Name",
            "Last Name",
            "Status",
            "Duration",
            "FV",
            "dayfilter",
        ],
        ceo: [
            "First Name",
            "Last Name",
            "Status",

            "FV",
            "Duration",
            "ddo_notes",
            "co_notes",
            "ceo_notes",
        ],
        risk_assessment_officer: [
            "First Name",
            "Last Name",
            "Status",
            "FV",

            "ddo_notes",
            "co_notes",
            "ceo_notes",
        ],
    };

    const isColumnVisible = (columnName) => {
        const userRole = auth.user.roles[0]?.name;


        return columnsByRole[userRole]?.includes(columnName);
    };

    return (
        <AuthenticatedLayoutAA user={auth.user}
        notifications={notifications}>
            <Authenticated user={auth.user} />
            {/* Header */}
            <header className="bg-gray-900 text-white py-4">
                {/* ... (header content) */}
            </header>

            {/* Main Content */}

            <div className="py-12">
                <div className="lg:ml-[235px]  sm:ml-[235px] sm:px-6 lg:px-8">
                    <div className=" overflow-hidden shadow-sm sm:rounded-lg">

                            <section className="">
                                <div className=" flex bg-cyan-700  to-[#405160] p-3 rounded">
                                    <div className="flex-1 pt-2">
                                        <h1 className="text-bold text-white">Application Table</h1>
                                    </div>
                                    {isColumnVisible("dayfilter") && (
                                               <select
                                               value={selectedCriteriadays}
                                               onChange={(e) => setSelectedCriteriadays(e.target.value)}
                                               className="ml-2 text-white text-bold p-2 border bg-cyan-900 rounded-lg"
                                             >
                                               <option value="">Application Duration Filter</option>
                                               <option value="90">90 Days</option>
                                               <option value="120">120 Days</option>
                                               <option value="120">150 Days</option>

                                             </select>
                                            )}

{isColumnVisible("LEC") && (           <select
  value={selectedCriterialaw}
  onChange={(e) => setSelectedCriterialaw(e.target.value)}
  className="ml-2 p-2 border rounded-lg"
>
  <option value="">Law Enforcement Filter</option>
  <option value="yes">Law Enforcement sent</option>
  <option value="null">Pending Law Enforcement</option>
  {/* Add more criteria options as needed */}
</select>
)}
             {isColumnVisible("stf") && (           <select
    value={selectedCriteria}
    onChange={(e) => setSelectedCriteria(e.target.value)}
    className="ml-2 p-2 border rounded-lg"
  >
    <option value="">All Criteria</option>
    <option value="1">
Pending Review</option>
    <option value="2">Application Assigned</option>
    <option value="3">Pending Background check</option>
    <option value="4">Background check Underway</option>
    <option value="5">Pending Decision</option>
    <option value="6">Investment Pending</option>
    <option value="7">Investment Received</option>
    <option value="8">Denied</option>
    <option value="9">Delayed with Cause</option>
    <option value="10">Non-Compliant</option>
    <option value="11">Granted</option>
    <option value="12">Draft Created</option>
    <option value="13">Draft Edited</option>
    <option value="14">Application Closed</option>
    <option value="15">Withdrawn</option>
    <option value="16">Rejected</option>
    <option value="17">Process Law Enforcement</option>
    <option value="18">Draft Assigned</option>
    <option value="19">Returned for Compliance</option>
    <option value="20">Draft Closed</option>
    <option value="21">Updated</option>
    <option value="22">Query Application</option>
    <option value="23">Denied-RFR In-Process</option>
    <option value="24">Denied-RFR Granted</option>
    <option value="25">Denied-RFR Denied</option>
    <option value="26">Rescinded</option>
    <option value="27">Revoked</option>
    <option value="28">Granted - Oath Pending</option>
    <option value="29">Granted - Oath Non Compliant</option>
    <option value="30">Granted - Oath Accepted</option>
    <option value="31">Granted - Oath Submitted</option>
    {/* Add more criteria options as needed */}
  </select>)}

  <Excel users={users}
  />
                                    <input
                                        type="text"
                                        placeholder="Search..."
                                        value={searchQuery}
                                        onChange={(e) =>
                                            handleSearch(e.target.value)
                                        }
                                        className=" px-4 py-2 border rounded-lg"
                                    />
                                                                     <PrimaryButton
                        type="submit"
                        className=" py-2 flex-1 ml-4 font-bold text-white bg-black rounded"
                        onClick={performFilter}
                    >
                    Search
                    </PrimaryButton>
                                </div>
                                <table className="w-full text-sm text-left text-black">
                                    <thead className="text-xs  uppercase bg-white  border-2 text-cyan-600">
                                        <tr>
                                        {isColumnVisible("id") && (
                                                <th
                                                    scope="col"
                                                    className="py-3 px-6 text-left"
                                                >
                                                   Id
                                                </th>
                                            )}
                                                                                    {isColumnVisible("ref_number") && (
                                                <th
                                                    scope="col"
                                                    className="py-3 px-6 text-left"
                                                >
                                                   Reference_number
                                                </th>
                                            )}
                                            {isColumnVisible("First Name") && (
                                                <th
                                                    scope="col"
                                                    className="py-3 px-6 text-left"
                                                >
                                                    First Name
                                                </th>
                                            )}
                                            {isColumnVisible("Last Name") && (
                                                <th
                                                    scope="col"
                                                    className="py-3 px-6"
                                                >
                                                    Last Name
                                                </th>
                                            )}
                                            {isColumnVisible("Status") && (
                                                <th
                                                    scope="col"
                                                    className="py-3 px-6"
                                                >
                                                    Status
                                                </th>
                                            )}

                                            {isColumnVisible("Actions") && (
                                                <th
                                                    scope="col"
                                                    className="py-3 px-6"
                                                >
                                                    Actions
                                                </th>
                                            )}
                                            {isColumnVisible("FV") && (
                                                <th
                                                    scope="col"
                                                    className="py-3 px-6"
                                                >
                                                  View Application
                                                </th>
                                            )}
                                            {isColumnVisible(
                                                "Assigned_Compliance"
                                            ) && (
                                                <th
                                                    scope="col"
                                                    className="py-3 px-6 text-left"
                                                >
                                                    Compliance Officer
                                                </th>
                                            )}
                                            {isColumnVisible("co_notes") && (
                                                <th
                                                    scope="col"
                                                    className="py-3 px-6"
                                                >
                                                    Compliance Officer Notes
                                                </th>
                                            )}
                                            {isColumnVisible(
                                                "Assigned_DDO"
                                            ) && (
                                                <th
                                                    scope="col"
                                                    className="py-3 px-6 text-left"
                                                >
                                                    Due Diligence Officer
                                                </th>
                                            )}
                                            {isColumnVisible("ddo_notes") && (
                                                <th
                                                    scope="col"
                                                    className="py-3 px-6"
                                                >
                                                    DDO Officer Notes
                                                </th>
                                            )}
                                            {isColumnVisible("ceo_notes") && (
                                                <th
                                                    scope="col"
                                                    className="py-3 px-6"
                                                >
                                                    CEO Officer Notes
                                                </th>
                                            )}
                                             {isColumnVisible("ADDO") && (
                                                <th
                                                    scope="col"
                                                    className="py-3 px-6"
                                                >
                                                  Assigned Due Diligence Officer
                                                </th>
                                            )}
                                                {isColumnVisible("ACO") && (
                                                <th
                                                    scope="col"
                                                    className="py-3 px-6"
                                                >
                                                  Assigned Compliance Officer
                                                </th>
                                            )}

{isColumnVisible("law") && (
                                                <th
                                                    scope="col"
                                                    className="py-3 px-6"
                                                >
                                                  Law enforcment request sent
                                                </th>
                                            )}

                                                          {isColumnVisible("Duration") && (
                                                <th
                                                    scope="col"
                                                    className="py-3 px-6"
                                                >
                                                   Duration Days
                                                </th>
                                            )}
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {filteredUsers.map((user,index) => (
                                            // const showRow =
                                            // auth.user.role_id === 1 &&  ['Draft','Query-Pending'].includes(user.status) && auth.user.id === user.user_id;

                                            // showRow &&

                                            <tr
                                                key={user.id}
                                                className="bg-white border-b dark:border-gray-700"
                                            >
                                                    {isColumnVisible(
                                                    "id"
                                                ) && (
                                                    <td className="px-6 py-4">
                                                        {user.id}
                                                    </td>
                                                )}
                                                      {isColumnVisible(
                                                    "id"
                                                ) && (
                                                    <td className="px-6 py-4">
                                                        {user.ref_number}
                                                    </td>
                                                )}
                                                {isColumnVisible(
                                                    "First Name"
                                                ) && (
                                                    <td className="px-6 py-4">
                                                        {user.first_name}
                                                    </td>
                                                )}
                                                {isColumnVisible(
                                                    "Last Name"
                                                ) && (
                                                    <td className="px-6 py-4">
                                                        {user.last_name}
                                                    </td>
                                                )}
                                                {isColumnVisible("Status") && (
                                                    <td className="px-6 py-4">
                                                        <span
                                                            className={`${
                                                                user.status_id ===
                                                                "Draft"
                                                                    ? "bg-purple-200 text-purple-600"
                                                                    : user.status_id ===
                                                                      "Non-Compliant"
                                                                    ? "bg-yellow-200 text-yellow-600"
                                                                    : user.status_id === "Granted"
                                                                   ? "bg-green-200 text-green-600"
                                                                   : user.status_id === "Closed"
                                                                   ? "bg-yellow-200 text-yellow-600"
                                                                   : user.status_id === 13
                                                                   ? "bg-blue-200 text-blue-600"
                                                                   : user.status_id === "Pending_Decision"
                                                                   ? "bg-cyan-200 text-cyan-600"
                                                                   : user.status_id === "pre-processing_draft"
                                                                   ? "bg-slate-200 text-slate-600"
                                                                    :"bg-red-200 text-red-600"

                                                            } py-1 px-3 rounded-full text-xs`}
                                                        >
                                                            {user.status.external_title}
                                                        </span>
                                                    </td>
                                                )}
                                                {isColumnVisible("Actions") && (
                                                    <td className="py-3 px-6">
                                                        <div class="flex item-center">


                                                            <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                                <a
                                                                    href={`Commission/submissions/${user.id}/edit`}
                                                                >
                                                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>

                                                                </a>
                                                            </div>
                                                            <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110 ">
                                                                <a
                                                                    href={`submissions/${user.id}/edit`}
                                                                >
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        fill="none"
                                                                        viewBox="0 0 24 24"
                                                                        stroke-width="1.5"
                                                                        stroke="currentColor"
                                                                        class="w-6 h-6"

                                                                    > <title className="">Edit</title>
                                                                        <path
                                                                            stroke-linecap="round"
                                                                            stroke-linejoin="round"
                                                                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                                                        />
                                                                    </svg>

                                                                </a>
                                                            </div>
                                                            <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">

                                                            </div>
                                                        </div>
                                                    </td>
                                                )}
                                                {isColumnVisible("FV") && (
                                                    <td className="px-6 py-4">
                                                        <a
                                                            href={`Commission/submissions/${user.id}/edit`}
                                                        >
                                                            View Application
                                                        </a>
                                                    </td>
                                                )}
                                                {isColumnVisible(
                                                    "co_notes"
                                                ) && (
                                                    <td className="px-6 py-4">
                                                        {user.co_notes}
                                                    </td>
                                                )}
                                                {isColumnVisible(
                                                    "ddo_notes"
                                                ) && (
                                                    <td className="px-6 py-4">
                                                        {user.ddo_notes}
                                                    </td>
                                                )}
                                                {isColumnVisible(
                                                    "ceo_notes"
                                                ) && (
                                                    <td className="px-6 py-4">
                                                        {user.ceo_notes}
                                                    </td>
                                                )}
                                                {isColumnVisible(
                                                    "Assigned_DDO"
                                                ) && (
                                                    <td className="px-6 py-4">
                                                        {user.Assigned_DDO}
                                                    </td>
                                                )}
                                                {isColumnVisible(
                                                    "Assigned_Compliance"
                                                ) && (
                                                    <td className="px-6 py-4">
                                                        {
                                                            user.Assigned_Compliance
                                                        }
                                                    </td>
                                                )}
                                                {isColumnVisible("ACO") && (
                                                    <td className="px-6 py-4">
                                                        <a
                                                            href={`co/assign/submissions/${user.id}/edit`}
                                                        >
                                                            Select
                                                            Officer
                                                        </a>
                                                    </td>
                                                )}
                                                {isColumnVisible("ADDO") && (
                                                    <td className="px-6 py-4">
                                                        <a
                                                            href={`ddo/assign/submissions/${user.id}/edit`}
                                                        >
                                                            Select
                                                            Officer
                                                        </a>
                                                    </td>
                                                )}
                                                        {isColumnVisible("Law") && (
                                                    <td className="px-6 py-4">
                                                        <a
                                                            href={`ddo/assign/submissions/${user.id}/edit`}
                                                        >
                                                           Law enforment request sent
                                                        </a>
                                                    </td>
                                                )}
                                                {isColumnVisible("AOF") && (
                                                    <td className="px-6 py-4">
                                                    {user.i}
                                                    </td>
                                                )}
                                                  {isColumnVisible(
                                                    "Duration"
                                                ) && (
                                                    <td className="px-6 py-4">
                                                        {
                                          user.day_passed
                                                        }
                                                    </td>
                                                )}

                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <ReactPaginate
        pageCount={Math.ceil(users.length / usersPerPage)}
        pageRangeDisplayed={5}
        marginPagesDisplayed={2}
        onPageChange={handlePageChange}
        containerClassName="pagination flex gap-2 items-center" // Adjust classes for styling
        activeClassName="active"
      />
                            </section>
                        </div>
                        </div>
                        </div>


            {/* Footer */}
            {/* <footer className="">
                <Footer />
            </footer> */}
        </AuthenticatedLayoutAA>
    );
}

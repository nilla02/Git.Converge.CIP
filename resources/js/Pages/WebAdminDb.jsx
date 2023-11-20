import AuthenticatedLayoutAA from "@/Layouts/AuthenticatedLayoutAA";
import Footer from "@/Components/Footer";
import Cardbox from "@/Components/Cardbox";
import React from "react";
import Authenticated from "@/Layouts/AuthenticatedSidebar";
import Convension from "@/Components/Charts/Convensions";
import BarGraph from "@/Components/Charts/BarGraph";
import PieChart from "@/Components/Charts/PieChart";

export default function Dashboard({
    auth,
    users,
    updated,
    user,
    logs,
    user_id,
    totalusers,
    userall,
    agents,
    ddo,
    accounts,
    risk,
    ddoadmin,
    pmo,
    bdo,
    bo,
    sa,
    ceo,
    cs,
    mirf,
    promo,
    totalapplicant,
    notifications
}) {
    console.log(agents);


    return (
        <AuthenticatedLayoutAA user={auth.user}
        notifications={notifications}>
            <Authenticated user={auth.user} />
            <header className="bg-gray-900 text-white py-4">
                {/* ... (header content) */}
            </header>

            <div className="py-12">
                <div className="lg:ml-[235px] sm:ml-[235px]">
                    <div class="lg:grid  lg:grid-cols-4  lg:gap-4 sm:grid  sm:grid-cols-1  sm:gap-4">
                        {/* cardbox1 */}
                        <div class=" ">
                            <div className="flex flex-wrap">
                                <div className="lg:w-[400px] sm:w-full shadow-xl bg-opacity-30 bg-white overflow-hidden flex flex-col">
                                    <div className="p-5 flex items-center space-x-4">
                                        <div>
                                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-cyan-600 text-white">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                    class="w-6 h-6"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625zM7.5 15a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 017.5 15zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H8.25z"
                                                        clip-rule="evenodd"
                                                    />
                                                    <path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="flex-grow">
                                            <div className="text-gray-400 t">
                                                Total Users{" "}
                                            </div>
                                            <div className="text-2xl font-bold font text-gray-900">
{totalusers}
                                            </div>
                                        </div>
                                    </div>
                                    <a href="#"></a>
                                </div>
                            </div>

                            <div></div>
                        </div>
                        {/* cardbox2 */}

                        <div class=" ">
                            <div className="flex flex-wrap">
                                <div className="lg:w-[400px] sm:w-full shadow-xl sm bg-opacity-30 bg-white overflow-hidden flex flex-col">
                                    <div class="p-5 flex items-center space-x-4">
                                        <div>
                                            <a href="/your-route-here">
                                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-cyan-600 text-white">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        fill="currentColor"
                                                        class="w-6 h-6"
                                                    ></svg>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="flex-grow">
                                            <div className="text-gray-400 t">
                                                Total Applications{" "}
                                            </div>
                                            <div className="text-2xl font-bold font text-gray-900">
{totalapplicant}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div></div>
                        </div>
                        {/* cardbox3 */}
                        <div class=" ">
                            <div className="flex flex-wrap">
                                <div className="lg:w-[400px] sm:w-full shadow-xl bg-opacity-30 bg-white overflow-hidden flex flex-col">
                                    <div className="p-5 flex items-center space-x-4">
                                        <div>
                                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-cyan-600 text-white">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                    class="w-6 h-6"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625zM7.5 15a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 017.5 15zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H8.25z"
                                                        clip-rule="evenodd"
                                                    />
                                                    <path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="flex-grow">
                                            <div className="text-gray-400 ">
                                                Sick Users{" "}
                                            </div>
                                            <div className="text-2xl font-bold font text-gray-900">
{0}
                                            </div>
                                        </div>
                                    </div>
                                    <a href="#"></a>
                                </div>
                            </div>

                            <div></div>
                        </div>
                        {/* cardbox 4 */}
                        <div className="flex flex-wrap">
                            <div className="lg:w-[400px] sm:w-full bg-opacity-30 bg-white shadow-xl overflow-hidden flex flex-col">
                                <div class="p-5 flex items-center space-x-4">
                                    <div>
                                        <a href="/your-route-here">
                                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-cyan-600 text-white">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                    class="w-6 h-6"
                                                ></svg>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="flex-grow">
                                        <div className="text-gray-400 t">
                                            Total Application{" "}
                                        </div>
                                        <div className="text-2xl font-bold font text-gray-900">
{}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="lg:grid lg:grid-cols-2 gap-4 pt-4  sm:grid-cols-1  sm:gap-4">
                        <div>
                            <h1 className="text-center text-sm bg-white rounded font-bold">
                                User Table
                            </h1>
                            <div class="flex   shadow-xl sm:rounded-lg ">
                                <table className="w-full  bg-white text-sm text-left  text-black  ">
                                    <thead className="text-xs  text-black">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-6 py-3"
                                            >
                                                id
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3"
                                            >
                                                Group
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3"
                                            >
                                                Name
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3"
                                            >
                                                Role
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-opacity-30 bg-white">
                                        {userall.data.map((users) => (
                                            <tr
                                                className=" border-b  bg-opacity-30 shadow dark:border-gray-700"
                                                key={users.id}
                                            >
                                                <td className="px-6 py-4">
                                                    {users.id}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {users.group}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {users.name}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {users.roles.map((role) => (
                                                        <span
                                                            className={`${
                                                                role.name ===
                                                                "agents"
                                                                    ? "bg-stone-200 text-stone-600"
                                                                    : role.name ===
                                                                      "compliance_officer"
                                                                    ? "bg-pink-200 text-pink-600"
                                                                    : role.name ===
                                                                      "website_admin"
                                                                    ? "bg-purple-200 text-purple-600"
                                                                    : role.name ===
                                                                      "accountant"
                                                                    ? "bg-indigo-200 text-indigo-600"
                                                                    : role.name ===
                                                                      "bank_offical"
                                                                    ? "bg-blue-200 text-blue-600"
                                                                    : role.name ===
                                                                      "admin_due_diligence_officer"
                                                                    ? "bg-cyan-200 text-cyan-600"
                                                                    : role.name ===
                                                                      "due_diligence_officer"
                                                                    ? "bg-teal-200 text-teal-600"
                                                                    : role.name ===
                                                                      "market_&_investor_relations_officer"
                                                                    ? "bg-green-200 text-green-600"
                                                                    : role.name ===
                                                                      "super_administrators"
                                                                    ? "bg-lime-200 text-lime-600"
                                                                    : role.name ===
                                                                      "business_development_officer"
                                                                    ? "bg-yellow-200 text-yellow-600"
                                                                    : role.name ===
                                                                      "ceo"
                                                                    ? "bg-amber-200 text-amber-600"
                                                                    : role.name ===
                                                                      "law_enforcement_officer"
                                                                    ? "bg-orange-200 text-orange-600"
                                                                    : role.name ===
                                                                      "promoter"
                                                                    ? "bg-fuchsia-200 text-fuchsia-600"
                                                                    : role.name ===
                                                                      "corp_sec"
                                                                    ? "bg-gray-200 text-gray-600"
                                                                    : role.name ===
                                                                      "pm_office"
                                                                    ? "bg-rose-200 text-rose-600"
                                                                    : role.name ===
                                                                      "clerk"
                                                                    ? "bg-emerald-200 text-emerald-600"
                                                                    : "bg-red-200 text-red-600"
                                                            } py-1 px-3 rounded-full text-xs`}
                                                        >
                                                            {role.name}
                                                        </span>
                                                    ))}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        {/* piecehart */}
                        <div class="flex  justify-center rounded bg-opacity-30 bg-white shadow-xl sm:rounded-lg ">
                            <Convension
                                agents={agents}
                                ddo={ddo}
                                accounts={accounts}
                                risk={risk}
                                ddoadmin={ddoadmin}
                                pmo={pmo}
                                bdo={bdo}
                                bo={bo}
                                sa={sa}
                                ceo={ceo}
                                cs={cs}
                                mirf={mirf}
                                promo={promo}
                            />
                        </div>
                    </div>
                    <div class="grid grid-cols-1 mt-4">
                        <div class="flex-1 items-center justify-center rounded bg-opacity-30 bg-white shadow-xl  sm:rounded-lg">
                            <table className="w-full text-sm text-left text-black">
                                <thead className="text-xs     dark:bg-gray-700 text-black">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            ID
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Causer ID
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Action
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Description
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            User Affected
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Date
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {logs.data.map((user) => (
                                        <tr
                                            className="bg-white border-b  shadow-md dark:border-gray-700"
                                            key={users.id}
                                        >
                                            <td className="px-6 py-4">
                                                {user.id}
                                            </td>
                                            <td  className="px-6 py-4">{user.causer_id}</td>
                                            <td className="px-6 py-4">
                                                {user.description}
                                            </td>
                                            <td className="px-6 py-4">
                                                {user.log_name}
                                            </td>
                                            <td className="px-6 py-4">
                                                {user.subject_id}
                                            </td>
                                            <td>
                                                <td className="py-3 px-6">
                                                    {user.created_at}
                                                </td>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className=""></footer>
        </AuthenticatedLayoutAA>
    );
}

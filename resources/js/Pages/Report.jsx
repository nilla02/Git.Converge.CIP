import AuthenticatedLayoutAA from "@/Layouts/AuthenticatedLayoutAA";

import DoughnutChart from "@/Components/Charts/DoughnutChart";
import BarGraph from "@/Components/Charts/BarGraph";
import PrimaryButton from "@/Components/PrimaryButton";
import React, { useState, useEffect } from "react";
import InputLabel from "@/Components/InputLabel";

import Footer from "@/Components/Footer";

import Authenticated from "@/Layouts/AuthenticatedSidebar";
import PieChart from "@/Components/Charts/PieChart";

export default function report({ auth, mustVerifyEmail, status, users, data,count,total, notifications,paid }) {
    const [activeTab, setActiveTab] = useState(0);

    const tabTitles = [
        "Staff Reports",
        "Due Dilignce",
        "Risk",
        "Accountant",
        "Monthly",
        "User Overviews",
        "User Weekly",
        "Users Monthly Reports",
    ];

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    const [filter, setfilter] = useState({});
    const handleFilterChange = (key, value) => {
        setfilter((filter) => ({
            ...filter,
            [key]: value,
        }));
    };
    const performFilter = () => {
        const queryString = Object.keys(filter).reduce((result, key, index) => {
            const value = filter[key];
            result += index === 0 ? `${key}=${value}` : `&${key}=${value}`;
            return result;
        }, "?");
        location.href=queryString
    };

    useEffect(() => {

try {
    const query=new URLSearchParams(location.href)

    // query.entries
    for(const [key,value] of query.entries()){

document.getElementById(key).value=value
    }
} catch (error) {
    console.log(error)
}
        // Set the first tab as active by default
        handleTabClick(0);

    }, []);

    return (
        <AuthenticatedLayoutAA user={auth.user}
        notifications={notifications}>
            <Authenticated user={auth.user} />
            <header className="bg-gray-900 text-white py-4">
                {/* ... (header content) */}
            </header>

            <div className="py-12">
                <div className="lg:ml-[235px] sm:px-6 lg:px-8">
                    <ul
                        className="flex flex-wrap p-2  bg-cyan-600 rounded-lg text-sm text-center text-white"
                        id="tabExample"
                        role="tablist"
                    >
                        {tabTitles.map((title, index) => (
                            <li className="" role="presentation" key={index}>
                                <button
                                    className={`tab-button inline-block px-4 py-2 rounded-lg ${
                                        activeTab === index ? "active" : ""
                                    }`}
                                    id={`tab-${index}`}
                                    type="button"
                                    role="tab"
                                    aria-controls={`content-${index}`}
                                    aria-selected={activeTab === index}
                                    onClick={() => handleTabClick(index)}
                                >
                                    {title}
                                </button>
                            </li>
                        ))}
                    </ul>

                    <div id="tabContentExample">
                        {tabTitles.map((title, index) => (
                            <div
                                className={` rounded-lg ${
                                    activeTab === index ? "" : "hidden"
                                }`}
                                id={`content-${index}`}
                                role="tabpanel"
                                aria-labelledby={`tab-${index}`}
                            >
                                {/* Content for Tab 1 */}
                                {index === 0 && (
                                    <div>
                                        <div className="q">


                                            <div className="">
                                                <div class="lg:grid  lg:grid-cols-4  lg:gap-4 sm:grid  sm:grid-cols-1  sm:gap-4">
                                                    {/* cardbox1 */}
                                                    <div class=" ">
                                                        <div className="flex flex-wrap">
                                                            <div className="lg:w-[400px] shadow-xl bg-opacity-30 bg-white overflow-hidden flex flex-col">
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
                                                                            Total
                                                                            Assignments
                                                                        </div>
                                                                        <div className="text-2xl font-bold font text-gray-900">
                                                                            {total}
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
                                                            <div className="lg:w-[400px] shadow-xl sm bg-opacity-30 bg-white overflow-hidden flex flex-col">
                                                                <div class="p-5 flex items-center space-x-4">
                                                                    <div>
                                                                        <a href="/your-route-here">
                                                                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-cyan-600 text-white">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
</svg>

                                                                            </div>
                                                                        </a>
                                                                    </div>
                                                                    <div className="flex-grow">
                                                                        <div className="text-gray-400 t">
                                                                          Investment Total
                                                                        </div>
                                                                        <div className="text-2xl font-bold font text-gray-900">
                                                                            ${paid}
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
                                                            <div className="lg:w-[400px] shadow-xl bg-opacity-30 bg-white overflow-hidden flex flex-col">
                                                                <div className="p-5 flex items-center space-x-4">
                                                                    <div>
                                                                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-cyan-600 text-white">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M14.121 7.629A3 3 0 009.017 9.43c-.023.212-.002.425.028.636l.506 3.541a4.5 4.5 0 01-.43 2.65L9 16.5l1.539-.513a2.25 2.25 0 011.422 0l.655.218a2.25 2.25 0 001.718-.122L15 15.75M8.25 12H12m9 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>

                                                                        </div>
                                                                    </div>
                                                                    <div className="flex-grow">
                                                                        <div className="text-gray-400 ">
                                                                        Source of Funds
                                                                        </div>
                                                                        <div className="text-2xl font-bold font text-gray-900">
                                                                           {count}
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
                                                        <div className="lg:w-[400px] bg-opacity-30 bg-white shadow-xl overflow-hidden flex flex-col">
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
                                                                        Proof of
                                                                        payment
                                                                        pending
                                                                        uploads
                                                                    </div>
                                                                    <div className="text-2xl font-bold font text-gray-900">
                                                                        {}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="grid grid-cols-2 gap-4 pt-4">
                                                    <div class="flex  justify-center rounded bg-opacity-30 bg-white shadow-xl sm:rounded-lg  ">
                                                        <div className="w-full h-full">
                                                            <BarGraph
                                                                users={users}
                                                            />
                                                        </div>
                                                    </div>

                                                    {/* piecehart */}
                                                    <div class="flex  justify-center rounded bg-opacity-30 bg-white shadow-xl sm:rounded-lg ">
                                                        <PieChart
                                                            users={users}
                                                        />
                                                    </div>
                                                </div>
                                                <div class="grid grid-cols-1 mt-4">
                                                    <div class="flex-1 items-center justify-center rounded bg-opacity-30 bg-white shadow-xl  sm:rounded-lg">
                                                        <table className="w-full text-sm text-left text-black   ">
                                                            <thead className="text-xs   bg-opacity-30 text-black">
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
                                                                        Ref#
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
                                                                        Status
                                                                    </th>
                                                                    <th
                                                                        scope="col"
                                                                        className="px-6 py-3"
                                                                    >
                                                                        Proof of
                                                                        Payment
                                                                    </th>
                                                                    <th
                                                                        scope="col"
                                                                        className="px-6 py-3"
                                                                    >
                                                                        Bank
                                                                        Slip
                                                                    </th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {users.map(
                                                                    (user) => (
                                                                        <tr
                                                                            className="bg-white border-b  dark:border-gray-700"
                                                                            key={
                                                                                user.id
                                                                            }
                                                                        >
                                                                            <td className="px-6 py-4">
                                                                                {
                                                                                    user.id
                                                                                }
                                                                            </td>
                                                                            <td className="px-6 py-4">
                                                                                {
                                                                                    user.ref_number
                                                                                }
                                                                            </td>
                                                                            <td className="px-6 py-4">
                                                                                {
                                                                                    user.first_name
                                                                                }{" "}
                                                                                {
                                                                                    user.last_name
                                                                                }
                                                                            </td>
                                                                            <td className="px-6 py-4">
                                                                                {
                                                                                    user.status_id
                                                                                }
                                                                            </td>
                                                                            <td className="px-6 py-4">
                                                                                {
                                                                                    user.proof_of_payment_path
                                                                                }
                                                                            </td>
                                                                            <td className="px-6 py-4">
                                                                                {
                                                                                    user.source_of_funds_path
                                                                                }
                                                                            </td>
                                                                        </tr>
                                                                    )
                                                                )}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex">
                                                <div className="flex-1">
                                                <InputLabel
                                            className=""
                                htmlFor="Start Date"
                                value="Start Date"
                            />
                                            <input

                                                type="date"
                                                id="start_date"
                                                className=" rounded mt-1 block w-full"
                                                onChange={(e) =>
                                                    handleFilterChange(
                                                        "start_date",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                            </div>
                                            <div className="flex-1">
                                            <InputLabel
                                            className=""
                                htmlFor="End Date"
                                value="End Date"
                            />
                                                <input
                                                 id="end_date"
                                                    type="date"
                                                    className=" rounded mt-1 lg:ml-2 block w-full"
                                                    onChange={(e) =>
                                                        handleFilterChange(
                                                            "end_date",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </div>
                                            <div className="flex-1">
                                            <PrimaryButton
                        type="submit"
                        className=" py-2 flex-1 mt-[27px] ml-4 font-bold text-white bg-black rounded"
                        onClick={performFilter}
                    >
                      Save
                    </PrimaryButton>
                                            </div>
                                            </div>
                                    </div>
                                )}
                                {index === 1 && (
                                    <div>
                                        <table className="w-full text-sm text-left text-black ">
                                            <thead className="text-xs    uppercase bg-cyan-600 dark:bg-gray-700 text-white">
                                                <tr>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3"
                                                    >
                                                        Id
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
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3"
                                                    >
                                                        Applications Assigned to
                                                    </th>
                                                    <th>
                                                        Application duration
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {data.map((user) => (
                                                    <tr
                                                        className="bg-white border-b  dark:border-gray-700"
                                                        key={user.id}
                                                    >
                                                        <td className="px-6 py-4">
                                                            {user.id}
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            {user.name}
                                                        </td>

                                                        <td className="px-6 py-4">
                                                            {user.roles.map(
                                                                (role) => (
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
                                                                                  "admin_compliance_officer"
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
                                                                        {
                                                                            role.name
                                                                        }
                                                                    </span>
                                                                )
                                                            )}
                                                        </td>
                                                        <td></td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                )}
                                {index === 2 && <div>3</div>}
                                {index === 3 && <div>4</div>}
                                {index === 4 && <div>5</div>}
                                {index === 5 && <div>6</div>}
                                {index === 6 && <div>7</div>}
                                {index === 7 && <div>9</div>}

                                {/* Your content for each tab */}
                                {/* Replace this with your content */}
                                {/* <p>{`Content for ${title}`}</p> */}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className=""></footer>
        </AuthenticatedLayoutAA>
    );
}

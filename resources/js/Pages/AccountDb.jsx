import AuthenticatedLayoutAA from "@/Layouts/AuthenticatedLayoutAA";
import Footer from "@/Components/Footer";
import Cardbox from "@/Components/Cardbox";
import React from "react";
import Authenticated from "@/Layouts/AuthenticatedSidebar";
import DoughnutChart from "@/Components/Charts/DoughnutChart";
import BarGraph from "@/Components/Charts/BarGraph";
import PieChart from "@/Components/Charts/PieChart";

export default function AccDashboard({ auth, users, updated,user_id,notifications}) {



    return (
        <AuthenticatedLayoutAA user={auth.user}
        notifications={notifications}>
        <Authenticated user={auth.user} />
        <header className="bg-gray-900 text-white py-4">
            {/* ... (header content) */}
        </header>

        <div className="py-12">
            <div className="lg:ml-[235px]">
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
                                        Total Assignments
                                        </div>
                                        <div className="text-2xl font-bold font text-gray-900">
{}
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
                                        Assigned today
                                        </div>
                                        <div className="text-2xl font-bold font text-gray-900">
{}
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
                                        Proof of payment uploaded
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
                                    Proof of payment pending uploads
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
<BarGraph users={users} />
                        </div>
                        </div>

                    {/* piecehart */}
                    <div class="flex  justify-center rounded bg-opacity-30 bg-white shadow-xl sm:rounded-lg ">

                    <DoughnutChart users={users} />
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
                                                Proof of Payment
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3"
                                            >
                                                Bank Slip
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users.map((user) => (
                                            <tr
                                                className="bg-white border-b  dark:border-gray-700"
                                                key={user.id}
                                            >
                                                <td className="px-6 py-4">
                                                    {user.id}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {user.ref_number}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {user.first_name}{" "}
                                                    {user.last_name}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {user.status_id}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {user.proof_of_payment_path}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {user.source_of_funds_path}
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

import React, { useState, useEffect } from "react";

export default function Authenticated({ user }) {
    const hasRole = (roleName) => {
        return user.roles.some((role) => role.name === roleName);
    };
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    const isLargeScreen = windowWidth >= 638; // Change the value to your desired breakpoint

    if (!isLargeScreen) {
        return null;
    }
    return (
        <div className="fixed w-[225px] h-screen bg-gradient-to-b from-cyan-600  to-[#405160] justify-center items-center gap-[5px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
            <div className=" flex-col p-5 justify-start pt-20 items-start gap-[15px] inline-flex">
                {hasRole("agents") ||
                hasRole("website_admin") ||
                hasRole("super_administrators") ? (
                    <a
                        href={route("application.create")}
                        className={`self-stretch h-[50px] hover:bg-cyan-800 hover:text-white  p-2.5 rounded-[10px] justify-start items-center gap-2.5 inline-flex ${
                            route().current("application.create")
                                ? "bg-cyan-800 text-white"
                                : "bg-green-600 text-white"

                        }`}
                    >
                        <div className="w-5 h-5 justify-center items-center flex">
                            <div className="w-5 h-5 relative">
                                <div className="w-5 h-5 left-0 top-0 absolute  ">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="w-6 h-6 text-white"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M12 4.5v15m7.5-7.5h-15"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="  text-sm font-normal capitalize leading-[23px]">
                            Create Application
                        </div>
                    </a>
                ) : null}
                {hasRole("agents")   ? (
                    <a
                        href={route("dashboard")}
                        active={route().current("dashboard")}
                        className={`self-stretch h-[50px] hover:bg-cyan-800 p-2.5 rounded-[10px] justify-start items-center gap-2.5 inline-flex ${
                            route().current("dashboard")
                                ? "bg-cyan-800 text-white"
                                  : " text-white hover:text-white"

                        }`}
                    >
                        <div className="w-5 h-5 relative">
                            <div className="w-5 h-5 left-0 top-0 absolute">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"

                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="flex-shrink-0 w-6 h-  transition duration-75 hover:text-white "
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="  text-sm font-normal capitalize leading-[23px]">
                            Home
                        </div>
                    </a>
                ) : null}

                {hasRole("clerks")   ? (
                    <a
                        href={route("dashboard")}
                        active={route().current("dashboard")}
                        className={`self-stretch h-[50px] hover:bg-cyan-800 p-2.5 rounded-[10px] justify-start items-center gap-2.5 inline-flex ${
                            route().current("dashboard")
                                ? "bg-cyan-800 text-white"
                                  : " text-white hover:text-white"

                        }`}
                    >
                        <div className="w-5 h-5 relative">
                            <div className="w-5 h-5 left-0 top-0 absolute">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"

                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="flex-shrink-0 w-6 h-  transition duration-75 hover:text-white "
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="  text-sm font-normal capitalize leading-[23px]">
                            Home
                        </div>
                    </a>
                ) : null}

                {hasRole("bank")   ? (
                    <a
                        href={route("dashboard")}
                        active={route().current("dashboard")}
                        className={`self-stretch h-[50px] hover:bg-cyan-800 p-2.5 rounded-[10px] justify-start items-center gap-2.5 inline-flex ${
                            route().current("dashboard")
                                ? "bg-cyan-800 text-white"
                                  : " text-white hover:text-white"

                        }`}
                    >
                        <div className="w-5 h-5 relative">
                            <div className="w-5 h-5 left-0 top-0 absolute">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"

                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="flex-shrink-0 w-6 h-  transition duration-75 hover:text-white "
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="  text-sm font-normal capitalize leading-[23px]">
                            Home
                        </div>
                    </a>
                ) : null}


                           {
                hasRole("website_admin")  ? (
                    <a
                        href={route("wadb")}
                        active={route().current("wadb")}
                        className={`self-stretch h-[50px] hover:bg-cyan-800 p-2.5 rounded-[10px] justify-start items-center gap-2.5 inline-flex ${
                            route().current("wadb")
                                ? "bg-cyan-800 text-white"
                                  : " text-white hover:text-white"

                        }`}
                    >
                        <div className="w-5 h-5 relative">
                            <div className="w-5 h-5 left-0 top-0 absolute">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"

                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="flex-shrink-0 w-6 h-  transition duration-75 hover:text-white "
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="  text-sm font-normal capitalize leading-[23px]">
                            Home
                        </div>
                    </a>
                ) : null}
                           {
                hasRole("accountant")  ? (
                    <a
                        href={route("acdb")}
                        active={route().current("acdb")}
                        className={`self-stretch h-[50px] hover:bg-cyan-800 p-2.5 rounded-[10px] justify-start items-center gap-2.5 inline-flex ${
                            route().current("acdb")
                                ? "bg-cyan-800 text-white"
                                  : " text-white hover:text-white"

                        }`}
                    >
                        <div className="w-5 h-5 relative">
                            <div className="w-5 h-5 left-0 top-0 absolute">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"

                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="flex-shrink-0 w-6 h-  transition duration-75 hover:text-white "
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="  text-sm font-normal capitalize leading-[23px]">
                            Home
                        </div>
                    </a>
                ) : null}
                                {
                hasRole("compliance_officer")  ? (
                    <a
                        href={route("dashboard")}
                        active={route().current("dashboard")}
                        className={`self-stretch h-[50px] hover:bg-cyan-800 p-2.5 rounded-[10px] justify-start items-center gap-2.5 inline-flex ${
                            route().current("dashboard")
                                ? "bg-cyan-800 text-white"
                                  : " text-white hover:text-white"

                        }`}
                    >
                        <div className="w-5 h-5 relative">
                            <div className="w-5 h-5 left-0 top-0 absolute">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"

                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="flex-shrink-0 w-6 h-  transition duration-75 hover:text-white "
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="  text-sm font-normal capitalize leading-[23px]">
                            Home
                        </div>
                    </a>
                ) : null}
                                {
                hasRole("due_diligence_officer")  ? (
                    <a
                        href={route("dashboard")}
                        active={route().current("dashboard")}
                        className={`self-stretch h-[50px] hover:bg-cyan-800 p-2.5 rounded-[10px] justify-start items-center gap-2.5 inline-flex ${
                            route().current("dashboard")
                                ? "bg-cyan-800 text-white"
                                  : " text-white hover:text-white"

                        }`}
                    >
                        <div className="w-5 h-5 relative">
                            <div className="w-5 h-5 left-0 top-0 absolute">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"

                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="flex-shrink-0 w-6 h-  transition duration-75 hover:text-white "
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="  text-sm font-normal capitalize leading-[23px]">
                            Home
                        </div>
                    </a>
                ) : null}
                                {
                hasRole("promoter")  ? (
                    <a
                        href={route("dashboard")}
                        active={route().current("dashboard")}
                        className={`self-stretch h-[50px] hover:bg-cyan-800 p-2.5 rounded-[10px] justify-start items-center gap-2.5 inline-flex ${
                            route().current("dashboard")
                                ? "bg-cyan-800 text-white"
                                  : " text-white hover:text-white"

                        }`}
                    >
                        <div className="w-5 h-5 relative">
                            <div className="w-5 h-5 left-0 top-0 absolute">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"

                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="flex-shrink-0 w-6 h-  transition duration-75 hover:text-white "
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="  text-sm font-normal capitalize leading-[23px]">
                            Home
                        </div>
                    </a>
                ) : null}
                                {
                hasRole("corp_sec")  ? (
                    <a
                        href={route("dashboard")}
                        active={route().current("dashboard")}
                        className={`self-stretch h-[50px] hover:bg-cyan-800 p-2.5 rounded-[10px] justify-start items-center gap-2.5 inline-flex ${
                            route().current("dashboard")
                                ? "bg-cyan-800 text-white"
                                  : " text-white hover:text-white"

                        }`}
                    >
                        <div className="w-5 h-5 relative">
                            <div className="w-5 h-5 left-0 top-0 absolute">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"

                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="flex-shrink-0 w-6 h-  transition duration-75 hover:text-white "
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="  text-sm font-normal capitalize leading-[23px]">
                            Home
                        </div>
                    </a>
                ) : null}
                                {
                hasRole("risk_assessment_officer")  ? (
                    <a
                        href={route("dashboard")}
                        active={route().current("dashboard")}
                        className={`self-stretch h-[50px] hover:bg-cyan-800 p-2.5 rounded-[10px] justify-start items-center gap-2.5 inline-flex ${
                            route().current("dashboard")
                                ? "bg-cyan-800 text-white"
                                  : " text-white hover:text-white"

                        }`}
                    >
                        <div className="w-5 h-5 relative">
                            <div className="w-5 h-5 left-0 top-0 absolute">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"

                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="flex-shrink-0 w-6 h-  transition duration-75 hover:text-white "
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="  text-sm font-normal capitalize leading-[23px]">
                            Home
                        </div>
                    </a>
                ) : null}
                                      {
                hasRole("ceo")  ? (
                    <a
                        href={route("co")}
                        active={route().current("co")}
                        className={`self-stretch h-[50px] hover:bg-cyan-800 p-2.5 rounded-[10px] justify-start items-center gap-2.5 inline-flex ${
                            route().current("co")
                                ? "bg-cyan-800 text-white"
                                  : " text-white hover:text-white"

                        }`}
                    >
                        <div className="w-5 h-5 relative">
                            <div className="w-5 h-5 left-0 top-0 absolute">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"

                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="flex-shrink-0 w-6 h-  transition duration-75 hover:text-white "
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="  text-sm font-normal capitalize leading-[23px]">
                            Home
                        </div>
                    </a>
                ) : null}
                                            {
                hasRole("processing")  ? (
                    <a
                        href={route("co")}
                        active={route().current("co")}
                        className={`self-stretch h-[50px] hover:bg-cyan-800 p-2.5 rounded-[10px] justify-start items-center gap-2.5 inline-flex ${
                            route().current("co")
                                ? "bg-cyan-800 text-white"
                                  : " text-white hover:text-white"

                        }`}
                    >
                        <div className="w-5 h-5 relative">
                            <div className="w-5 h-5 left-0 top-0 absolute">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"

                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="flex-shrink-0 w-6 h-  transition duration-75 hover:text-white "
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="  text-sm font-normal capitalize leading-[23px]">
                            Home
                        </div>
                    </a>
                ) : null}
                {/* Dashboard ends */}
                {hasRole("agents") || hasRole("website_admin") ? (
                    <a
                        href={route("SLform")}
                        active={route().current("SLform")}
                        className={`self-stretch h-[50px] hover:bg-cyan-800  p-2.5 rounded-[10px] justify-start items-center gap-2.5 inline-flex ${
                            route().current("SLform")
                            ? "bg-cyan-800 text-white"
                              : " text-white hover:text-white"

                        }`}
                    >
                        <div className="w-5 h-5 relative">
                            <div className="w-5 h-5 left-0 top-0 absolute  bge">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className= "w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className=" text-sm font-normal capitalize leading-[23px]">
                            Application Forms
                        </div>
                    </a>
                ) : null}
                {hasRole("agents") ||
                hasRole("website_admin") ||
                hasRole("corp_sec") ||
                hasRole("due_diligence_officer") ||
                hasRole("compliance_officer") ||
                hasRole("risk_assessment_officer")||
                hasRole("market_&_investor_relations_officer") ||
                hasRole("admin_due_diligence_officer") ||
                hasRole("admin_compliance_officer") ||
                hasRole("ceo") ||
                hasRole("promoter") ||
                hasRole("accountant") ||
                hasRole("bank") ||
                hasRole("clerks") ||
                hasRole("processing") ||
                hasRole("super_administrators") ? (
                    <a
                        //Subbmissions
                        href={route("Draft")}
                        className={`self-stretch h-[50px] hover:bg-cyan-800  p-2.5 rounded-[10px] justify-start items-center gap-2.5 inline-flex ${
                            route().current("Draft")
                            ? "bg-cyan-800 text-white"
                              : " text-white hover:text-white"
                        }`}
                    >
                        <div className="w-5 h-5 relative">
                            <div className="w-5 h-5 left-0 top-0 absolute  ">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="w-6 h-6"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className=" text-sm font-normal capitalize leading-[23px]">
                            Submissions
                        </div>
                    </a>
                ) : null}
                {hasRole("website_admin") || hasRole("super_administrators") ? (
                    <a
                        href={route("UserRegistration")}
                        className={`self-stretch h-[50px] hover:bg-cyan-800  p-2.5 rounded-[10px] justify-start items-center gap-2.5 inline-flex ${
                            route().current("UserRegistration")
                               ? "bg-cyan-800 text-white"
                                  : " text-white hover:text-white"
                        }`}
                    >
                        <div className="w-5 h-5 relative">
                            <div className="w-5 h-5 left-0 top-0 absolute  ">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="w-6 h-6"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className=" text-sm font-normal capitalize leading-[23px]">
                            User Registration
                        </div>
                    </a>
                ) : null}

                {hasRole("website_admin") || hasRole("super_administrators") ? (
                    <a
                        href={route("UserTable")}
                        className={`self-stretch h-[50px] hover:bg-cyan-800  p-2.5 rounded-[10px] justify-start items-center gap-2.5 inline-flex ${
                            route().current("UserTable")
                               ? "bg-cyan-800 text-white"
                                  : " text-white hover:text-white"
                        }`}
                    >
                        <div className="w-5 h-5 relative">
                            <div className="w-5 h-5 left-0 top-0 absolute  ">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="w-6 h-6"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className=" text-sm font-normal capitalize leading-[23px]">
                            User Table
                        </div>
                    </a>
                ) : null}

                {hasRole("website_admin") || hasRole("super_administrators") ? (
                    //Group Table
                    <a
                        href={route("GroupTB")}
                        className={`self-stretch h-[50px] hover:bg-cyan-800  p-2.5 rounded-[10px] justify-start items-center gap-2.5 inline-flex ${
                            route().current("GroupTB")
                               ? "bg-cyan-800 text-white"
                                  : " text-white hover:text-white"
                        }`}
                    >
                        <div className="w-5 h-5 relative">
                            <div className="w-5 h-5 left-0 top-0 absolute  ">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="w-6 h-6"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className=" text-sm font-normal capitalize leading-[23px]">
                            Agency Table
                        </div>
                    </a>
                ) : //User Table Nav Link
                null}
                {hasRole("website_admin") || hasRole("super_administrators") ? (
                    <a
                        href={route("AgencyRegistration")}
                        className={`self-stretch h-[50px] hover:bg-cyan-800  p-2.5 rounded-[10px] justify-start items-center gap-2.5 inline-flex ${
                            route().current("AgencyRegistration")
                               ? "bg-cyan-800 text-white"
                                  : " text-white hover:text-white"
                        }`}
                    >
                        <div className="w-5 h-5 relative">
                            <div className="w-5 h-5 left-0 top-0 absolute  ">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="w-6 h-6"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className=" text-sm font-normal capitalize leading-[23px]">
                            Agency Registration
                        </div>
                    </a>
                ) : null}

                {hasRole("ceo")||
                hasRole("website_admin")? (
                    <a
                        href={route("report")}
                        className={`self-stretch h-[50px] hover:bg-cyan-800  p-2.5 rounded-[10px] justify-start items-center gap-2.5 inline-flex ${
                            route().current("report")
                               ? "bg-cyan-800 text-white"
                                  : " text-white hover:text-white"
                        }`}
                    >
                        <div className="w-5 h-5 relative">
                            <div className="w-5 h-5 left-0 top-0 absolute ">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="w-6 h-6"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
                                    />
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className=" text-sm font-normal capitalize leading-[23px]">
                            Reports
                        </div>
                    </a>
                ) : null}
                {hasRole("agents") ||
                hasRole("website_admin") ||
                hasRole("accountant") ||
                hasRole("bank") ||
                hasRole("risk_assessment_officer") ||
                hasRole("accountant") ||      hasRole("due_diligence_officer") ||
                hasRole("compliance_officer") ||
                hasRole("market_&_investor_relations_officer") ||
                hasRole("admin_due_diligence_officer") ||
                hasRole("admin_compliance_officer") ||
                hasRole("promoter") ||
                hasRole("bank") ||
                hasRole("clerks") ||
                hasRole("corp_sec") ||
                hasRole("processing") ||
                hasRole("super_administrators") ? (
                    <a
                        href={route("profile.edit")}
                        className={`self-stretch h-[50px] hover:bg-cyan-800  p-2.5 rounded-[10px] justify-start items-center gap-2.5 inline-flex ${
                            route().current("profile.edit")
                               ? "bg-cyan-800 text-white"
                                  : " text-white hover:text-white"
                        }`}
                    >
                        <div className="w-5 h-5 relative">
                            <div className=" w-5 h-5 left-0 top-0 absolute  ">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="w-6 h-6"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className=" text-sm font-normal capitalize leading-[23px]">
                            Profile
                        </div>
                    </a>
                ) : null}

                {hasRole("website_admin") ? (
                    <a
                        href={route("CipLogs")}
                        className={`self-stretch h-[50px] hover:bg-cyan-800  p-2.5 rounded-[10px] justify-start items-center gap-2.5 inline-flex ${
                            route().current("CipLogs")
                               ? "bg-cyan-800 text-white"
                                  : " text-white hover:text-white"
                        }`}
                    >
                        <div className="w-5 h-5 relative">
                            <div className="w-5 h-5 left-0 top-0 absolute ">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="w-6 h-6"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className=" text-sm font-normal capitalize leading-[23px]">
                            Logs
                        </div>
                    </a>
                ) : null}
            </div>
        </div>
    );
}

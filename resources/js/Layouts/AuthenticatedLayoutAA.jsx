import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/react";
import React, { useState, useEffect } from "react";
import Pusher from "pusher-js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Authenticated({
    user,
    auth,
    header,
    children,
    notifications,
}) {

    const [notificationsx, setNotificationx] = useState(notifications);
    const [readNotifications, setReadNotifications] = useState([]);
    const [notificationCount, setNotificationCount] = useState(
        notificationsx.length - readNotifications.length
    );
    console.log(notificationsx);
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(true);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    useEffect(() => {
        console.log(user.id);
        Echo.private(`user.${user.id}.applications`).listen('FormSuccessfullyCreatedEvent', (e)=> {
            toast.success(` ${e.message}`);

        })
        Echo.private(`user.${user.id}.granted`).listen('StatusChangedEvent', (e)=> {
            toast.success(` ${e.message}`);

        })


        function handleResize() {
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    useEffect(() => {
        if (screenWidth > 1025) {
            setShowingNavigationDropdown(false);
        }
    }, [screenWidth]);

    const markAsRead = (notificationId) => {
        const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

        fetch(`/mark-as-read/${notificationId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': csrfToken,
            },
            // Include a body if your route expects one
            // body: JSON.stringify({ /* your data */ }),

        })
        .then(response => {
            // Handle the response as needed
            console.log('Notification marked as read');
            console.log(notificationId);
        })
        .catch(error => {
            console.error('Error marking notification as read:', error);
        });
    };

// Make a fetch request from your frontend
fetch('/notification-count')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log("notifications",data);
        const notificationCount = data.count;
        // Update your UI with the notification count, for example, update the red dot
        updateNotificationCount(notificationCount);

    })
    .catch(error => {
        console.error('Error fetching notification count:', error);
        console.log(notificationCount);
    });

    const updateNotificationCount = (count) => {
        if (!count)return
        const notificationCountElement = document.querySelector('.notification-count');
        notificationCountElement.textContent = count;

        if (count > 0) {
            notificationCountElement.classList.remove('hidden');
        } else {
            notificationCountElement.classList.add('hidden');
        }
    };

    const hasRole = (roleName) => {
        return user.roles.some((role) => role.name === roleName);
    };
    let dashboardRoute = "/dashboard";

    // Change route for web admin
    if (user.role === "agents") {
        dashboardRoute = "/dashboard";
    }
    if (user.role === "website_admin") {
        dashboardRoute = "/Web_Administrator/Dashboard";
    }
    return (
        <div className={`min-h-screen bg-[#F5F7FB] no-repeat bg-cover`}>
            <nav className="bg-white p-0 fixed w-full  z-50  shadow-lg">
                <div className=" mx-auto px-10 sm:px-2 ">
                    <div className="flex justify-between h-16">
                        <div className="flex ">
                            <ToastContainer />
                            <div className="p-2">
                                <Link to={dashboardRoute}>
                                    <ApplicationLogo />
                                </Link>
                            </div>
                        </div>

                        <div className="hidden sm:flex sm:items-center sm:ml-6">
                            <Dropdown>
                                <Dropdown.Trigger>

                                    <div className="flex">
                                        <div className="flex-1">
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
                                                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                                            />
                                        </svg>
                                        </div>
                                        <div className="text-xs">                             {notificationCount > 0 && (
                    <div className="notification-count">{notificationCount}</div>
                )}</div>

                                    </div>
                                </Dropdown.Trigger>

                                <Dropdown.Content>
                                {notifications.map((notification) => (
                                    <Dropdown.Link key={notification.id}>
    <button
        className="notification-button"
        onClick={() => markAsRead(notification.id)}
    >
        {notification.data.data}
    </button>
</Dropdown.Link>
    ))}
    {notifications.length > 0 && (
        <Dropdown.Link href="#" className="btn btn-success btn-sm">
            Mark All as Read
        </Dropdown.Link>
    )}
                                </Dropdown.Content>
                            </Dropdown>{" "}
                            <div className="ml-3 relative">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-3 py-2 border  text-sm leading-4 font-medium rounded-full text-white bg-gray-600 hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                            >
                                                {user.name}

                                                <svg
                                                    className="ml-2 -mr-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link href={route("Draft")}>
                                            Profile
                                        </Dropdown.Link>
                                        <Dropdown.Link
                                            href={route("logout")}
                                            method="post"
                                            as="button"
                                        >
                                            Log Out
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>

                        <div className="-mr-2 flex items-center sm:hidden">
                            <button
                                onClick={() =>
                                    setShowingNavigationDropdown(
                                        (previousState) => !previousState
                                    )
                                }
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                            >
                                <svg
                                    className="h-6 w-6"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        className={
                                            !showingNavigationDropdown
                                                ? "inline-flex"
                                                : "hidden"
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={
                                            showingNavigationDropdown
                                                ? "inline-flex"
                                                : "hidden"
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div
                    className={
                        (showingNavigationDropdown ? "block" : "hidden") +
                        " sm:hidden"
                    }
                >
                    <div className="pt-2 pb-3 space-y-1">
                        <ResponsiveNavLink
                            href={route("dashboard")}
                            active={route().current("dashboard")}
                        >
                            Dashboard
                        </ResponsiveNavLink>
                    </div>

                    <div className="pt-4 pb-1 border-t border-gray-200">
                        <div className="px-4">
                            <div className="font-medium text-base text-gray-800">
                                {user.name}
                            </div>
                            <div className="font-medium text-sm text-gray-500">
                                {user.email}
                            </div>
                        </div>

                        <div className="mt-3 space-y-1">
                            <ResponsiveNavLink href={route("profile.edit")}>
                                Profile
                            </ResponsiveNavLink>

                            {hasRole("website_admin") ||
                                (hasRole("agents") && (
                                    <ResponsiveNavLink
                                        href={route("application.create")}
                                    >
                                        Application
                                    </ResponsiveNavLink>
                                ))}
                            {hasRole("website_admin") ||
                                hasRole("website_admin") ||
                                hasRole("website_admin") ||
                                (hasRole("website_admin") && (
                                    <ResponsiveNavLink
                                        href={route("dashboard")}
                                    >
                                        Dashboard
                                    </ResponsiveNavLink>
                                ))}
                            {hasRole("website_admin") && (
                                <ResponsiveNavLink href={route("UserTable")}>
                                    User Table{" "}
                                </ResponsiveNavLink>
                            )}
                            {hasRole("website_admin") && (
                                <ResponsiveNavLink
                                    href={route("AgencyRegistration")}
                                >
                                    Agency Registration
                                </ResponsiveNavLink>
                            )}
                            {hasRole("website_admin") ||
                                hasRole("ceo") ||
                                hasRole("agents") ||
                                hasRole("clerks") ||
                                hasRole("promoter") ||
                                hasRole("bank") ||
                                hasRole("admin_due_diligence_officer") ||
                                hasRole("compliance_officer") ||
                                (hasRole("admin_compliance_officer") && (
                                    <ResponsiveNavLink href={route("Draft")}>
                                        Submissions
                                    </ResponsiveNavLink>
                                ))}
                            {hasRole("website_admin") && (
                                <ResponsiveNavLink
                                    href={route("UserRegistration")}
                                >
                                    User Registration
                                </ResponsiveNavLink>
                            )}
                            {hasRole("website_admin") ||
                                (hasRole("ceo") && (
                                    <ResponsiveNavLink href={route("report")}>
                                        Reports
                                    </ResponsiveNavLink>
                                ))}
                            {hasRole("website_admin") && (
                                <ResponsiveNavLink href={route("GroupTB")}>
                                    Group Table
                                </ResponsiveNavLink>
                            )}
                            {hasRole("website_admin") ||
                                (hasRole("agents") && (
                                    <ResponsiveNavLink href={route("Forms")}>
                                        Application Forms
                                    </ResponsiveNavLink>
                                ))}

                            <ResponsiveNavLink
                                method="post"
                                href={route("logout")}
                                as="button"
                                className="p-2"
                            >
                                Log Out
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav>

            <main>{children}</main>
        </div>
    );
}

import AuthenticatedLayoutAA from "@/Layouts/AuthenticatedLayoutAA";
import Footer from "@/Components/Footer";
import Authenticated from "@/Layouts/AuthenticatedSidebar";
export default function Edit({ auth, users, groups,notifications }) {
    return (
        <AuthenticatedLayoutAA user={auth.user}
        notifications={notifications}>
            <Authenticated user={auth.user} />

            {/* Header */}
            <header className="bg-cyan-200 text-white py-4">
                {/* ... (header content) */}
            </header>

            {/* Main Content */}
            <div className="py-12">
                <div className="lg:ml-[235px] sm:px-6 lg:px-8">
                    <div className=" overflow-hidden shadow-sm sm:rounded-lg">
                        <table className="w-full text-sm text-left text-black ">
                            <thead className="text-xs    uppercase bg-cyan-600 dark:bg-gray-700 text-white">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Id
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Email
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Roles
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user) => (
                                    <tr
                                        className="bg-white border-b  dark:border-gray-700"
                                        key={user.id}
                                    >
                                        <td className="px-6 py-4">{user.id}</td>
                                        <td className="px-6 py-4">
                                            {user.name}
                                        </td>
                                        <td className="px-6 py-4">
                                            {user.email}
                                        </td>
                                        <td className="px-6 py-4">
                                            {user.roles.map((role) => (
                                                <span
                                                    className={`${

                                                       role.external_name === "Agent"
                                                            ? "bg-stone-200 text-stone-600"
                                                            :role.external_name === "Unverified User"
                                                            ? "bg-black text-white"
                                                            :role.external_name ===
                                                              "Verification Officer"
                                                            ? "bg-pink-200 text-pink-600"
                                                            :role.external_name ===
                                                              "Website Administrator"
                                                            ? "bg-purple-200 text-purple-600"
                                                            :role.external_name ===
                                                              "Accountant"
                                                            ? "bg-indigo-200 text-indigo-600"
                                                            :role.external_name ===
                                                              "admin_compliance_officer"
                                                            ? "bg-blue-200 text-blue-600"
                                                            :role.external_name ===
                                                              "admin_due_diligence_officer"
                                                            ? "bg-cyan-200 text-cyan-600"
                                                            :role.external_name ===
                                                              "Due Diligence Officer"
                                                            ? "bg-teal-200 text-teal-600"
                                                            :role.external_name ===
                                                              "Market & Investor Relations Officer"
                                                            ? "bg-green-200 text-green-600"
                                                            :role.external_name ===
                                                              "Super Administrator"
                                                            ? "bg-lime-200 text-lime-600"
                                                            :role.external_name ===
                                                              "Business Development Officer"
                                                            ? "bg-yellow-200 text-yellow-600"
                                                            :role.external_name ===
                                                              "Chief Operating Officer"
                                                            ? "bg-amber-200 text-amber-600"
                                                            :role.external_name ===
                                                              "Law Enforcement Officer"
                                                            ? "bg-orange-200 text-orange-600"
                                                            :role.external_name ===
                                                              "Promoter"
                                                            ? "bg-fuchsia-200 text-fuchsia-600"
                                                            :role.external_name ===
                                                              "Corporate Secretary"
                                                            ? "bg-gray-200 text-gray-600"
                                                            :role.external_name ===
                                                              "Prime Minister Office"
                                                            ? "bg-rose-200 text-rose-600"
                                                            :role.external_name ===
                                                              "Clerk"
                                                            ? "bg-emerald-200 text-emerald-600"
                                                            :role.external_name ===
                                                            "Risk Assessment Officer"
                                                            ? "bg-orange-200 text-orange-700"
                                                            : "bg-yellow-200 text-yellow-700"
                                                    } py-1 px-3 rounded-full text-xs`}
                                                >
                                                    {role.external_name}
                                                </span>
                                            ))}
                                        </td>
                                        <td>
                                            <td className="py-3 px-6">
                                                <div class="flex item-center">
                                                    <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            stroke="currentColor"
                                                        >
                                                            <path
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                                stroke-width="2"
                                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                            />
                                                            <path
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                                stroke-width="2"
                                                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                                            />
                                                        </svg>
                                                    </div>
                                                    <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                        <a
                                                            href={`/user/${user.id}/edit`}
                                                        >
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                stroke="currentColor"
                                                            >
                                                                <path
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round"
                                                                    stroke-width="2"
                                                                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                                                />
                                                            </svg>
                                                        </a>
                                                    </div>

                                                    <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            stroke="currentColor"
                                                        >
                                                            <path
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                                stroke-width="2"
                                                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                            />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </td>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Footer */}

        </AuthenticatedLayoutAA>
    );
}

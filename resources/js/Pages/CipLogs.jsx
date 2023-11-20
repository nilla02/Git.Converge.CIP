import AuthenticatedLayoutAA from "@/Layouts/AuthenticatedLayoutAA";
import Footer from "@/Components/Footer";

import Authenticated from "@/Layouts/AuthenticatedSidebar";
export default function Edit({ auth, logs,notifications }) {
    console.log(logs);
    return (
        <AuthenticatedLayoutAA user={auth.user}
        notifications={notifications}>
            <Authenticated user={auth.user} />
                   {/* Header */}
                   <header className="bg-cyan-600 text-white py-4">
                {/* ... (header content) */}
            </header>

            {/* Main Content */}

            <main className="container  max-w-7xl h-screen mx-auto sm:px-6 lg:px-8 space-y-6 mt-20 py-8 lg:w-3/4 xl:w-2/3">

                <section className="mb-8">

                        <header className="font-bold text-center    ">

                        </header>

                        <main class="flex-grow ">
                        <table className="w-full text-sm text-left text-black">
                        <thead className="text-xs    uppercase bg-cyan-50 dark:bg-gray-700 text-white">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Created user ID
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
                            {logs.map((user) => (
                                <tr
                                    className="bg-white border-b  dark:border-gray-700"
                                    key={user.id}
                                >
                                    <td className="px-6 py-4">{user.causer_id}</td>
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
                        </main>

                </section>

            </main>

            {/* Footer */}
            <footer className="">
                <Footer />
            </footer>

        </AuthenticatedLayoutAA>
    );
}

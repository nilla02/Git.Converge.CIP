import AuthenticatedLayoutAA from "@/Layouts/AuthenticatedLayoutAA";
import Authenticated from "@/Layouts/AuthenticatedSidebar";
import { useState, useEffect } from "react";
import ReactPaginate from 'react-paginate';


export default function Edit({ auth, logs, notifications }) {
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const usersPerPage = 20;

    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };

    const handleSearch = (query) => {
        setSearchQuery(query);
        setCurrentPage(0);
    };

    useEffect(() => {
        const startIndex = currentPage * usersPerPage;
        const endIndex = startIndex + usersPerPage;
        const filtered = logs

            .filter(
                (log) =>
                    log.log_name
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase()) ||
                    log.description
                        .t_natoLowerCase()
                        .includes(searchQuery.toLowerCase()) ||
                    log.event.toLowerCase().includes(searchQuery.toLowerCase())
                // Add more filters for other columns if needed
            )
            .slice(startIndex, endIndex);

        setFilteredUsers(filtered);
    }, [searchQuery, currentPage]);
    return (
        <AuthenticatedLayoutAA user={auth.user} notifications={notifications}>
            <Authenticated user={auth.user} />

            <div className="py-12">
                <div className="lg:ml-[235px] sm:ml-[235px] sm:px-6 lg:px-8">
                    <div className="overflow-hidden shadow-sm sm:rounded-lg">
                        <section className="">
                            <div className="flex bg-cyan-700 to-[#405160] p-3 rounded">
                                <div className="flex-1 pt-2">
                                    <h1 className="text-bold text-white">
                                        Agency Table
                                    </h1>

                                    </div>
                                    <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="px-4 py-2 border rounded-lg"
                />
                                    </div>
                                    <table className="w-full text-sm text-left text-black">
                        <thead className="text-xs    uppercase bg-cyan-600 dark:bg-gray-700 text-white">
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
                    <ReactPaginate
                pageCount={Math.ceil(logs.length / usersPerPage)}
                pageRangeDisplayed={5}
                marginPagesDisplayed={2}
                onPageChange={handlePageChange}
                containerClassName="pagination flex gap-2 items-center"
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

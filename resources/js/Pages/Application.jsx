import AuthenticatedLayoutAA from "@/Layouts/AuthenticatedLayoutAA";
import Footer from "@/Components/Footer";
import FileUpload from "@/Components/FileUpload";
import Authenticated from "@/Layouts/AuthenticatedSidebar";

export default function Edit({
    auth,
    users,
    countries,
    principle_applicants,
    region,
    toa,
    toi,
    gender,
    mstatus,
    notifications
}) {
    return (
        <AuthenticatedLayoutAA user={auth.user}
        notifications={notifications}>
            <Authenticated user={auth.user} />
            {/* Header */}
            <header className="bg-cyan-600 text-white py-4">
                {/* ... (header content) */}
            </header>

            {/* Main Content */}
            <div className="py-12">
                <div className="lg:ml-[235px] sm:ml-[235px] sm:px-6 lg:px-8">
                    <div className=" overflow-hidden shadow-sm sm:rounded-lg">
                        <div class="  relative overflow-x-auto p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                            <FileUpload
                                users={users}
                                countries={countries}
                                principle_applicants={principle_applicants}
                                region={region}
                                toi={toi}
                                toa={toa}
                                gender={gender}
                                mstatus={mstatus}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="">
                <Footer />
            </footer>
        </AuthenticatedLayoutAA>
    );
}

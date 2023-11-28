import AuthenticatedLayoutAA from "@/Layouts/AuthenticatedLayoutAA";
import Authenticated from "@/Layouts/AuthenticatedSidebar";
import GroupUpload from "@/Components/GroupUpload";

export default function AgencyReg({ auth, users, groups,notifications }) {


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
                <div className="lg:ml-[235px]  sm:ml-[235px] sm:px-6 lg:px-8">
                    <div className=" overflow-hidden shadow-sm sm:rounded-lg">
                        <GroupUpload />
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

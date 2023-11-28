import AuthenticatedLayoutAA from '@/Layouts/AuthenticatedLayoutAA';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import Footer from '@/Components/Footer';
import Authenticated from '@/Layouts/AuthenticatedSidebar';


export default function Edit({ auth, mustVerifyEmail, status ,notifications}) {
    return (
        <AuthenticatedLayoutAA
            user={auth.user}
            notifications={notifications}
        >
              <Authenticated user={auth.user}/>
              <div className="py-12">
                <div className="lg:ml-[235px] sm:ml-[235px] sm:px-6 lg:px-8">
                    <div className=" overflow-hidden shadow-sm sm:rounded-lg">

                    <div className="p-4 mt-8 sm:p-8 bg-white shadow sm:rounded-lg">
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className="max-w-xl"
                        />
                    </div>

                    <div className="p-4 mt-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <UpdatePasswordForm className="max-w-xl" />
                    </div>

                    <div className="p-4 mt-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <DeleteUserForm className="max-w-xl" />
                    </div>

</div></div></div>






              <body className="flex-1 mt-20  overflow-y-auto  lg:p-[120px] ">

        <div className="flex ">


          <div className="flex-grow  ml-[20px] p-[15px]">


            <div className="flex-grow">

            </div>
          </div>
        </div>




      </body>
      <Footer className="mt-auto"/>


        </AuthenticatedLayoutAA>
    );
}

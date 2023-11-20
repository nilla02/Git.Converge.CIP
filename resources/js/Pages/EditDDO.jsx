import React from "react"; // Make sure to import React
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Link, useForm, usePage } from "@inertiajs/react";
import AuthenticatedLayoutAA from '@/Layouts/AuthenticatedLayoutAA';
import Authenticated from "@/Layouts/AuthenticatedSidebar";

export default function UpdateProfileInformation({ users,auth,submission}) {
    const { data, setData, put, errors, processing } = useForm({
        first_name:submission.first_name,
        last_name: submission.last_name,
        Assigned_DDO:submission.Assigned_DDO,
    });
  

    const updatePassword = (e) => {
        e.preventDefault();

    
        put(route("EditDDO.assignddo", submission.id), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: (errors) => {
                console.log(errors);
            },
        });
    };
    return (
        <AuthenticatedLayoutAA user={auth.user}
        >
              <Authenticated user={auth.user} />

            <header className="bg-gray-900 text-white py-4">
                {/* ... (header content) */}
            </header>

            <main className="container mx-auto  m-20 py-8 lg:w-3/4 xl:w-2/3">
              
              <section className="mb-8">
                
           
              <div className="p-4 sm:p-8 h- bg-white shadow sm:rounded-lg">
            <header>
                <h2 className="text-lg font-medium text-gray-900">
                Officer Assignment Form
                </h2>
                <p className="mt-1 text-sm text-gray-600">
                Assign which ddo officer will be linked to this application
                </p>
            </header>

            <form onSubmit={updatePassword} className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="First Name" value="First Name" />
                    <TextInput
                        id="first_name"
                        className="mt-1 block w-full"
                        value={data.first_name}
                        onChange={(e) => setData("first_name", e.target.value)}
                        required
                        isFocused
                        autoComplete="first Name"
                    />
                    <InputError className="mt-2" message={errors.first_name} />
                </div>

                <div>
                    <InputLabel htmlFor="Last Name" value="Last Name" />
                    <TextInput
                        id="last_name"
                        className="mt-1 block w-full"
                        value={data.last_name}
                        onChange={(e) => setData("last_name", e.target.value)}
                        required
                        isFocused
                        autoComplete="Last Name"
                    />
                    <InputError className="mt-2" message={errors.Last_Name} />
                </div>

                <div>
    <InputLabel htmlFor="users" value="Assign Due Diligence officers" />
    <select
    onChange={(e) => setData('Assigned_DDO', e.target.value)}
    className="mt-1 block w-full"
    value={data.Assigned_DDO}
>
<option value="">-Select Assigned Due Diligence Officer-</option>
                            {users.map((user) => (
                                <option key={user.id} value={user.id}>
                                    {user.name}
                                </option>
                            ))}
                        </select>




    

    <InputError message={errors['Assigned_DDO']} className="mt-2" />
</div>




                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Save</PrimaryButton>
                </div>
            </form>
            </div>
        </section>
        </main>
        </AuthenticatedLayoutAA>
    );
    
}

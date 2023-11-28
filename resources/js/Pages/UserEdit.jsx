import React from "react"; // Make sure to import React
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Link, useForm, usePage } from "@inertiajs/react";
import AuthenticatedLayoutAA from '@/Layouts/AuthenticatedLayoutAA';
import Authenticated from "@/Layouts/AuthenticatedSidebar";

export default function UpdateProfileInformation({ user ,roles,auth,notifications }) {
    const { data, setData, put, errors, processing } = useForm({
        name: user.name,
        email: user.email,
        roles: user.roles.map((role) => role.name),
    });

    const submit = (e) => {
        e.preventDefault();
        put(route("user.update", user.id));
    };

    return (
        <AuthenticatedLayoutAA user={auth.user}
        notifications={notifications}
        >
              <Authenticated user={auth.user} />

            <header className="bg-gray-900 text-white py-4">
                {/* ... (header content) */}
            </header>

            <main className="py-12  lg:ml-[235px]  sm:ml-[235px]  sm:px-6 lg:px-8">

              <section className="mb-8">


              <div className="p-4 sm:p-8 h- bg-white shadow sm:rounded-lg">
            <header>
                <h2 className="text-lg font-medium text-gray-900">
                    Profile Information
                </h2>
                <p className="mt-1 text-sm text-gray-600">
                    Update user account's profile information and email address.
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="name" value="Name" />
                    <TextInput
                        id="name"
                        className="mt-1 block w-full"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                        required
                        isFocused
                        autoComplete="name"
                    />
                    <InputError className="mt-2" message={errors.name} />
                </div>

                <div>
                    <InputLabel htmlFor="email" value="Email" />
                    <TextInput
                        id="email"
                        type="email"
                        className="mt-1 block w-full"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                        required
                        autoComplete="username"
                    />
                    <InputError className="mt-2" message={errors.email} />
                </div>

                <div>
    <InputLabel htmlFor="roles" value="Roles" />

    <select
        onChange={(e) => setData('roles', [e.target.value])}
        className="mt-1 block w-full"

    >
        {roles.map((role) => (
            <option
                key={role.name}
                value={role.name}
                selected={data.roles.includes(role.name)}
            >
                {role.name}
            </option>
        ))}
    </select>

    <InputError message={errors['roles']} className="mt-2" />
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


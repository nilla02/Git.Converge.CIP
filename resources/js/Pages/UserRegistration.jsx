import AuthenticatedLayoutAA from "@/Layouts/AuthenticatedLayoutAA";
import Footer from "@/Components/Footer";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";
import InputLabel from "@/Components/InputLabel";
import { useEffect } from "react";
import InputError from "@/Components/InputError";
import Authenticated from "@/Layouts/AuthenticatedSidebar";
import Swal from 'sweetalert2';
import { useForm } from "@inertiajs/react";

export default function Edit({ auth, users,groups,roles, notifications}) {
    console.log(users.roles)
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        group: "",
        temp_role:"",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("users.store"));
    };
    const handleClick = () =>{
        Swal.fire({

            icon: 'success',
            title: 'User has been registered',
            showConfirmButton: false,
            timer: 1500
          })
    }

    return (
        <AuthenticatedLayoutAA user={auth.user}
        notifications={notifications}>
            <Authenticated user={auth.user} />
            <header className="bg-cyan-600 text-white py-4">
                {/* ... (header content) */}
            </header>
            <div className="py-12">
                <div className="lg:ml-[235px] sm:px-6 lg:px-8">
                    <div className=" overflow-hidden shadow-sm sm:rounded-lg">
                        <form
                            onSubmit={submit}
                            className="bg-white rounded-xl p-10"
                        >
                            <div>
                                <InputLabel htmlFor="name" value="Name" />

                                <TextInput
                                    id="name"
                                    name="name"
                                    value={data.name}
                                    className="mt-1 block w-full"
                                    autoComplete="name"
                                    isFocused={true}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                    required
                                />

                                <InputError
                                    message={errors.name}
                                    className="mt-2"
                                />
                            </div>

                            <div className="mt-4">
                                <InputLabel htmlFor="email" value="Email" />

                                <TextInput
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    className="mt-1 block w-full"
                                    autoComplete="username"
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                    required
                                />

                                <InputError
                                    message={errors.email}
                                    className="mt-2"
                                />
                            </div>
                            <div className="mb-">
                                <InputLabel className="mb-2 "
                                    htmlFor="Role"
                                    value="Roles"
                                />

                                <select
                                    className="w-full rounded"
                                    value={data.temp_role}
                                    onChange={(e) =>
                                        setData(
                                            "temp_role",
                                            e.target.value
                                        )
                                    }
                                >
                                    <option value="">
                                        -Select User Role-
                                    </option>
                                    {roles.map((user) => (
                                        <option key={user.id} value={user.name}>
                                            {user.external_name}
                                        </option>
                                    ))}
                                </select>
                                <span className="text-red-600">
                                    {errors.group}
                                </span>
                            </div>

                            <div className="mb-">
                                <InputLabel className="mb-2 "
                                    htmlFor="group"
                                    value="group"
                                />

                                <select
                                    className="w-full rounded"
                                    value={data.group}
                                    onChange={(e) =>
                                        setData(
                                            "group",
                                            e.target.value
                                        )
                                    }
                                >
                                    <option value="">
                                        -Select Group-
                                    </option>
                                    {groups.map((user) => (
                                        <option key={user.id} value={user.Group_name}>
                                            {user.Group_name}
                                        </option>
                                    ))}
                                </select>
                                <span className="text-red-600">
                                    {errors.group}
                                </span>
                            </div>

                            <div className="mt-4">
                                <InputLabel
                                    htmlFor="password"
                                    value="Password"
                                />

                                <TextInput
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    className="mt-1 block w-full"
                                    autoComplete="new-password"
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                    required
                                />

                                <InputError
                                    message={errors.password}
                                    className="mt-2"
                                />
                            </div>

                            <div className="mt-4">
                                <InputLabel
                                    htmlFor="password_confirmation"
                                    value="Confirm Password"
                                />

                                <TextInput
                                    id="password_confirmation"
                                    type="password"
                                    name="password_confirmation"
                                    value={data.password_confirmation}
                                    className="mt-1 block w-full"
                                    autoComplete="new-password"
                                    onChange={(e) =>
                                        setData(
                                            "password_confirmation",
                                            e.target.value
                                        )
                                    }
                                    required
                                />

                                <InputError
                                    message={errors.password_confirmation}
                                    className="mt-2"
                                />
                            </div>

                            <div className="flex items-center justify-end mt-4">
                                <PrimaryButton
                                   onClick={handleClick}
                                    className="ml-4"
                                    disabled={processing}
                                >
                                    Register
                                </PrimaryButton>
                            </div>
                        </form>
                    </div>


</div></div>





            {/* Footer */}

        </AuthenticatedLayoutAA>
    );
}

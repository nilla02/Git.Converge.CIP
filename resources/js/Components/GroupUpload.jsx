import { Head, useForm, Link, usePage } from "@inertiajs/react";
import { BsCloudUpload } from "react-icons/bs";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";
import InputLabel from "@/Components/InputLabel";

export default function GroupUpload({ auth }) {
    const { message } = usePage().props;

    const { data, setData, errors, post } = useForm({
        First_Name: "",
        Last_Name: "",
        Group_Name: "",
        Licensee: "",

    });

    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append("First_Name", data.First_Name);
        formData.append("Last_Name", data.Last_Name);
        formData.append("Group_Name", data.Group_Name);
        formData.append("Licensee", data.Licensee);



        post(route("GroupModel.store"), formData);

        setData({
            First_Name: "",
            Last_Name: "",
            Group_Name: "",
            Licensee: "",
            Owner:"",
        });
    }

    return (
        <div className="p-6 bg-white border-b shadow-lg  sm:rounded-lg border-gray-200">


            <form name="createForm" onSubmit={handleSubmit}>
                <div className="flex flex-col">
                    <div className="mb-2">Create new company groups</div>

                    <div className="mb-4">
                        <InputLabel htmlFor="First Name" value="First Name" />
                        <TextInput
                            type="text"
                            className="mt-1 block w-full"
                            label="First Name"
                            name="First_Name"
                            value={data.First_Name}
                            onChange={(e) =>
                                setData("First_Name", e.target.value)
                            }
                        />
                        <span className="text-red-600">
                            {errors.First_Name}
                        </span>
                    </div>
                
                    <div className="mb-4">
                        <InputLabel htmlFor="Last Name" value="Last Name" />
                        <TextInput
                            type="text"
                            className="mt-1 block w-full"
                            value={data.Last_Name}
                            onChange={(e) =>
                                setData("Last_Name", e.target.value)
                            }
                        />
                        <span className="text-red-600">{errors.Last_Name}</span>
                    </div>

                    <div className="mb-4">
                        <InputLabel htmlFor="Agency" value="Agency" />
                        <TextInput
                            type="text"
                            className="mt-1 block w-full"
                            value={data.Group_Name}
                            onChange={(e) =>
                                setData("Group_Name", e.target.value)
                            }
                        />
                        <span className="text-red-600">
                            {errors.Group_Name}
                        </span>
                    </div>

                    <div className="mb-4">
                        <InputLabel htmlFor="Licensee" value=" Licensee" />
                        <TextInput
                            type="text"
                            className="mt-1 block w-full"
                            value={data.Licensee}
                            onChange={(e) =>
                                setData("Licensee", e.target.value)
                            }
                        />
                        <span className="text-red-600">{errors.Licensee}</span>
                    </div>
                </div>
                <div className="mt-4">
                    <PrimaryButton
                        type="submit"
                        className="px-6 py-2 font-bold text-white bg-black rounded"
                    >
                        Submit
                    </PrimaryButton>
                </div>
            </form>
        </div>
    );
}

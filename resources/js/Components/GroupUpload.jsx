import { Head, useForm, Link, usePage } from "@inertiajs/react";
import { BsCloudUpload } from "react-icons/bs";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";
import InputLabel from "@/Components/InputLabel";

export default function GroupUpload({ auth,countries,btype }) {
    const { message } = usePage().props;
console.log(countries)
    const { data, setData, errors, post } = useForm({
        First_Name: "",
        Last_Name: "",
        email:"",
        type_of_agency:"",
        address:"",
        Country:"",
        Group_Name: "",
        Licensee: "",

    });

    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append("email", data.email);
        formData.append("address", data.address);
        formData.append("type_of_agency", data.type_of_agency);
        formData.append("country", data.country);
        formData.append("First_Name", data.First_Name);
        formData.append("Last_Name", data.Last_Name);
        formData.append("Group_Name", data.Group_Name);
        formData.append("Licensee", data.Licensee);



        post(route("GroupModel.store"), formData);

        setData({
            First_Name: "",
            Last_Name: "",
            email:"",
            type_of_agency:"",
            address:"",
            Country:"",
            Group_Name: "",
            Licensee: "",
        });
    }

    return (
        <div className="p-6 bg-white border-b shadow-lg  sm:rounded-lg border-gray-200">


            <form name="createForm" onSubmit={handleSubmit}>
                <div className="flex flex-col">
                    <div className="mb-2">Create new company groups</div>
                    <div className="text-bold text-md text-cyan-900">Business Representative</div>
                    <div className="flex">
                    <div className="mb-4 flex-1 gap-2">

                        <TextInput
                            type="text"
                            className="mt-1  block w-full"
                            label="First Name"
                            name="First_Name"
                            value={data.First_Name}
                            onChange={(e) =>
                                setData("First_Name", e.target.value)
                            }
                        />
                         <InputLabel htmlFor="First Name" value="First Name" />
                        <span className="text-red-600">
                            {errors.First_Name}
                        </span>
                    </div>

                    <div className="mb-4 lg:ml-2 flex-1">

                        <TextInput
                            type="text"
                            className="mt-1  block w-full"
                            value={data.Last_Name}
                            onChange={(e) =>
                                setData("Last_Name", e.target.value)
                            }
                        />
                             <InputLabel htmlFor="Last Name" value="Last Name" />
                        <span className="text-red-600">{errors.Last_Name}</span>
                    </div>
                    </div>
                    <div className="mb-4">
                        <InputLabel htmlFor="Agency" value="Business Name" />
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

                    <InputLabel htmlFor="address" value="Business Type" />
<select
                            className="w-full rounded"
                            value={data.btype}
                            onChange={(e) => setData("type_of_agency", e.target.value)}
                        >
                            <option value="">
                               -Business Type-
                            </option>
                            {btype.map((user) => (
                                <option key={user.id} value={user.code}>
                                    {user.name}
                                </option>
                            ))}
                        </select>

<span className="text-red-600">
    {errors.Group_Name}
</span>
</div>
                    <div className="mb-4">
                        <InputLabel htmlFor="email" value="E-mail" />
                        <TextInput
                            type="text"
                            className="mt-1 block w-full"
                            value={data.email}
                            onChange={(e) =>
                                setData("email", e.target.value)
                            }
                        />
                        <span className="text-red-600">
                            {errors.Group_Name}
                        </span>
                    </div>
<div>Address    </div>
                    <div className="mb-4">


                        <TextInput
                            type="text"
                            className="mt-1 block w-full"
                            value={data.address}
                            onChange={(e) =>
                                setData("address", e.target.value)
                            }
                        />
                         <InputLabel htmlFor="address" value="Street Address" />
                        <span className="text-red-600">
                            {errors.address}
                        </span>
                    </div>

<div className="mb-4">


<select
                            className="w-full rounded"
                            value={data.country}
                            onChange={(e) => setData("country", e.target.value)}
                        >
                            <option value="">
                                -Location Country-
                            </option>
                            {countries.map((user) => (
                                <option key={user.id} value={user.code}>
                                    {user.name}
                                </option>
                            ))}
                        </select>
 <InputLabel htmlFor="address" value="Country/Nation" />
<span className="text-red-600">
    {errors.country}
</span>
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

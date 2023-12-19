
import { useEffect, useRef } from "react";
import { BsCloudUpload } from "react-icons/bs";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import StatusLabel from "@/Components/statuslabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import Swal from "sweetalert2";
const fields = {


    agent_investment_notes:{
        roles: ["agents", "compliance_officer", "website_admin", "promoter"],
        label: "Agent investment notes",
        field: "comment",
        type: "text",
    },

};
const Bio = (
    submission,
    auth,
    risk,
    country,
    region,
    toi,
    toa
) =>
 {
    const {
        data,
        setData,
        errors,
        put,
        reset,
        post,
        processing,
        recentlySuccessful,
    } = useForm({
        ...submission,
    });

    function handleFileChange(key, e) {
        const files = e.target.files
        setData(key,files.length>1?files:files[0]);
    }

    function displayfiles(value){

        if(Array.isArray(value)){

return value.map(x=>(

        <li>
            <a href={x} target="_blank" rel="noopener noreferrer">
            <span style={{textDecoration: 'underline', color:'blue'}}>{x}</span>
            </a> - <button onClick={(e) => {e.preventDefault();  }} >Delete</button>
        </li>

        ))
        }
        return ""
    }
    const updatePassword = (e) => {
        e.preventDefault();
        const isConfirmed = window.confirm("Are you sure you want to save?");

        if (isConfirmed) {
        data._method = "put";
        const formData = new FormData();
        for (const key in data) {
            formData.append(key, data[key]);
        }
        post(route("submission.update", submission.id), {
            preserveScroll: true,
            // onSuccess: () => reset(),
            onError: (errors) => {

            },
        });
    }
    };
    const handleClick = () => {
        Swal.fire({
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
        });
    };

    const updatehandleClick = () => {
        setData("status_id", 12);
    };
    const handleFileDelete = (key) => {
        setData(key, null);
    };

    const genField = (key) => {
        const field = fields[key];

        const userRole = auth.user.role_names[0] || "0";
console.log(auth)


        if (field.roles && !field.roles.includes(userRole)) {
            return <div key={key}></div>;
        }

        if (field.field === "country") {
            return (
                <div key={key}>
                    <InputLabel htmlFor={key} value={field.label} />
                    <select
                        className="w-full rounded"
                        value={data.country_id} // Set the default value to the stored country ID
                        onChange={(e) => setData("country_id", e.target.value)}
                    >
                        <option value="" >
                            Select a country
                        </option>
                        {country.map((user) => (
                            <option key={user.id} value={user.id}>
                                {user.name}
                            </option>
                        ))}
                    </select>
                    <InputError message={errors[key]} className="mt-2" />
                </div>
            );
        }

        if (field.field === "region") {
            return (
                <div key={key}>
                    <InputLabel htmlFor={key} value={field.label} />
                    <select
                        className="w-full rounded"
                        value={data.Region || ""} // Set the default value to the stored country ID
                        onChange={(e) => setData("Region", e.target.value)}
                    >
                        <option value="" disabled>
                            Select a Region
                        </option>
                        {region.map((user) => (
                            <option key={user.id} value={user.code}>
                                {user.name}
                            </option>
                        ))}
                    </select>
                    <InputError message={errors[key]} className="mt-2" />
                </div>
            );
        }

        if (field.field === "TOI") {
            return (
                <div key={key}>
                    <InputLabel htmlFor={key} value={field.label} />
                    <select
                        className="w-full rounded"
                        value={data.type_of_investment || ""}
                        onChange={(e) => setData("type_of_investment", e.target.value)}
                    >
                        <option value="" disabled>
                            Select a Region
                        </option>
                        {toi.map((user) => (
                            <option key={user.id} value={user.code}>
                                {user.name}
                            </option>
                        ))}
                    </select>
                    <InputError message={errors[key]} className="mt-2" />
                </div>
            );
        }

        if (field.field === "TOA") {
            return (
                <div key={key}>
                    <InputLabel htmlFor={key} value={field.label} />
                    <select
                        className="w-full rounded"
                        value={data. type_of_applicant || ""}
                        onChange={(e) => setData(" type_of_applicant", e.target.value)}
                    >
                        <option value="" disabled>
                            Select a applicant type.
                        </option>
                        {toa.map((user) => (
                            <option key={user.id} value={user.code}>
                                {user.name}
                            </option>
                        ))}
                    </select>
                    <InputError message={errors[key]} className="mt-2" />
                </div>
            );
        }
        if (field.field === "input") {

            return (
                <div key={key}>
                    <InputLabel htmlFor={key} value={field.label} />

                    <TextInput
                        id={key}
                        value={data[key]}
                        onChange={(e) => setData(key, e.target.value)}
                        type={field.type}
                        className="mt-1 block w-full"
                        name={key}
                    />

                    <InputError message={errors[key]} className="mt-2" />
                </div>
            );
        }
        if (field.field === "comment") {
            return (
                <div key={key}>
                    {/* Input Label */}
                    <InputLabel htmlFor={key} value={field.label} />

                    {/* Text Input */}
                    <textarea  id={key}
                        value={data[key]}
                        onChange={(e) => setData(key, e.target.value)}
                        type={field.type}
                        className="mt-1 block w-full resize rounded-md"
                        name={key} ></textarea>




                    {/* Input Error */}
                    <InputError message={errors[key]} className="mt-2" />
                </div>
            );
        }
        if (field.field === "select_2") {
            return (
                <div >
                    <InputLabel htmlFor={key} value={field.label} />

                    <select
                            className="w-full rounded"
                            value={data.risk_level}
                            onChange={(e) => setData("risk_level", e.target.value)}
                        >
                            <option value="">
                                -Select Risk Level-
                            </option>
                            {risk.map((user) => (
                                <option key={user.id} value={user.id}>
                                    {user.name}
                                </option>
                            ))}
                        </select>

                    <InputError message={errors[key]} className="mt-2" />
                </div>
            );
        }

        if (field.field === "select_country") {
            return (
                <div >
                    <InputLabel htmlFor={key} value={field.label} />


                    <InputError message={errors[key]} className="mt-2" />
                </div>
            );
        }
        if (field.field === "check_box") {
            return (
                <div key={key}>
                    <InputLabel htmlFor={key} value={field.label} />

                    <input
                        type="checkbox"
                        checked={data[key] === "yes"}
                        onChange={(e) => {
                            const isChecked = e.target.checked;
                            setData(key, isChecked ? "yes" : "");
                        }}
                    />

                    <InputError message={errors[key]} className="mt-2" />
                </div>
            );
        }

        if (field.field === "check_box2") {
            return (
                <div key={key}>
                    <InputLabel htmlFor={key} value={field.label} />

                    <input
                        type="checkbox"
                        checked={data[key] === "yes"}
                        onChange={(e) => {
                            const isChecked = e.target.checked;
                            setData(key, isChecked ? "yes" : "");
                        }}
                    />

                    <InputError message={errors[key]} className="mt-2" />
                </div>
            );
        }


///select
        if (field.field === "select" && field.options) {
            let filteredOptions = field.options;

            // If the user role is "agents", filter the options
            if (userRole === "agents") {
                const allowedStatuses = [12,17,28];
                filteredOptions = field.options.filter((option) =>
                    allowedStatuses.includes(option.value)
                );
            }
            // If the user role is "compliance_officer", filter the options
            if (userRole === "compliance_officer") {
                const allowedStatuses = [

                    17,
                    2,
                   14,
                  15,
                    19,
                ];
                filteredOptions = field.options.filter((option) =>
                    allowedStatuses.includes(option.value)
                );
            }
            // If the user role is "compliance_officer", filter the options
            if (userRole === "due_diligence_officer") {
                const allowedStatuses = [
                    2,
                   3,
                   4,
                  5,

                ];
                filteredOptions = field.options.filter((option) =>
                    allowedStatuses.includes(option.value)
                );
            }
            if (userRole === "corp_sec") {
                const allowedStatuses = [
                    5,
                  8,
                   9,
                    32,
                    33,
                    16,
                   23,
                  24,
                   25,


                ]
                filteredOptions = field.options.filter((option) =>
                    allowedStatuses.includes(option.value)
                );
            }
            if (userRole === "processing") {
                const allowedStatuses = [
                    6,
                   7,
               11,
                  26,
                   32,
                    33,
                 28,
                  29,
                   30,
               31,

                ]
                filteredOptions = field.options.filter((option) =>
                    allowedStatuses.includes(option.value)
                );
            }

            return (
                <div key={key}>
                    <StatusLabel htmlFor={key} value={field.label} />

                    <select
                        id={key}
                        onChange={(e) => setData(key, e.target.value)}
                        className="mt-1 block w-full"
                        name={key}
                    >
                        {filteredOptions.map((option) => (
                            <option
                                selected={data[key] === option.value}
                                key={option.value}
                                value={option.value}
                            >
                                {option.label}
                            </option>
                        ))}
                    </select>

                    <InputError message={errors[key]} className="mt-2" />
                </div>
            );
        }
        if (field.field === "file") {
            const val = data[key];

            if (!val || val instanceof File) {
                const handleDrop = (e) => {
                    e.preventDefault();
                    const droppedFile = e.dataTransfer.files[0];

                    // Check if the dropped file type is allowed
                    if (isFileAllowed(droppedFile)) {
                        handleFileChange(key, { target: { files: [droppedFile] } });
                    } else {
                        // Handle file type not allowed

                    }
                };

                const isFileAllowed = (file) => {
                    const allowedTypes = ["image/png", "image/jpeg", "application/pdf"];
                    return allowedTypes.includes(file.type);
                };

                return (
                    <div key={key}>
                        <div className="mb-0">
                            <label htmlFor={key}>{field.label}</label>
                            <div
                                className="relative"
                                onDrop={handleDrop}
                                onDragOver={(e) => e.preventDefault()}
                            >
                                {val && (val.type === "application/pdf" || val.type.startsWith("image/")) ? (
                                    val.type === "application/pdf" ? (
                                        <embed
                                            src={URL.createObjectURL(val)}
                                            type="application/pdf"
                                            width="100%"
                                            height="500px"
                                        />
                                    ) : (
                                        <img
                                            src={URL.createObjectURL(val)}
                                            alt="Uploaded File"
                                            style={{ maxWidth: "100%", maxHeight: "500px" }}
                                        />
                                    )
                                ) : (
                                    <div
                                        className="border-dashed border-2 border-gray-400 p-4 mt-4 text-center cursor-pointer"
                                        onClick={() =>
                                            document
                                                .querySelector(`input[name="${key}"]`)
                                                .click()
                                        }
                                        onDragOver={(e) => e.preventDefault()}
                                        onDrop={handleDrop}
                                    >
                                        <BsCloudUpload className="text-3xl mb-2 mx-auto text-gray-400" />
                                        <p className="text-gray-500">
                                            {val
                                                ? "File type not supported."
                                                : "Drag and drop a file here or click to select a file."}
                                        </p>
                                        <input
                                            type="file"
                                            className="hidden"
                                            name={key}
                                            onChange={(e) => handleFileChange(key, e)}
                                        />
                                    </div>
                                )}
                            </div>
                            <span className="text-red-600">{errors.File}</span>
                        </div>
                    </div>
                );
            }

            return (
                <div className="">
                    <label htmlFor={key}>{field.label}</label>
                    <a className="ml-2 text-blue-500 rounded-sm" href={val} target="_blank" rel="noopener noreferrer">
                        View File
                    </a>{" "}
                    <button
                        type="button"
                        onClick={() => handleFileDelete(key)}
                        className="text-red-500 hover:text-red-700"
                    >
                        Delete
                    </button>
                </div>
            );
        }


        if (field.field === "xfile") {
            const val = data[key];

            if (!val || val instanceof File) {
                const handleDrop = (e) => {
                    e.preventDefault();
                    const droppedFile = e.dataTransfer.files[0];
                    handleFileChange(key, { target: { files: [droppedFile] } });
                };

                return (
                    <div key={key}>
                        <div className="mb-0">
                            <InputLabel htmlFor={key} value={field.label} />
                            <div
                                className="relative"
                                onDrop={handleDrop}
                                onDragOver={(e) => e.preventDefault()}
                            >
                                {val && val.type === "application/pdf" ? (
                                    <embed
                                        src={URL.createObjectURL(val)}
                                        type="application/pdf"
                                        width="100%"
                                        height="500px"
                                    />
                                ) : (
                                    <div
                                        className="border-dashed border-2 border-gray-400 p-4 mt-4 text-center cursor-pointer"
                                        onClick={() =>
                                            document
                                                .querySelector(
                                                    `input[name="${key}"]`
                                                )
                                                .click()
                                        }
                                        onDragOver={(e) => e.preventDefault()}
                                        onDrop={handleDrop}
                                    >
                                        <BsCloudUpload className="text-3xl mb-2 mx-auto text-gray-400" />
                                        <p className="text-gray-500">
                                            {val
                                                ? "File type not supported."
                                                : "Drag and drop a file here or click to select a file."}
                                        </p>
                                        <input
                                            type="file"
                                            multiple
                                            className="hidden"
                                            name={key}
                                            onChange={(e) =>
                                                handleFileChange(key, e)
                                            }
                                        />
                                    </div>
                                )}
                            </div>
                            <span className="text-red-600">{errors.File}</span>
                        </div>
                    </div>
                );
            }

            return (
                <div>
                    <InputLabel htmlFor={key} value={field.label} />
                    <ul>
                    {displayfiles(val)}

</ul>


                </div>
            );
        }
    };

  return (

    <form
    onSubmit={updatePassword}
    enctype="multipart/form-data"
    className="mt-6 space-y-6"
>
    {Object.keys(fields).map((key) => {
        return genField(key);
    })}

    <div className="flex items-center gap-4">
        <PrimaryButton
            type="submit"
            disabled={processing}
            onClick={handleClick}
        >
            Save
        </PrimaryButton>
      \
        {data.status_id === 12 && (
        <PrimaryButton
            type="submit"
            disabled={processing}
            onClick={updatehandleClick}
        >
            Save
        </PrimaryButton>
    )}
        <Transition
            show={recentlySuccessful}
            enterFrom="opacity-0"
            leaveTo="opacity-0"
            className="transition ease-in-out"
        >
            <p className="text-sm text-gray-600">
                Saved.
            </p>
        </Transition>
    </div>
</form>
  );
};

export default Bio;

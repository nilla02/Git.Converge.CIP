import { useEffect, useRef } from "react";
import { BsCloudUpload } from "react-icons/bs";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import AuthenticatedLayoutAA from "@/Layouts/AuthenticatedLayoutAA";
import Authenticated from '@/Layouts/AuthenticatedSidebar';
import Swal from 'sweetalert2';

const fields = {
    document_checklist_path: {
        roles: [
            "agents",
            "compliance_officer",
            "due_diligence_officer",
            "website_admin",
            "processing",
            "ceo",
            "promoter",
            "risk_assessment_officer",
        ],
        label: "Document Checklist (SL1)",
        field: "file",
        type: "text",
    },
    authorized_agent_form_path: {
        roles: [
            "agents",
            "due_diligence_officer",
            "compliance_officer",
            "website_admin",
            "ceo",
            "processing",
            "promoter",
            "risk_assessment_officer",
        ],
        label: "Use of Authorized Agent Form (SL2)",
        field: "file",
        type: "text",
    },

    alternative_citizenship_path: {
        roles: [
            "agents",
            "corp_sec",
            "due_diligence_officer",
            "compliance_officer",
            "processing",
            "corp_sec",
            "website_admin",
            "ceo",
            "promoter",
            "risk_assessment_officer",
        ],
        label: "Statement of Alternative Citizenship (SL3)",
        field: "file",
        type: "text",
    },

    confirmation_form_path: {
        roles: [
            "agents",
            "compliance_officer",
            "due_diligence_officer",
            "website_admin",
            "corp_sec",
            "processing",
            "ceo",
            "promoter",
            "corp_sec",
        ],
        label: "Investment Confirmation Form (SL4)",
        field: "file",
        type: "text",
    },

    Registration_application_path: {
        roles: [
            "agents",
            "compliance_officer",
            "due_diligence_officer",
            "website_admin",
            "corp_sec",
            "processing",
            "ceo",
            "promoter",
        ],
        label: "Application for Registration as a Citizen of Saint Lucia (SL5)",
        field: "file",
        type: "text",
    },

    photograph_certificate_path: {
        roles: [
            "agents",
            "compliance_officer",
            "processing",
            "due_diligence_officer",
            "website_admin",
            "ceo",
            "promoter",
            "corp_sec"
        ],
        label: "Photograph and Signature Certificate (SL6)",
        field: "file",
        type: "text",
    },

    sworn_affidavit_spouse_path: {
        roles: [
            "agents",
            "compliance_officer",
            "due_diligence_officer",
            "website_admin",
            "ceo",
            "processing",
            "corp_sec",
            "promoter",
        ],
        label: "Sworn Affidavit of Support (SL7)",
        field: "file",
        type: "text",
    },

    medical_examiner_declaration_path: {
        roles: [
            "agents",
            "compliance_officer",
            "due_diligence_officer",
            "website_admin",
            "ceo",
            "processing",
            "promoter",
            "corp_sec",
        ],
        label: "Medical Examiner Details and Declaration (SL8)",
        field: "file",
        type: "text",
    },




};

export default function EditSubmissions({ className = "", submission, auth ,users,notifications }) {
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
    console.log(auth);
    function handleFileChange(key, e) {
        setData(key, e.target.files[0]);
    }

    const updatePassword = (e) => {
        e.preventDefault();

        data._method = "put";
        const formData = new FormData();
        for (const key in data) {
            formData.append(key, data[key]);
        }
        post(route("submission.update", submission.id), {
            preserveScroll: true,
            // onSuccess: () => reset(),
            onError: (errors) => {
                console.log(errors);
            },
        });
    };
    const handleClick = () =>{
        Swal.fire({

            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          })
    }
    const handleFileDelete = (key) => {
        setData(key, null);
    };
    const genField = (key) => {
        const field = fields[key];
        const userRole = auth.user.role_names[0] || "0";

        // console.log("Processing field:", key);

        // console.log("Field type:", field?.field);

        // console.log(auth.user);

        if (field.roles && !field.roles.includes(userRole)) {
            return <div key={key}></div>;
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
                        readOnly={true}
                        className="mt-1 block w-full"
                        name={key}
                    />

                    <InputError message={errors[key]} className="mt-2" />
                </div>
            );
        }
        if (field.field === "select" && field.options) {
            let filteredOptions = field.options;

            // If the user role is "agents", filter the options
            if (userRole === "agents") {
                const allowedStatuses = ["Draft", "pre-processing_draft"];
                filteredOptions = field.options.filter((option) =>
                    allowedStatuses.includes(option.value)
                );
            }
            // If the user role is "compliance_officer", filter the options
            if (userRole === "compliance_officer") {
                const allowedStatuses = [
                    "pre-processing_draft",
                    "pre-processing_accept",
                ];
                filteredOptions = field.options.filter((option) =>
                    allowedStatuses.includes(option.value)
                );
            }
            // If the user role is "compliance_officer", filter the options
            if (userRole === "due_diligence_officer") {
                const allowedStatuses = [
                    "Pending_Background_check",
                    "Pending_Decision",
                    "Granted",
                    "Query_Application",
                    "Background_check_Underway",
                ];
                filteredOptions = field.options.filter((option) =>
                    allowedStatuses.includes(option.value)
                );
            }
            return (
                <div key={key}>
                    <InputLabel htmlFor={key} value={field.label} />

                    <select
                        id={key}
                        readOnly={true}
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
                                            className="hidden"
                                            name={key}
                                            readOnly={true}
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
                    <a href={val} target="_blank">
                        {val}
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
    };
    return (
        <AuthenticatedLayoutAA user={auth.user}
        notifications={notifications}>
             <Authenticated user={auth.user}/>
            <body className="flex flex-col ">
                <div className="flex">
                    <div className="hidden sm:block">

                    </div>

                    <div className="flex-grow bg-white shadow-lg min-h-screen  ml-[20px] p-[15px]">
                        <div className="flex-1 overflow-y-auto lg:ml-[180px] lg:p-[120px]">
                            <section className={className}>
                                <header>
                                    <h2 className="text-lg font-medium text-gray-900">
                                    Form Information
                                    </h2>
                                    <table className="w-full text-sm text-left text-black border-collapse border border-gray-300">
  <thead className="text-dark:bg-gray-700 text-black">
    <tr>
      <th scope="col" className="px-3 py-2 border">
        Name
      </th>
      <th scope="col" className="px-3 py-2 border">
        Details
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" className="px-3 py-2 border">
        Reference Number
      </th>
      <td className="px-3 py-2 border">{submission.ref_number}</td>
    </tr>
    <tr>
      <th scope="row" className="px-3 py-2 border">
        Applicant
      </th>
      <td className="px-3 py-2 border">
        {submission.first_name} {submission.last_name}
      </td>
    </tr>
    <tr>
      <th scope="row" className="px-3 py-2 border">
        Authorized Agent
      </th>
      <td className="px-3 py-2 border">{submission.agent_id}</td>
    </tr>
    <tr>
      <th scope="row" className="px-3 py-2 border">
        Authorized Agent License Number
      </th>
      <td className="px-3 py-2 border">{submission.agent_id}</td>
    </tr>
    <tr>
      <th scope="row" className="px-3 py-2 border">
        Status
      </th>
      <td className="px-3 py-2 border">{submission.status.external_title}</td>
    </tr>
    <tr>
      <th scope="row" className="px-3 py-2 border">
        Region
      </th>
      <td className="px-3 py-2 border">{submission.Region}</td>
    </tr>
    <tr>
      <th scope="row" className="px-3 py-2 border">
        Submit Date
      </th>
      <td className="px-3 py-2 border">{submission.created_at}</td>
    </tr>
  </tbody>
</table>

                                    <p className="mt-2 text-sm text-gray-600">
                                       View Information on the Applicant being reviewd
                                    </p>
                                </header>

<div>
{Object.keys(fields).map((key) => {
                                        return genField(key);
                                    })}
</div>





                            </section>
                        </div>

                        <div className="flex-grow"></div>
                    </div>
                </div>
            </body>
        </AuthenticatedLayoutAA>
    );
}

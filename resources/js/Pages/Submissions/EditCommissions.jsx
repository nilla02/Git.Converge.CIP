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



    country_id: {
        roles: [
            "agents",
            "compliance_officer",
            "website_admin",
            "ceo",
            "promoter",
            "risk_assessment_officer",
        ],
        label: "Country of Residence",
        field: "country",
        type: "text",
    },
    ddo_notes: {
        roles: ["due_diligence_officer",   "risk_assessment_officer", "website_admin", "ceo", "promoter"],
        label: "DDO Notes",
        field: "comment",
        type: "text",
    },
    co_notes: {
        roles: ["compliance_officer", "website_admin",   "risk_assessment_officer", "ceo", "promoter"],
        label: "Verification Officer Notes",
        field: "comment",
        type: "text",
    },
    Region: {
        roles: [
            "agents",
            "compliance_officer",
            "website_admin",
            "ceo",
            "promoter",
            "risk_assessment_officer",
        ],
        label: "Region",
        label: "Region",
        field: "region",
        type: "text",
    },
    citizenship_certificate_id:{
        roles: [

            "processing",
            "website_admin",
            "ceo",

        ],
        label: "COR",
        field: "input",
        type: "text",
    },
    type_of_applicant: {
        roles: ["agents", "compliance_officer", "website_admin", "ceo"],
        label: "Type of Applicant",
        field: "TOA",
        type: "text",
    },
    type_of_investment: {
        roles: ["agents", "compliance_officer", "website_admin", "ceo"],
        label: "Type of investment",
        field: "TOI",
        type: "text",
    },

    risk_level:{
        roles: [ "website_admin","due_diligence_officer"],
        label: "Risk_Level",
        field: "select_2",

    },
    payment_amount:{
        roles: ["accountant","website_admin"],
        label: "Total payment receive",
        field: "input",
        type: "text",
    },
    law_enforcement_sent:
    {
        roles:["due_diligence_officer","website_admin","ceo"],
        label:"law_enforcement_sent",
        field:"check_box",
    },

    accounts_approval:
    {
        roles:["accountant","ceo","website_admin"],
        label:"accounts_approval",
        field:"check_box",
    },
    document_checklist_path: {
        roles: [
            "agents",
            "compliance_officer",

            "website_admin",
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

            "compliance_officer",
            "website_admin",
            "ceo",
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

            "compliance_officer",
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

            "website_admin",
            "corp_sec",
            "ceo",
            "promoter",
            "corp_sec",
        ],
        label: "Investment Confirmation Form (SL4)",
        field: "file",
        type: "text",
    },

    registration_application_path: {
        roles: [
            "agents",
            "compliance_officer",

            "website_admin",
            "corp_sec",

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

            "website_admin",
            "ceo",
            "promoter",
            "corp_sec"
        ],
        label: "Photograph and Signature Certificate (SL6)",
        field: "file",
        type: "text",
    },
    law_enforcement_report_path:{
        roles: [

"due_diligence_officer",
            "website_admin",
            "ceo",

        ],
        label: "Law enforcement report",
        field: "file",
        type: "text",
    },
    ddo_assessment_path:{
        roles: [

"due_diligence_officer",
            "website_admin",
            "ceo",

        ],
        label: "Due Diligence Assessment",
        field: "file",
        type: "text",
    },
    file_path:{
        roles: [

"due_diligence_officer",
            "website_admin",
            "ceo",

        ],
        label: "Addition Files",
        field: "xfile",
        type: "text",
    },

    sworn_affidavit_spouse_path: {
        roles: [
            "agents",
            "compliance_officer",

            "website_admin",
            "ceo",
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

            "website_admin",
            "ceo",
            "promoter",
            "corp_sec",
        ],
        label: "Medical Examiner Details and Declaration (SL8)",
        field: "file",
        type: "text",
    },

    birth_record_path: {
        roles: [
            "agents",
            "compliance_officer",

            "website_admin",
            "ceo",
            "corp_sec",
            "promoter",
        ],
        label: "Birth Record",
        field: "file",
        type: "text",
    },

    citizenship_certificate_path: {
        roles: [
            "agents",
            "compliance_officer",
"processing",
            "website_admin",
            "ceo",
            "promoter",
            "corp_sec",
        ],
        label: "Certificate(s) of Citizenship ",
        field: "file",
        type: "text",
    },

    residence_card_path: {
        roles: [
            "agents",
            "compliance_officer",

            "website_admin",
            "ceo",
            "promoter",
            "corp_sec"
        ],
        label: "Permanent Residence Card or Certificate",
        field: "file",
        type: "text",
    },
    national_id_path: {
        roles: [
            "agents",
            "compliance_officer",

            "website_admin",
            "ceo",
            "promoter",
            "corp_sec"
        ],
        label: "National Identity Card",
        field: "file",
        type: "text",
    },
    source_of_funds_path: {
        roles: [
            "agents",
            "compliance_officer",

            "website_admin",
            "ceo",
            "promoter",
            "accountant",
            "corp_sec",
        ],
        label: "Source of Funds",
        field: "file",
        type: "text",
    },
    current_passport_pages_path: {
        roles: [
            "agents",
            "compliance_officer",
            "website_admin",
            "ceo",
            "promoter",
            "corp_sec"
        ],
        label: "Passport Pages",
        field: "file",
        type: "text",
    },

    visas_path: {
        roles: [
            "agents",
            "compliance_officer",
            "website_admin",
            "ceo",
            "corp_sec",
            "promoter",
        ],
        label: "Visas",
        field: "file",
        type: "text",
    },

    apostille_path: {
        roles: [
            "agents",
            "compliance_officer",
            "website_admin",
            "ceo",
            "promoter",
            "corp_sec",
        ],
        label: "Copy of Apostille",
        field: "file",
        type: "text",
    },

    passport_sized_photos_path: {
        roles: [
            "agents",
            "compliance_officer",
            "website_admin",
            "ceo",
            "promoter",
        ],
        label: "Passport-sized Photos",
        field: "file",
        type: "text",
    },

    proof_of_residence_path: {
        roles: [
            "agents",
            "compliance_officer",
            "website_admin",
            "corp_sec",
            "ceo",
            "promoter",
        ],
        label: "Proof of Residential Address Document",
        field: "file",
        type: "text",
    },
    proof_of_investment_path:{
        roles: [
            "agents",
            "compliance_officer",
            "website_admin",
            "ceo",
            "corp_sec",
            "promoter",
            "accountant",
        ],
        label: "Proof of Investment",
        field: "file",
        type: "text",
    },
    marriage_certificate_path: {
        roles: [
            "agents",
            "compliance_officer",
            "website_admin",
            "ceo",
            "promoter",
            "corp_sec",
        ],
        label: "Marriage Record or Certificate",
        field: "file",
        type: "text",
    },

    divorce_decree_path: {
        roles: [
            "agents",
            "compliance_officer",
            "website_admin",
            "ceo",
            "corp_sec",
            "promoter",
        ],
        label: "Divorce Decree Document",
        field: "file",
        type: "text",
    },

    police_certificates_path: {
        roles: [
            "agents",
            "compliance_officer",
            "law_enforcement_officer",
            "website_admin",
            "ceo",
            "corp_sec",
            "promoter",
        ],
        label: "Police Certificate",
        field: "file",
        type: "text",
    },

    custody_records_path: {
        roles: [
            "agents",
            "compliance_officer",
            "website_admin",
            "ceo",
            "promoter",
        ],
        label: "Custody or Legal guardianship Records",
        field: "file",
        type: "text",
    },

    statutory_declaration_path: {
        roles: [
            "agents",
            "compliance_officer",
            "website_admin",
            "ceo",
            "promoter",
        ],
        label: "Statutory Declaration of Non-Accompying Parent",
        field: "file",
        type: "text",
    },

    copy_of_parent_id_path: {
        roles: [
            "agents",
            "compliance_officer",
            "website_admin",
            "ceo",
            "promoter",
        ],
        label: "Photo ID of a Non-accompaying Parent",
        field: "file",
        type: "text",
    },

    professional_certificate_translator_path: {
        roles: [
            "agents",
            "compliance_officer",
            "website_admin",
            "ceo",
            "promoter",
        ],
        label: "Professional certificate translator",
        field: "file",
        type: "text",
    },

    apostille_path: {
        roles: [
            "agents",
            "compliance_officer",
            "website_admin",
            "ceo",
            "promoter",
        ],
        label: "Curriculum Vitae",
        field: "file",
        type: "text",
    },

    professional_certificate_notary_path: {
        roles: [
            "agents",
            "compliance_officer",
            "website_admin",
            "ceo",
            "promoter",
        ],
        label: "Professional Reference Document",
        field: "file",
        type: "text",
    },

    professional_certificate_attorney_path: {
        roles: ["agents", "compliance_officer", "website_admin", "promoter"],
        label: "Professional and Academic Certificates",
        field: "file",
        type: "text",
    },


    professional_certificate_oaths_commissioner_path: {
        roles: ["agents", "compliance_officer", "website_admin", "promoter"],
        label: "Official Transcripts from Educational Institution",
        field: "file",
        type: "text",
    },

    net_worth_document_support_path: {
        roles: ["agents", "compliance_officer", "website_admin", "promoter"],
        label: "Net worth document",
        field: "file",
        type: "text",
    },
	proof_of_payment_path: {
        roles: ["agents", "compliance_officer", "website_admin", "promoter"],
        label: "Proof of payment",
        field: "file",
        type: "text",
    },
    sworn_affidavit_financial_path: {
        roles: ["agents", "compliance_officer", "website_admin", "promoter"],
        label: "Sworn Affidavit Financial",
        field: "file",
        type: "text",
    },
    sworn_affidavit_spouse_path: {
        roles: ["agents", "compliance_officer", "website_admin", "promoter"],
        label: "Sworn Affidavit Spouse",
        field: "file",
        type: "text",
    },
    academic_certificates_path: {
        roles: ["agents", "compliance_officer", "website_admin", "promoter"],
        label: "Academic Certificates",
        field: "file",
        type: "text",
    },
    military_records_path: {
        roles: ["agents", "compliance_officer", "website_admin", "promoter"],
        label: "Military Records",
        field: "file",
        type: "text",
    },
    curriculum_vitae_path: {
        roles: ["agents", "compliance_officer", "website_admin", "promoter"],
        label: "Curriculum vitae",
        field: "file",
        type: "text",
    },
    professional_reference_path: {
        roles: ["agents", "compliance_officer", "website_admin", "promoter"],
        label: "Professional reference",
        field: "file",
        type: "text",
    },
    bank_reference_path: {
        roles: ["agents", "compliance_officer", "website_admin", "promoter"],
        label: "Bank reference",
        field: "file",
        type: "text",
    },
    sworn_affidavit_financial_path: {
        roles: ["agents", "compliance_officer", "website_admin", "promoter"],
        label: "Sworn affidavit financial",
        field: "file",
        type: "text",
    },

    ceo_assessment_path: {
        roles: ["agents", "compliance_officer", "website_admin", "promoter"],
        label: "Chief Operating Officer assessment",
        field: "file",
        type: "text",
    },
    co_assessment_path: {
        roles: ["agents", "compliance_officer", "website_admin", "promoter"],
        label: "Verification Assessment",
        field: "file",
        type: "text",
    },
    proof_of_investment_transferred_path: {
        roles: ["agents", "compliance_officer", "website_admin", "promoter"],
        label: "Proof of investment transferred",
        field: "file",
        type: "text",
    },
    co_agent_notes: {
        roles: ["agents", "compliance_officer", "website_admin", "promoter"],
        label: "Agent co_notes ",
        field: "comment",
        type: "text",
    },
    ceo_agent_notes: {
        roles: ["agents", "compliance_officer", "website_admin", "promoter"],
        label: "Chief Operating Officer Agent notes",
        field: "comment",
        type: "text",
    },
    certified_copy_professional_certificate_medical_examiner_path: {
        roles: ["agents", "compliance_officer", "website_admin", "promoter"],
        label: "Professional Medical examinar certificate",
        field: "file",
        type: "text",
    },
    agent_investment_notes:{
        roles: ["agents", "compliance_officer", "website_admin", "promoter"],
        label: "Agent investment notes",
        field: "comment",
        type: "text",
    },



  addon: {
        roles: ["agents", "compliance_officer", "website_admin", "promoter"],
        label: "Addons",
        field: "xfile",
        type: "text",
    },
};

export default function EditSubmissions({ className = "", submission, auth ,notifications }) {
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
    console.log(submission.agent);
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
                <div className="mt-4 text-blue-500">
                    <InputLabel htmlFor={key} value={field.label} />
                    <a href={val} target="_blank">
                     View Application
                    </a>{" "}

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
      <td className="px-3 py-2 border">{submission.agency}</td>
    </tr>
    <tr>
      <th scope="row" className="px-3 py-2 border">
Representative
      </th>
      <td className="px-3 py-2 border">{submission.agent.name}</td>
    </tr>

    <tr>
      <th scope="row" className="px-3 py-2 border">
      Promoter
      </th>
      <td className="px-3 py-2 border">{submission.users}</td>
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
      <td className="px-3 py-2 border">{submission.country.name}</td>
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

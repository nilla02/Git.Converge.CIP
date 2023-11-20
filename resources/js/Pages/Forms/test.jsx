    // import AuthenticatedLayoutAA from "@/Layouts/AuthenticatedLayoutAA";
    // import React, { useState, useEffect } from "react";
    // import Footer from '@/Components/Footer';
    // import { useState } from 'react';
    // import SB2 from '@/Components/AAComp/SB2';

    // export default function Dashboard({ auth, users,roles }) {
    //   const [editingProjectId, setEditingProjectId] = useState(null);

    //   console.log(roles)
    // console.log(auth.user);



    //   const handleEditProject = (projectId) => {
    //     setEditingProjectId(projectId);
    //   };

    //   const columnsByRole = {
    //     'agents': ['First Name', 'Last Name', 'Status', 'Actions',],
    //     'super_administrators': ['First Name', 'Last Name', 'Status','Actions'],
    //     'compliance_officer':['First Name','Last Name','Status','FV' ,'co_notes'],
    //     'due_diligence_officer':['First Name','Last Name','Status','FV' ,'co_notes'],
    //     'law_enforcement_officer':['First Name','Last Name','Status','FV' ,'ddo_notes'],
    //     'website_admin':['First Name','Last Name','Status','FV' ,'ddo_notes'],
    //   };

    //   const isColumnVisible = (columnName) => {
    //     const userRole = auth.user.roles[0]?.name;
    //     console.log(auth.user.roles[0]?.name);
    //     return columnsByRole[userRole]?.includes(columnName);

    //   };




    //   return (
    //     <AuthenticatedLayoutAA user={auth.user}>
    //       <div className="flex flex-col min-h-screen">

    //         <div className="flex">
    //           <div className="hidden sm:block">
    //             {/* Sidebar */}
    //             <SB2 />
    //           </div>

    //           <div className="flex-1  mt-[20px] overflow-y-auto lg:ml-[180px] lg:p-[120px]">


    //             <div className="flex-grow">
    //             {/* Table */}
    //             <table className="w-full text-sm text-left text-black">
    //           <thead className="text-xs    uppercase bg-cyan-50 dark:bg-gray-700 text-white">
    //             <tr className=" bg-[#405160] text-white uppercase text-sm leading-normal">
    //               {isColumnVisible('First Name') && (
    //                 <th scope="col" className="py-3 px-6 text-left">
    //                   First Name
    //                 </th>
    //               )}
    //               {isColumnVisible('Last Name') && (
    //                 <th scope="col" className="py-3 px-6">
    //                   Last Name
    //                 </th>
    //               )}
    //               {isColumnVisible('Status') && (
    //                 <th scope="col" className="py-3 px-6">
    //                   Status
    //                 </th>
    //               )}
    //               {isColumnVisible('Actions') && (
    //                 <th scope="col" className="py-3 px-6">
    //                   Actions
    //                 </th>
    //               )}
    //               {isColumnVisible('FV') && (
    //                 <th scope="col" className="py-3 px-6">
    //                  Edit Application
    //                 </th>
    //               )}
    //                  {isColumnVisible('co_notes') && (
    //                 <th scope="col" className="py-3 px-6">
    //                   Compliance Officer Notes
    //                 </th>
    //               )}
    //                {isColumnVisible('ddo_notes') && (
    //                 <th scope="col" className="py-3 px-6">
    //                   DDO Officer Notes
    //                 </th>
    //               )}
    //             </tr>
    //           </thead>
    //           <tbody>

    //             {users.map((user) => {

    //             // const showRow =
    //             // auth.user.role_id === 1 &&  ['Draft','Query-Pending'].includes(user.status) && auth.user.id === user.user_id;

    //             return (
    //               // showRow &&

    //               <tr key={user.id} className="bg-white border-b dark:border-gray-700">
    //                 {isColumnVisible('First Name') && (
    //                   <td className="px-6 py-4">{user.first_name}</td>
    //                 )}
    //                 {isColumnVisible('Last Name') && (
    //                   <td className="px-6 py-4">{user.last_name}</td>
    //                 )}
    //                 {isColumnVisible('Status') && (
    //                   <td className="px-6 py-4">
    //                     <span
    //     className={`${
    //       user.status === 'Draft'
    //         ? 'bg-purple-200 text-purple-600'
    //         : user.status === 'Non-Compliant'
    //         ? 'bg-yellow-200 text-yellow-600'
    //         : 'bg-red-200 text-red-600'
    //     } py-1 px-3 rounded-full text-xs`}
    //   >
    //     {user.status}
    //   </span>
    //                   </td>
    //                 )}
    //                 {isColumnVisible('Actions') && (
    //                   <td className="py-3 px-6">

    //                                             <div class="flex item-center">
    //                                                 <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
    //                                                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //                                                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    //                                                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    //                                                     </svg>
    //                                                 </div>
    //                                                 <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
    //                                                 <a
    //                  href={`submissions/${user.id}/edit`}>
    //                                                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //                                                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
    //                                                     </svg>
    //                                                     </a>
    //                                                 </div>

    //                                                 <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
    //                                                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //                                                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    //                                                     </svg>
    //                                                 </div>
    //                                             </div>

    //                   </td>
    //                 )}
    //                 {isColumnVisible('FV') && (
    //                   <td className="px-6 py-4">
    //                                                                      <a href={`submissions/${user.id}/edit`}>
    //                                                    View Application
    //                                                     </a>

    //                   </td>
    //                 )}
    //                  {isColumnVisible('co_notes') && (
    //                   <td className="px-6 py-4">
    //                               {user.co_notes}

    //                   </td>
    //                 )}
    //                   {isColumnVisible('ddo_note') && (
    //                   <td className="px-6 py-4">
    //                               {user.ddo_note}

    //                   </td>
    //                 )}
    //               </tr>
    //             )
    //                   })}
    //           </tbody>
    //         </table>
    //             </div>
    //             <div className="mr-2">{/* Additional content */}</div>
    //           </div>
    //         </div>
    //       </div>
    //       <Footer className="mt-auto" />
    //       </AuthenticatedLayoutAA>
    //   );
    // }
    import { useEffect, useRef } from "react";
    import { BsCloudUpload } from "react-icons/bs";
    import InputError from "@/Components/InputError";
    import InputLabel from "@/Components/InputLabel";
    import PrimaryButton from "@/Components/PrimaryButton";
    import TextInput from "@/Components/TextInput";
    import { useForm } from "@inertiajs/react";
    import { Transition } from "@headlessui/react";
    import AuthenticatedLayoutAA from "@/Layouts/AuthenticatedLayoutAA";
    import Authenticated from "@/Layouts/AuthenticatedSidebar";
    import Swal from "sweetalert2";

    const fields = {
        first_name: {
            roles: [
                "agents",
                ,
                "accountant",
                "website_admin",
                "admin_due_diligence_officer",
                "admin_compliance_officer",
                "ceo",
                "promoter",
                "risk_assessment_officer",
                "corp_sec",
            ],
            label: "First Name",
            field: "input",
            type: "text",
        },
        last_name: {
            roles: [
                "agents",
                "corp_sec",
                "website_admin",
                "accountant",
                "admin_due_diligence_officer",
                "admin_compliance_officer",
                "ceo",   "risk_assessment_officer",
                "promoter",
            ],
            label: "Last Name",
            field: "input",
            type: "text",
        },

        status_id: {
            roles: [
                "agents",
                "compliance_officer",
                "due_diligence_officer",
                "accountant",
                "website_admin",
                "admin_due_diligence_officer",
                "admin_compliance_officer",
                "ceo",
                "promoter",
            ],
            label: "status",
            field: "select",
            options: [
                { value: 1, label: "Pending Review" },//compliance ddo only
                { value: 2, label: "Application Assigned" },
    { value: 3, label: "Pending Background check" },
                { value: 4, label: "Background check Underway" },///back to draft
                { value:5, label: "Pending Decision" },//compliance
                { value: 6, label: "Investment Pending" },//send to next stage ddo

                { value: 7, label: "Investment Received" },
                { value: 8, label: "Denied" },
                { value: 9, label: "Delayed with Cause" },
                { value: 10, label: "Non-Compliant" },
                { value: 11, label: "Granted" },
                { value: 12, label: "Draft Created" },
                { value: 13, label: "Draft Edited" },// send back to compliance
                { value: 14, label: "Application Closed" }, //doo
                { value: 15, label: "Withdrawn" },//ddo
                { value: 16, label: "Rejected" },//change from ddo to ceo
                {
                    value: 17,
                    label: "Process Law Enforcement",
                },//back ground chekc underway

                { value: 18, label: "Draft Assigned" },
                { value: 19, label: "Returned for Compliance" },
                { value: 20, label: "Draft Closed" },
                { value: 21, label: "Updated" },
                { value: 22, label: "Query Application" },
                { value: 23, label: "Denied-RFR In-Process" },
                { value: 24, label: "Denied-RFR Granted" },
                { value: 25, label: "Denied-RFR Denied" },
                { value: 26, label: "Rescinded" },
                {  value: 27,label: "Revoked", },
                {  value: 28,label: "Granted - Oath Pending", },
                {  value: 29,label: "Granted - Oath Non Compliant", },
                {  value: 30,label: "Granted - Oath Accepted", },
                {  value: 31,label: "Granted - Oath Submitted", },
                {  value: 32,label: "Granted - Pending COR", },
                {  value: 33,label: "Granted - Oath Submitted", },

            ],
        },

        COR: {
            roles: [
                "agents",
                "compliance_officer",
                "website_admin",
                "ceo",
                "promoter",
                "risk_assessment_officer",
            ],
            label: "Country of Residence",
            field: "input",
            type: "text",
        },
        ddo_notes: {
            roles: ["due_diligence_officer",   "risk_assessment_officer", "website_admin", "ceo", "promoter"],
            label: "DDO Notes",
            field: "input",
            type: "text",
        },
        co_notes: {
            roles: ["compliance_officer", "website_admin",   "risk_assessment_officer", "ceo", "promoter"],
            label: "Co Notes",
            field: "input",
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
            field: "input",
            type: "text",
        },
        TOA: {
            roles: ["agents", "compliance_officer", "website_admin", "ceo"],
            label: "Type of Applicant",
            field: "input",
            type: "text",
        },
        TOI: {
            roles: ["agents", "compliance_officer", "website_admin", "ceo"],
            label: "TOI",
            field: "input",
            type: "text",
        },

        risk_level:{
            roles: ["agents", "compliance_officer", "website_admin", "ceo"],
            label: "Risk_Level",
            field: "select_2",

        },
        law_enforcement_sent:
        {
            role:["agents","compliance_officer","website_admin","ceo"],
            label:"law_enforcement_sent",
            field:"check_box",
        },

        document_checklist_path: {
            roles: [
                "agents",
                "compliance_officer",
                "due_diligence_officer",
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
                "due_diligence_officer",
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
                "due_diligence_officer",
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
                "due_diligence_officer",
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

        Registration_application_path: {
            roles: [
                "agents",
                "compliance_officer",
                "due_diligence_officer",
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
                "due_diligence_officer",
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
                "due_diligence_officer",
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
                "due_diligence_officer",
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
                "due_diligence_officer",
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
                "due_diligence_officer",
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

        copy_of_parent_id_path: {
            roles: [
                "agents",
                "compliance_officer",
                "website_admin",
                "ceo",
                "promoter",
            ],
            label: "Military Record",
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
            label: "Curriculum Vitae",
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
            label: "Professional Reference Document",
            field: "file",
            type: "text",
        },

        copy_of_parent_id_path: {
            roles: ["agents", "compliance_officer", "website_admin", "promoter"],
            label: "Professional and Academic Certificates",
            field: "file",
            type: "text",
        },

        copy_of_parent_id_path: {
            roles: ["agents", "compliance_officer", "website_admin", "promoter"],
            label: "Official Transcripts from Educational Institution",
            field: "file",
            type: "text",
        },
    };

    export default function EditSubmissions({
        className = "",
        submission,
        auth,
        users,
        result,
        risk,
        country,
        notifications,
    }) {
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
                    console.log(errors);
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
                            className="mt-1 block w-full"
                            name={key}
                        />

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



    ///select
            if (field.field === "select" && field.options) {
                let filteredOptions = field.options;

                // If the user role is "agents", filter the options
                if (userRole === "agents") {
                    const allowedStatuses = ["Draft Created","Draft Edited", "Non-Complaint","Process Law Enforcement","Draft Closed"];
                    filteredOptions = field.options.filter((option) =>
                        allowedStatuses.includes(option.value)
                    );
                }
                // If the user role is "compliance_officer", filter the options
                if (userRole === "compliance_officer") {
                    const allowedStatuses = [
                        "Pending Review",
                        "Application Closed",
                        "Withdrawn",
                        "Returned for Compliance",
                    ];
                    filteredOptions = field.options.filter((option) =>
                        allowedStatuses.includes(option.value)
                    );
                }
                // If the user role is "compliance_officer", filter the options
                if (userRole === "due_diligence_officer") {
                    const allowedStatuses = [
                        "Pending Background check",
                        "Background check Underway",
                        "Pending Decision",

                    ];
                    filteredOptions = field.options.filter((option) =>
                        allowedStatuses.includes(option.value)
                    );
                }
                if (userRole === "corp_sec") {
                    const allowedStatuses = [
                        "Denied",
                        "Delayed with Cause",
                        "32",
                        "33",
                        "Rejected",
                        "Denied-RFR In-Process",
                        "Denied-RFR Granted",
                        "Denied-RFR Denied",
                        "Denied-RFR Denied",

                    ]
                    filteredOptions = field.options.filter((option) =>
                        allowedStatuses.includes(option.value)
                    );
                }
                if (userRole === "processing") {
                    const allowedStatuses = [
                        "Investment Pending",
                        "Investment Received",
                        "Granted",
                        "Rescinded",
                        "Granted - Pending COR",
                        "Granted - Pending Law Enforcement",
                        "Granted - Oath Pending",
                        "Granted - Oath Non Compliant",
                        "Granted - Oath Accepted",
                        "Granted - Oath Submitted",

                    ]
                    filteredOptions = field.options.filter((option) =>
                        allowedStatuses.includes(option.value)
                    );
                }

                return (
                    <div key={key}>
                        <InputLabel htmlFor={key} value={field.label} />

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
                <Authenticated user={auth.user} />
                <body className="flex flex-col min-h-screen">
                    <div className="flex">
                        <div className="hidden sm:block"></div>

                        <div className="flex-grow bg-white shadow-lg  ml-[20px] p-[15px]">
                            <div className="flex-1 overflow-y-auto lg:ml-[180px] lg:p-[120px]">
                                <section className={className}>
                                    <header>
                                        <h2 className="text-lg font-medium text-gray-900">
                                            Application form
                                        </h2>

                                        <p className="mt-1 text-sm text-gray-600">
                                            Enter Sign application form and edit
                                            details of forms below.
                                        </p>
                                    </header>
    <header>
        Princiciple applicant or Dependents
    </header>
    <table className="w-full text-sm text-left text-black">
                            <thead className="text-xs    uppercase bg-gradient-to-b from-cyan-600  to-[#405160] dark:bg-gray-700 text-white">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Id
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                    Profile
                                    </th>

                                </tr>
                            </thead>
                            <tbody>
                                {result.map((user) => (
                                    <tr
                                        className="bg-white border-b  dark:border-gray-700"
                                        key={user.id}
                                    >
                                        <td className="px-6 py-4">{user.id}</td>
                                        <td className="px-6 py-4">
                                            {user.first_name}  {user.last_name}
                                        </td>
                                        <td className="px-6 py-4">
                                        <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                        <a
                                                            href={`/dashboard/submissions/${user.id}/edit`}
                                                        >
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                stroke="currentColor"
                                                            >
                                                                <path
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round"
                                                                    stroke-width="2"
                                                                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                                                />
                                                            </svg>
                                                        </a>
                                                    </div>
                                        </td>


                                    </tr>
                                ))}
                            </tbody>
                        </table>

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
                                </section>
                            </div>

                            <div className="flex-grow"></div>
                        </div>
                    </div>
                </body>
            </AuthenticatedLayoutAA>
        );
    }

import { Head, useForm, Link, usePage } from "@inertiajs/react";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";
import React, { useState, useEffect } from "react";
import InputLabel from "@/Components/InputLabel";
import Swal from "sweetalert2";

export default function FileUpload({
    users,
    roles,
    auth,
    countries,
    principle_applicants,
    region,
    toa,
    toi,
    gender,
    mstatus,

}) {


    const { data, setData, errors, post } = useForm({
        First_Name: "",
        Last_Name: "",
        type_of_investment: "",
        type_of_applicant: "",
        country_id: "",
        date_of_birth: "",
        Region: "",
        Gender: "",
        Marriage_Status: "",
        Status_id: "",
        Accompanying_dependents: "",
        Assigned_Promoters: "",
        principle_applicant_id: "",
        promoter_id: "",
        File: null,
        investment_amount:"",
        visa_Number:"",
        visa_issue_date:"",
        visa_expiration_date:"",
        passport_number:"",
        country_of_issue:"",
    });
    const handleDateChange = (e) => {
        const selectedDate = new Date(e.target.value);
        const currentDate = new Date();
        const minDate = new Date(
            currentDate.getFullYear() - 16,
            currentDate.getMonth(),
            currentDate.getDate()
        ); // Calculate 18 years ago from today

        if (selectedDate < minDate) {
            setData({ ...data, date_of_birth: e.target.value });
        } else {
            alert("You must be 18 years or older.");
        }
    };

    function handleSubmit(e) {
        e.preventDefault();


        if (!data.First_Name || !data.Last_Name) {
            // Display an error message for incomplete or invalid form

        } else {

            const isConfirmed = window.confirm("Are you sure you want to save this form?");

            if(isConfirmed){

            const formData = new FormData();

            formData.append("First_Name", data.First_Name);
            formData.append("Last_Name", data.Last_Name);
            formData.append("Status_id", data.Status_id);
            formData.append("Gender", data.Gender);
            formData.append("Region", data.Region);
            formData.append("date_of_birth", data.date_of_birth);
            formData.append("type_of_applicant", data.type_of_applicant);
            formData.append("type_of_investment", data.type_of_investment);
            formData.append("investment_amount", data.investment_amount);
            formData.append("country_id", data.country_id);
            formData.append("File", data.File);
            formData.append("principle_applicant_id", data.principle_applicant_id);
            formData.append("Marriage_Status", data.Marriage_Status);
            formData.append("Accompanying_dependents", data.Accompanying_dependents);
            formData.append("promoter_id", data.promoter_id);
            formData.append("visa_Number", data.visa_Number);
            formData.append("visa_issue_date", data.visa_issue_date);
            formData.append("visa_expiration_date", data.visa_expiration_date);
            formData.append("passport_number", data.passport_number);
            formData.append("country_of_issue", data.country_of_issue);
            post(route("TestTable.store"), formData);

            setData({
                First_Name: "",
                Last_Name: "",
                status_id: "",
                type_of_investment: "",
                type_of_applicant: "",
                country_id: "",
                Region: "",
                date_of_birth: "",
                Gender: "",
                Marriage_Status: "",
                Accompanying_dependents: "",
                principle_applicant_id: "",
                promoter_id: "",
                investment_amount:"",
                visa_Number:"",
                visa_issue_date:"",
                visa_expiration_date:"",
                passport_number:"",
                country_of_issue:"",
            })

        }
    }
    }

    return (
        <div className=" sm:px-6 ">
            <form name="createForm" onSubmit={handleSubmit}>
                <div className="flex flex-col">
                    <div className="mb-2">
                        {" "}
                        To Create a new form enter The information below.
                    </div>

                        <div className=" flex-1 mb-4 ">
                            <InputLabel
                                htmlFor="First Name"
                                value="First Name"
                            />
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
                        <div className=" mb-4">
                            <InputLabel htmlFor="Last Name" value="Last Name" />
                            <TextInput
                                type="text"
                                className="mt-1 block w-full"
                                value={data.Last_Name}
                                onChange={(e) =>
                                    setData("Last_Name", e.target.value)
                                }
                            />
                            <span className="text-red-600">
                                {errors.Last_Name}
                            </span>
                        </div>


                        {/* //Gender */}
                        <div className=" mb-4">
                            <InputLabel htmlFor="Gender" value="Gender" />
                            <select
                                className="w-full mt-1 rounded"
                                value={data.Gender}
                                onChange={(e) =>
                                    setData("Gender", e.target.value)
                                }
                            >
                                <option value="">
                                    -Select Gender-
                                </option>
                                {gender.map((user) => (
                                    <option key={user.id} value={user.name}>
                                        {user.name}
                                    </option>
                                ))}
                            </select>
                            <span className="text-red-600">
                                {errors.Gender}
                            </span>
                        </div>
                        {/* //Date of Birth */}
                        <div className="mb-4 ">
                            <InputLabel
                                htmlFor="Date of Birth"
                                value="Date of Birth"
                            />
                            <div></div>

                            <input
                                type="date"
                                className=" rounded mt-1 block w-full"
                                value={data.date_of_birth}
                                onChange={handleDateChange}
                            />
                        </div>
                        <div className="mb-4 ">
                            <InputLabel
                                htmlFor="Type of Applicant"
                                value="Type of Applicant"
                            />
                            <select
                                className="w-full rounded"
                                value={data.type_of_applicant}
                                onChange={(e) =>
                                    setData("type_of_applicant", e.target.value)

                                }

                            >
                                <option value="">
                                    -Type of Applicant-
                                </option>
                                {toa.map((user) => (
                                    <option key={user.id} value={user.id}>
                                        {user.name}
                                    </option>
                                ))}
                            </select>
                            <span className="text-red-600">
                                {errors.type_of_applicant}
                            </span>
                        </div>

                        {/* Type of investment*/}
                        <div className="mb-4 ">
                            <InputLabel
                                htmlFor="Type of investment"
                                value="Type of investment"
                            />

                            <select
                                className="w-full rounded"
                                value={data.type_of_investment}
                                onChange={(e) => setData("type_of_investment", e.target.value)}
                                disabled={
                                    data.type_of_applicant === "1"||  data.type_of_applicant === "3"
                                }
                            >

                                <option value="">-Type of Investments-</option>
                                {toi.map((user) => (
                                    <option key={user.id} value={user.id}>
                                        {user.name}
                                    </option>
                                ))}
                            </select>

                            <span className="text-red-600">
                                {errors.type_of_investment}
                            </span>
                        </div>


                        {/* //Number of dependants */}
                        <div className="mb-4 ">
                            <InputLabel
                                htmlFor="Number of dependents"
                                value="Number of Dependants"
                            />

                            <TextInput
                                        type="text"
                                        className="mt-1 block w-full"
                                        label="Accompanying dependents"
                                        name="Accompanying dependents"
                                           disabled={
                                    data.type_of_applicant === "1"||  data.type_of_applicant === "3"
                                }
                                        value={data.Accompanying_dependents}
                                        onChange={(e) =>
                                            setData("Accompanying_dependents", e.target.value)
                                        }
                                    />
                            <span className="text-red-600">
                                {errors.Accompanying_dependents}
                            </span>
                        </div>

                    {/* Country of residence*/}

                        <div className=" mb-4 ">
                            <InputLabel
                                htmlFor="Country of Residence"
                                value="Country of Residence"
                            />
                            <select
                                className="w-full rounded"
                                value={data.country_id}
                                onChange={(e) =>
                                    setData("country_id", e.target.value)
                                }
                            >
                                <option value="">
                                    -Select Country Of Residence-
                                </option>
                                {countries.map((user) => (
                                    <option key={user.id} value={user.id}>
                                        {user.name}
                                    </option>
                                ))}
                            </select>
                            <span className="text-red-600">{errors.COR}</span>
                        </div>

                        {/*Marriage_Status */}
                        <div className=" mb-4 ">
                            <InputLabel
                                htmlFor="Marital Status"
                                value="Marital Status"
                            />
                            <select
                                className="w-full rounded"
                                value={data.Marriage_Status}
                                onChange={(e) =>
                                    setData("Marriage_Status", e.target.value)
                                }
                            > <option value="">
                                    -Marriage Status-
                                </option>
                                {mstatus.map((user) => (
                                    <option key={user.id} value={user.id}>
                                        {user.name}
                                    </option>
                                ))}
                            </select>
                            <span className="text-red-600">
                                {errors.Marriage_Status}
                            </span>
                        </div>

                    <div className="mb-4">
                        <InputLabel
                            htmlFor="Assigned Promoters"
                            value="Assigned Promoters"
                        />
                        <select
                            className="w-full rounded"
                            value={data.Assigned_Promoters}
                            onChange={(e) =>
                                setData("Assigned_Promoters", e.target.value)

                            }
                            disabled={
                                data.type_of_applicant === "1"||  data.type_of_applicant === "3"
                            }
                        >
                            <option value="null">
                                -Select Assigned Promoter-
                            </option>
                            {users.map((user) => (
                                <option key={user.id} value={user.id}>
                                    {user.name}
                                </option>
                            ))}
                        </select>
                        <span className="text-red-600">
                            {errors.Assigned_Promoters}
                        </span>
                    </div>
                    <div className="mb-4">
                        <InputLabel
                            htmlFor="principle_applicant_id"
                            value="Assign Principle Applicant"
                        />
                        <select
                            className="w-full rounded"
                            value={data.principle_applicant_id}
                            onChange={(e) =>
                                setData(
                                    "principle_applicant_id",
                                    e.target.value
                                )
                            }
                            disabled={
                                data.type_of_applicant === "2"
                            } // Disabling the dropdown when type_of_applicant is Principle_Applicant
                        >
                            <option value="null">
                                -Select Assigned Principle Applicant-
                            </option>
                            {principle_applicants.map((user) => (
                                <option key={user} value={user}>
                                    {user}
                                </option>
                            ))}
                        </select>
                        <span className="text-red-600">
                            {errors.principle_applicant_id}
                        </span>
                    </div>





                </div>

                <div className="mt-4">
                    <PrimaryButton
                        type="submit"
                        className="px-6 py-2 font-bold text-white bg-slate rounded"
                        onClick={handleSubmit}
                    >
                        Save
                    </PrimaryButton>

                    <PrimaryButton
                        type="submit"
                        className="px-6 mr-2 py-2 font-bold text-white bg-slate rounded"
                        onClick={handleSubmit}
                    >
                        Add Dependant
                    </PrimaryButton>

                </div>
            </form>
        </div>
    );
}

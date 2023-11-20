import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({
    agents,
    ddo,
    accounts,
    risk,
    ddoadmin,
    pmo,
    bdo,
    bo,
    sa,
    ceo,
    cs,
    mirf,
    promo,
}) => {
    const labels = [
        "Agents",
        "Due Diligence Officer",
        "Accountant",
        "Risk Management Officer",
        "Due Diligence Administrator",
        "Pm_Office",
        "Business Development Officer",
        "Bank Official",
        "Super Admin",
        "Ceo",
        "Corporate Secretary",
        "Market & Investor Relations Officer",
        "Promoter"
    ];
    const options = {
        responsive: true, // Disable responsiveness to keep a fixed chart size
    maintainAspectRatio: false,
        plugins: {
            legend: {
                position: "", // Position the legend on the left
                labels: {
                    boxWidth: 10, // Adjust the box width for each label
                    fontSize: 10,
                  

                },
            },
            title: {
                display: true,
                text: "User Distribution by Role",
            },
        },
    };

    const data = {
        labels: labels,
        datasets: [
            {
                label: "# of ",
                data: [
                    agents,
                    ddo,
                    accounts,
                    risk,
                    ddoadmin,
                    pmo,
                    bdo,
                    bo,
                    sa,
                    ceo,
                    cs,
                    mirf,
                    promo,
                ],
                backgroundColor: [
                    "rgba(0,255,255,0.2)", // Light Blue (agents)
                    "rgba(42,109,130,0.9)", // Darker Blue (ddo)
                    "rgba(0,255,255,0.9)", // Light Blue (accounts)
                    "rgba(255,0,0,0.9)", // Red (ddoadmin)
                    "rgba(128,0,128,0.9)", // Purple (pmo)
                    "rgba(255,165,0,0.9)", // Orange (bdo)
                    "rgba(0,128,0,0.9)", // Green (bo)
                    "rgba(255,0,255,0.9)", // Magenta (sa)
                    "rgba(255,255,0,0.9)", // Yellow (ceo)
                    "rgba(255,69,0,0.9)", // Darker Orange (cs)
                    "rgba(255,255,255,0.9)", // White (mirf)
                    "rgba(0,0,255,0.9)", // Blue (promo)
                ],
                borderColor: [
                    "rgba(0,204,204,0.5)", // Darker Light Blue
                    "rgba(28,82,100,0.6)", // Darker Darker Blue
                    "rgba(0,204,204,0.7)", // Darker Light Blue
                    "rgba(204,0,0,0.7)", // Darker Red
                    "rgba(102,0,102,0.7)", // Darker Purple
                    "rgba(204,102,0,0.7)", // Darker Orange
                    "rgba(0,77,0,0.7)", // Darker Green
                    "rgba(204,0,204,0.7)", // Darker Magenta
                    "rgba(204,204,0,0.7)", // Darker Yellow
                    "rgba(204,51,0,0.7)", // Darker Darker Orange
                    "rgba(204,204,204,0.7)", // Darker White
                    "rgba(0,0,153,0.7)", // Darker Blue
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div>
            <Doughnut data={data} options={options} />
        </div>
    );
};

export default DoughnutChart;

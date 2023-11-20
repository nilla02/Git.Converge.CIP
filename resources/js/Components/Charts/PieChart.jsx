import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({users}) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        
      },
      title: {
        display: true,
        text: 'Status',
      },
    },
  };
  
  const draftUsers = users.filter((user) => user.status_id === 'Draft');
  const draftUserCount = draftUsers.length;
  const PPU = users.filter((user) => user.status_id === 'Pre-Processing');
  const PPC = PPU.length;
  const NNC = users.filter((user) => user.status_id === 'Non-Compliant');
  const NNCC = NNC.length;
   const QP = users.filter((user) => user.status_id === 'Query-Pending');
  const QPC = QP.length;
  const PR = users.filter((user) => user.status_id === 'Pending_Review');
  const PRC = PR.length;
  const BCU = users.filter((user) => user.status_id === 'Background-check-Underway');
  const BCUC = BCU.length;
  const IP = users.filter((user) => user.status_id === 'Investment-Pending');
  const IPC = IP.length;
  const IR = users.filter((user) => user.status_id === 'Investment-Received');
  const IRC = IR.length;
  const DWC = users.filter((user) => user.status_id === 'Delayed-With-Cause');
  const DWCC = DWC.length;
  const AP = users.filter((user) => user.status_id === 'Approved');
  const APC = AP.length;
  const DC = users.filter((user) => user.status_id === 'Denied');
  const DCC = DC.length;
  const CL = users.filter((user) => user.status_id === 'Closed');
  const CLC = CL.length;

  
  const labels= ["Draft", "Pre-processing", "Non-Compliant", "Query Pending",];
  const data = {
    
    labels: labels,
    datasets: [
      {
        label: "Applications",
        data: [draftUserCount, PPC, NNCC, QPC, PRC, BCUC,IPC,IRC,DWCC,APC,DCC,CLC],
        backgroundColor: [
          "#007D9C",
          "#244D70",
          "#D123B3",
          "#F7E018",
          "#fff",
          "#FE452A",
          "#CD5C5C",
          "#145A32",
          "#40E0D0",
          "#6495ED",
          "#FFBF00",
          "#DFFF00",
          "#CCCCFF",
        ],
        borderColor: [
          "rgba(255,99,132,1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgb(205, 92, 92)",
          "rgb(20,90,50)",
          "rgb(64, 224, 208)",
          "rgb(100, 149, 237)",
          "rgb(255, 191, 0)",
          "rgb(223, 255, 0)",
          "rgb(204, 204, 255)",


        ],
        borderWidth: 1,
      },
    ],  
  };
  return (
    
    <div>
      <Pie data={data} options={options}/>
    </div>
  );
};
export default PieChart;
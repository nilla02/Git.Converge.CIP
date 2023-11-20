import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({users}) => {

  const labels = ['Principle Applicant','Spouse', 'Qualifying Dependents', ];
  const options = {
    responsive: true,
    plugins: {
      legend: {

      },
      title: {
        display: true,
        text: 'Type of Applicants',
      },
    },
  };



  const agent = users.roles.filter((user) => user.roles === 'Agent');
  const agents =agent.length;

  const ddo = users.roles.filter((user) => user.roles === 'due');
  const ddos = ddo.length;

  const data = {



    labels: labels,
    datasets: [
      {
        label: '# of ',
        data: [pac, spc, qdc,],
        backgroundColor: [
          'rgba(0,255,255,0.2)',
          'rgba(42,109,130,0.9)',
          'rgba(0,255,255,0.9)',

        ],
        borderColor: [
          'rgba(0,255,255,0.3)',
          'rgba(0,255,255,0.4)',
          'rgba(0,255,255,0.5)',
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

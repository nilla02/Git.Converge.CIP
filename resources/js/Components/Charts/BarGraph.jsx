import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const barchart = ({users}) => {

const options = {
  responsive: true,
  plugins: {
    legend: {

    },
    title: {
      display: true,
      text: 'Investment Type',
    },
  },
};

console.log()

const Nation_Economic_Fund = users.filter((user) => user.type_of_investment === '1');
const Nation_Economic_Fundc = Nation_Economic_Fund.length;

  const Real_Estate_Project = users.filter((user) => user.type_of_investment === '2');
const Real_Estate_Projectc = Real_Estate_Project.length;

    const Enterprise_Project = users.filter((user) => user.type_of_investment === '3');
const Enterprise_Projectc = Enterprise_Project.length;

    const Government_Bonds = users.filter((user) => user.type_of_investment === '4');
const Government_Bondsc = Government_Bonds.length;


const labels = ['Total Invest Type ', ];

const data = {
  labels,
  datasets: [
    {
      label: 'National Economic Fund',
      data:[Nation_Economic_Fundc],
      backgroundColor: 'rgba(0,255,255,0.4)',
    },
    {
      label: 'Real Estate Project',
      data:[Real_Estate_Projectc],
      backgroundColor: 'rgb(19,102,126)',
    },
    {
        label: 'Enterprise Project',
        data:[Enterprise_Projectc],
        backgroundColor: 'rgb(31,208,235)',
      },
      {
        label: 'Government Bond',
        data:[Government_Bondsc],
        backgroundColor: 'rgb(149,237,248)',
      },
  ],
};
    return (
        <div><Bar options={options} data={data} /></div>
      );
}





export default barchart;

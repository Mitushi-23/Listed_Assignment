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
import faker from 'faker';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
            align:'end',
            borderRadius:6,
            labels: {
                usePointStyle: true,
                font: {
                    size: 10,
                },
            },
        },
        title: {
            display: true,
            align:'start',
            text: ['Activities','May-June 2021'],
            color:'black',
            font:{
                size: 18
            }
        },
    
  },
};

const labels = ['Week1', 'Week2', 'Week3', 'Week4'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Guest',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 500 })),
      backgroundColor: 'rgba(152, 216, 158, 1)',
      borderRadius:5,
      barThickness: 30,
    },
    {
        label: 'User',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 500 })),
        backgroundColor: 'rgba(238, 132, 132, 1)',
        borderRadius:5,
        barThickness: 30,
    },
  ],
};


const BarChart = () => {
  return (
    <>
      <div className='barGraph'>
      <Bar style={{margin:'auto'}} data={data} options={options} />
    </div>
    </>
  )
}

export default BarChart
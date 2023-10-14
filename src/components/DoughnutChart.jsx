import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: [['Basic Tees','55%'], ['Custom Short Pants','31%'], ['Super Hoodies','14%']],
  datasets: [
    {
    //   label: '# of Votes',
      data: [6,6,6],
      backgroundColor: [
        'rgba(152, 216, 158, 1)',
        'rgba(246, 220, 125, 1)',
        'rgba(238, 132, 132, 1)',
        
      ],
     
    },
  ],
};


export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'right',
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
            text: 'Top Products',
            color:'black',
            font:{
                size: 18
            }
        },
  },

};

const DoughnutChart = () => {
  return (
    <>
    <div style={{height:'256px'}}>

    <Doughnut style={{margin:'auto'}} options={options} data={data}/>
    </div>
    </>
  )
}

export default DoughnutChart
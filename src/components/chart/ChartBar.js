import React from 'react'
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale, // y
    Tooltip,
    Legend
} from "chart.js";
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale, // y
    Tooltip,
    Legend
)

const ChartBar = () => {
    const data = {
        labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'],
        datasets: [
            {
                
                data: [3, 6, 9, 5, 6, 8, 9, 5, 1, 7, 8 ,9],
                backgroundColor: '#6C63FF',
                borderWidth: 1,
            }
        ]
    }

    const options = {

    }

  return (
    <div className='container-chart'>
        <div className='chart-bar'>
            <h1>Bar Chart Work Order</h1>
            <div>
                <Bar
                    data = {data}
                    options = {options}
                ></Bar>
            </div>
        </div>
    </div>
  )
}

export default ChartBar;
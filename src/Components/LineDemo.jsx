
import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

export default function LineDemo() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        const data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','January', 'February', 'March', 'April', 'May', 'June', 'July','January', 'February', 'March', 'April', 'May', 'June', 'July','January', 'February', 'March', 'April', 'May', 'June', 'July','January', 'February', 'March', 'April', 'May', 'June', 'July','January', 'February', 'March', 'April', 'May', 'June', 'July','January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'OTV',
                    data: [65, 59, 80, 81, 56, 55, 40,65, 59, 80, 81, 56, 55, 40,65, 59, 80, 81, 56, 55, 40,65, 59, 80, 81, 56, 55, 40,65, 59, 80, 81, 56, 55, 40,65, 59, 80, 81, 56, 55, 40,65, 59, 80, 81, 56, 55, 40,65, 59, 80, 81, 56, 55, 40,65, 59, 80, 81, 56, 55, 40,65, 59, 80, 81, 56, 55, 40,65, 59, 80, 81, 56, 55, 40,65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: documentStyle.getPropertyValue('--yellow-500'),
                    tension: 0.4
                },
                {
                    label: 'RMD',
                    data: [28, 48, 40, 19, 86, 27, 90,28, 48, 40, 19, 86, 27, 90,28, 48, 40, 19, 86, 27, 90,28, 48, 40, 19, 86, 27, 90,28, 48, 40, 19, 86, 27, 90,28, 48, 40, 19, 86, 27, 90,28, 48, 40, 19, 86, 27, 90,28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    borderColor: documentStyle.getPropertyValue('--blue-500'),
                    tension: 0.4
                },
                {
                    label: 'FAX',
                    data: [10, 35, 60, 54, 17, 48, 30,10, 35, 60, 54, 17, 48, 30,10, 35, 60, 54, 17, 48, 30,10, 35, 60, 54, 17, 48, 30,10, 35, 60, 54, 17, 48, 30,10, 35, 60, 54, 17, 48, 30,10, 35, 60, 54, 17, 48, 30,10, 35, 60, 54, 17, 48, 30],
                    fill: false,
                    borderColor: documentStyle.getPropertyValue('--orange-500'),
                    tension: 0.4
                }
            ]
        };
        const options = {
            maintainAspectRatio: false,
            aspectRatio: 0.9,
            plugins: {
                legend: {
                    labels: {
                        color: 'white'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: 'white'
                    },
                    // grid: {
                    //     color: surfaceBorder
                    // }
                },
                y: {
                    ticks: {
                        color: 'white'
                    },
                    grid: {
                        color: 'white'
                    }
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);


    return (
        <div className="card">
            <Chart type="line" data={chartData} options={chartOptions} />
        </div>
    )
}
        
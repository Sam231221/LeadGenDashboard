import React from 'react'

import Chart from "react-apexcharts";
export const AreaChart2 = () => {
    let series = [{
        name: 'Sales',
        data: [31, 40, 28, 51, 42, 82, 56],
    }, {
        name: 'Revenue',
        data: [11, 32, 45, 32, 34, 52, 41]
    }, {
        name: 'Customers',
        data: [15, 11, 32, 18, 9, 24, 11]
    }]

    let options = {
        chart: {
            type: 'area',
            height: 350,
            zoom: {
                enabled: false
            }
        },
        markers: {
            size: 4
        },
        colors: ['#4154f1', '#2eca6a', '#ff771d'],
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.3,
                opacityTo: 0.4,
                stops: [0, 90, 100]
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth',
            width: 2
        },
        xaxis: {
            type: 'datetime',
            categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
        },
        tooltip: {
            x: {
                format: 'dd/MM/yy HH:mm'
            },
        }
    }

return (
    <div>
        <Chart
            options={options} series={series} type="area" height={350}
        />
    </div>
)
}



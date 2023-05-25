
import Chart from "react-apexcharts";
const WebTrafficChart = () => {
    // Data for the pie chart
    const chartData = {

        series: [44, 55, 41, 17, 15],
        options: {
            chart: {
                type: 'donut',
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        },


    };

    return (
        <Chart className="donut-chart" options={chartData.options} series={chartData.series} type="donut" width={300} />
    );
};

export default WebTrafficChart;

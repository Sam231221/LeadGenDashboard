import Chart from "react-apexcharts";
export const BudgetChart = () => {
    const chartData = {
        options: {
            labels: ['Sales', 'Administration', 'Customer Support', 'Development', 'Marketing',],

            stroke: {
                show: true,
                width: 2,
                colors: [],
                dashArray: 0
            },
            markers: {
                size: 5,
                hover: {
                    size: 10
                }
            },
            yaxis: {
                show: false,
            },

        },
        series: [
            {
                name: 'Actual Spending',
                data: [80, 50, 30, 40, 70],
            },
            {
                name: 'Allocated Budget',
                data: [20, 80, 50, 75, 33],
            },

        ],
    };


    return (
        <div>
            <Chart
                options={chartData.options} series={chartData.series} type="radar" height={350}
            />
        </div>
    )
}



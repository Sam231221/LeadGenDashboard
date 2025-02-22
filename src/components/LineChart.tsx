import Chart from "react-apexcharts";

export const LineChart = () => {
    let series = [
        {
          name: "Series 1",
          data: [45, 52, 38, 45, 19, 33]
        }
      ]
    let options = {
        chart: {
          height: 320,
          width: "100%",
          type: "line"
        },

        xaxis: {
          categories: [
            "01 Jan",
            "02 Jan",
            "03 Jan",
            "04 Jan",
            "05 Jan",
            "06 Jan"
          ]
        }
      };

      
  return (
    <>
        <Chart options={options}
        series={series}
        type="line"
        width="300"
        />
    </>
  )
}

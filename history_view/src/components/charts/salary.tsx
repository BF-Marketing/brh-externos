import Chart from 'react-apexcharts'

type salaryChartProps = {
  data: {
    event: string
    label: string
    year: number
    icon: string
    value: number
  }[]
}
export const SalaryChart = ({ data }: salaryChartProps) => {
  let year = data.map((arr) => arr.year)
  let value = data.map((arr) => arr.value)
  console.log(year, value)
  let options = {
    chart: {
      id: 'basic-bar',
    },
    xaxis: {
      categories: year,
    },
    series: [
      {
        name: 'salary',
        data: value,
      },
    ],
    markers: {
      size: 5,
      colors: ['#E91E63', '#E91E63'],
    },
    colors: ['#eee', '#eee'],
    toolbar: {
      show: false,
    },
  }

  return (
    <div className="container">
      <Chart
        options={options}
        series={options.series}
        type="line"
        width={600}
        height={320}
      />
    </div>
  )
}

import Chart from 'react-apexcharts'
import './salary.css'

type salaryChartProps = {
  data: {
    name: string
    admissionDate: Date
    birthDay: Date
    events: {
      event: string
      type: string
      description: string
      salary: number
      year: number
    }[]
  }
}

export const SalaryChart = ({ data }: salaryChartProps) => {
  let year = data.events.map((arr) => arr.year)
  let values = data.events.map((arr) => arr.salary)
  let options = {
    chart: {
      width: '100%',
      height: 380,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 1,
      colors: ['#fff'],
    },
    xaxis: {
      categories: year,
    },
    series: [
      {
        name: 'salary', // rever
        data: values,
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
    <div className="chart-content">
      <p className="salary-section-title">
        Evolução Salarial de {<span>{data.name}</span>}
      </p>
      <div className="chart">
        <Chart
          options={options}
          series={options.series}
          type="line"
          height={300}
          width={'100%'}
        />
      </div>
    </div>
  )
}

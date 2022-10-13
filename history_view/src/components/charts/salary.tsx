import Chart from 'react-apexcharts'
import './styles.css'

type salaryChartProps = {
  data: {
    name: string
    admissionDate: Date
    salaryMovement: {
      event: string
      label: string
      value: number
      year: number
      icon: string
    }[]
  }
}

export const SalaryChart = ({ data }: salaryChartProps) => {
  let year = data.salaryMovement.map((arr) => arr.year)
  let values = data.salaryMovement.map((arr) => arr.value)
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
    <div className="content">
      <p className="salary-section-title">
        Evolução Salarial de {<span>{data.name}</span>}
      </p>
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

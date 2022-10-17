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

// legend: {
//   show: true,
//   showForSingleSeries: false,
//   showForNullSeries: true,
//   showForZeroSeries: true,
//   position: 'bottom',
//   horizontalAlign: 'center',
//   floating: false,
//   fontSize: '14px',
//   fontFamily: 'Helvetica, Arial',
//   fontWeight: 400,
//   formatter: undefined,
//   inverseOrder: false,
//   width: undefined,
//   height: undefined,
//   tooltipHoverFormatter: undefined,
//   customLegendItems: [],
//   offsetX: 0,
//   offsetY: 0,

export const SalaryChart = ({ data }: salaryChartProps) => {
  let year = data.events.map((arr) => arr.year)
  let values = data.events.map((arr) => arr.salary)
  let options = {
    chart: {
      width: '100%',
      height: 380,
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 1,
      colors: ['#fff'],
    },
    xaxis: {
      name: 'anos',
      categories: year,
      legend: {
        position: 'bottom',
        horizontalAlign: 'right',
      },
      title: {
        text: 'Tempo',
        rotate: -90,
        offsetX: 0,
        offsetY: 0,
        style: {
          fontSize: '12px',
          fontFamily: 'Helvetica, Arial, sans-serif',
          cssClass: 'apexcharts-xaxis-title',
        },
      },
    },
    yaxis: {
      categories: year,
      legend: {
        position: 'bottom',
        horizontalAlign: 'right',
      },
      title: {
        text: 'Salário($)',
        rotate: -90,
        offsetX: 0,
        offsetY: 0,
        style: {
          fontSize: '12px',
          fontFamily: 'Helvetica, Arial, sans-serif',
          cssClass: 'apexcharts-yaxis-title',
        },
      },
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

import { Timeline } from './components/timeline'
import rings from './assets/rings.svg'
import office from './assets/office.svg'
import { SalaryChart } from './components/charts/salary'
import './App.styles.css'

function App() {
  return (
    <div className="container-fluid">
      <div className="container">
        <Timeline history={data} />
      </div>
      <div className="container">
        <SalaryChart data={data} />
      </div>
    </div>
  )
}

export default App

const data = {
  name: 'Ricardo Dos Santos',
  admissionDate: new Date('2021-08-12'),
  salaryMovement: [
    {
      event: 'Admissão',
      label: 'Analista de Software',
      value: 3000,
      year: 2022,
      icon: office,
    },
    {
      event: 'Casamento',
      label: 'Contraiu o Matrimonio',
      value: 3000,
      year: 2023,
      icon: rings,
    },
    {
      event: 'Promoção',
      value: 7000,
      label: '7mil',
      year: 2024,
      icon: office,
    },
    {
      event: 'Casamento',
      label: 'Contraiu o Matrimonio',
      value: 7000,
      year: 2025,
      icon: rings,
    },
    {
      event: 'Promoção',
      label: '10mil',
      value: 10000,
      year: 2026,
      icon: office,
    },
  ],
}

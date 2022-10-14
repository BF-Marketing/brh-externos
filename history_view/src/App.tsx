import { Timeline } from './components/timeline/timeline'
import wedding from './assets/wedding.png'
import admission from './assets/admission.png'
import transition from './assets/transition.png'
import promotion from './assets/promotion.png'
import { SalaryChart } from './components/charts/salary'
import { Fragment } from 'react'
import './App.styles.css'

function App() {
  return (
    <Fragment>
      <div className="container">
        <Timeline history={data} />
      </div>
      <div className="container">
        <SalaryChart data={data} />
      </div>
    </Fragment>
  )
}

export default App

const data = {
  name: 'Ricardo Dos Santos',
  admissionDate: new Date('2021-08-12'),
  birthDay: new Date('12/02/1997'),
  events: [
    {
      event: 'Admissão',
      type: 'admission',
      description: 'Analista de Software',
      salary: 3000,
      year: 2022,
    },
    {
      event: 'Analista II',
      type: 'promotion',
      description: 'Contraiu o Matrimonio',
      salary: 3000,
      year: 2023,
    },
    {
      event: 'QA Pleno',
      type: 'transition',
      description: 'Promoção',
      salary: 7000,
      year: 2024,
    },
    {
      event: 'Casamento',
      type: 'wedding',
      description: 'Mudança de função',
      salary: 6000,
      year: 2025,
    },
    {
      event: 'Analista Pleno',
      type: 'promotion',
      description: 'Mudança de função',
      salary: 6000,
      year: 2025,
    },
  ],
}

export const icons: any = {
  promotion: promotion,
  wedding: wedding,
  admission: admission,
  transition: transition,
}

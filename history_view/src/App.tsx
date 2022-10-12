import { Timeline } from './components/timeline/timeline'
import rings from './assets/rings.svg'
import office from './assets/office.svg'

function App() {
  return (
    <div className="container-fluid">
      <div className="container">
        <Timeline history={data} />
      </div>
      <div className="container">
        <p>button</p>
        <p>button</p>
      </div>
    </div>
  )
}

export default App

const data = [
  {
    event: 'Admissão',
    label: 'Analista de Software',
    year: 2022,
    icon: office,
  },
  {
    event: 'Casamento',
    label: 'Contraiu o Matrimonio',
    year: 2023,
    icon: rings,
  },
  {
    event: 'Promoção',
    label: '90mil',
    year: 2024,
    icon: office,
  },
  {
    event: 'Casamento',
    label: 'Contraiu o Matrimonio',
    year: 2025,
    icon: rings,
  },
  {
    event: 'Promoção',
    label: '100mil',
    year: 2026,
    icon: office,
  },
]

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  return (
    <div>
      <table></table>
    </div>
  )
}

export default App

const data = {
  docId: {
    name: 'Documento de Identificação',
    label: '(Bi/Passaporte Estrangeiro)',
    lastModification: new Date('22-09-2022'),
    validityTime: 12, // 12 meses
    path: './assets/document.txt',
  },
  RegCriminal: {
    name: 'Documento de Identificação',
    label: '(Bi/Passaporte Estrangeiro)',
    lastModification: new Date('22-09-2022'),
    validityTime: 12, // 12 meses
    path: './assets/document.txt',
  },
  contrato: {
    name: 'Documento de Identificação',
    label: '(Bi/Passaporte Estrangeiro)',
    lastModification: new Date('22-09-2022'),
    validityTime: 12, // 12 meses
    path: './assets/document.txt',
  },
  justificativos: {
    name: 'Documento de Identificação',
    label: '(Bi/Passaporte Estrangeiro)',
    lastModification: new Date('22-09-2022'),
    validityTime: 12, // 12 meses
    path: './assets/document.txt',
  },
  IBAN: {
    name: 'Documento de Identificação',
    label: '(Bi/Passaporte Estrangeiro)',
    lastModification: new Date('22-09-2022'),
    validityTime: 12, // 12 meses
    path: './assets/document.txt',
  },
  gerais: {
    name: 'Documento de Identificação',
    label: '(Bi/Passaporte Estrangeiro)',
    lastModification: new Date('22-09-2022'),
    validityTime: 12, // 12 meses
    path: './assets/document.txt',
  },
}

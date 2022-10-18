import { useMemo } from 'react'
import textExample from './assets/documento.txt'
import { CgFileDocument } from 'react-icons/cg'
import { MdDownloadForOffline } from 'react-icons/md'
import './App.css'

function App() {
  const columns = useMemo(
    () => ['Documento', 'Última Modificação', 'Data de Validade', 'Baixar'],
    []
  )

  const descriptionDocument = (name: string, label: string) => {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          margin: '5px',
        }}
        className=""
      >
        <CgFileDocument
          style={{
            marginTop: '10px',
          }}
          color="green"
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            margin: '5px',
          }}
          className=""
        >
          <h5 style={{ display: 'inline-block', margin: 0 }} className="">
            {name}
          </h5>
          <small>{label}</small>
        </div>
      </div>
    )
  }

  const modifiedDocument = (date: Date) => {
    let day = date.getDay() + 1 < 10 ? '0' + date.getDay() : date.getDay()
    let month = date.getMonth()
    let year = date.getFullYear()
    return <p>{`${day}/${month}/${year}`}</p>
  }

  const validityDocument = (modifiedDate: Date, validityTime: number) => {
    let validityAt = new Date(
      modifiedDate.setMonth(modifiedDate.getMonth() + validityTime)
    )

    let day =
      validityAt.getDay() < 10 ? '0' + validityAt.getDay() : validityAt.getDay()
    let month = validityAt.getMonth()
    let year = validityAt.getFullYear()
    console.log(`${day}/${month}/${year}`)
    return <p>{`${day}/${month}/${year}`}</p>
  }

  const downloadDocument = (path: string) => {
    return (
      <button>
        <a href={path} download>
          <MdDownloadForOffline color="white" />
        </a>
      </button>
    )
  }

  const rows = useMemo(
    () =>
      data.map(
        (doc) =>
          [
            {
              description: descriptionDocument(doc.name, doc.label) || '',
              lastModified: modifiedDocument(doc.lastModification) || '',
              validity: validityDocument(
                doc.lastModification,
                doc.validityTime
              ),
              download: downloadDocument(doc.path) || '',
            },
          ][0]
      ),
    []
  )

  return (
    <table style={{ width: '100%', margin: 0 }} className="">
      <thead>
        <tr>
          {columns.map((column, index) => {
            return (
              <th
                style={{
                  color: 'gray',
                  fontWeight: 'normal',
                }}
                scope="col"
                key={index}
              >
                {column}
              </th>
            )
          })}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => {
          return (
            <tr key={index}>
              <td scope="row">{row.description}</td>
              <td scope="row">{row.lastModified}</td>
              <td scope="row">{row.validity}</td>
              <td scope="row">{row.download}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default App

const data = [
  {
    name: 'Documento de Identificação',
    label: '(Bi/Passaporte Estrangeiro)',
    lastModification: new Date('2022-09-10'),
    validityTime: 1, // 1 mês
    path: textExample,
  },
  {
    name: 'Documento de Identificação',
    label: '(Bi/Passaporte Estrangeiro)',
    lastModification: new Date('2022-09-07'),
    validityTime: 12, // 12 meses
    path: textExample,
  },
  {
    name: 'Documento de Identificação',
    label: '(Bi/Passaporte Estrangeiro)',
    lastModification: new Date('2022-09-10'),
    validityTime: 12, // 12 meses
    path: textExample,
  },
  {
    name: 'Documento de Identificação',
    label: '(Bi/Passaporte Estrangeiro)',
    lastModification: new Date('2022-09-20'),
    validityTime: 6, // 6 meses
    path: textExample,
  },
  {
    name: 'Documento de Identificação',
    label: '(Bi/Passaporte Estrangeiro)',
    lastModification: new Date('2022-09-30'),
    validityTime: 6, // 6 meses
    path: textExample,
  },
  {
    name: 'Documento de Identificação',
    label: '(Bi/Passaporte Estrangeiro)',
    lastModification: new Date('2022-09-05'),
    validityTime: 12, // 12 meses
    path: textExample,
  },
]

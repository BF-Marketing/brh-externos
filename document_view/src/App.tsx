import { useMemo, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { CgFileDocument } from 'react-icons/cg'
import { MdDownloadForOffline } from 'react-icons/md'
import { IoIosAddCircleOutline } from 'react-icons/io'
import { data } from './data'
import { AddDocument } from './components/addDocument'

function App() {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

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

  // lista de elementos da tabela:
  const columns = useMemo(
    () => ['Documento', 'Última Modificação', 'Data de Validade', 'Baixar'],
    []
  )

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
    <div>
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'right',
          marginBottom: '24px',
        }}
      >
        <button
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
            background: 'white',
            boxShadow: '0px 0px 10px -6px rgba(0,0,0,0.75)',
          }}
          onClick={handleShow}
        >
          <IoIosAddCircleOutline color="green" />
          <p
            style={{
              margin: 0,
            }}
          >
            Adicionar documento
          </p>
        </button>
      </div>
      <table style={{ width: '100%', margin: 0 }} className="">
        <thead>
          <tr>
            {columns.map((column, index) => {
              return (
                <th
                  style={{
                    color: '#bbb',
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
      <AddDocument handleClose={handleClose} show={show} />
    </div>
  )
}

export default App

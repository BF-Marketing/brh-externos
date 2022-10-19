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
      <div className="document-description">
        <CgFileDocument color="#51bd9c" />
        <div className="title">
          <h5>{name}</h5>
          <small>{label}</small>
        </div>
      </div>
    )
  }

  const modifiedDocument = (date: Date) => {
    let day = date.getDay() + 1 < 10 ? `0${date.getDay()}` : date.getDay()
    let month = date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth()
    let year = date.getFullYear()
    return <p className="p-date">{`${day}/${month}/${year}`}</p>
  }

  const validityDocument = (modifiedDate: Date, validityTime: number) => {
    let validityAt = new Date(
      modifiedDate.setMonth(modifiedDate.getMonth() + validityTime)
    )

    let day =
      validityAt.getDay() < 10 ? `0${validityAt.getDay()}` : validityAt.getDay()
    let month =
      validityAt.getMonth() < 10
        ? `0${validityAt.getMonth()}`
        : validityAt.getMonth()
    let year = validityAt.getFullYear()
    return <p className="p-date">{`${day}/${month}/${year}`}</p>
  }

  const downloadDocument = (path: string) => {
    return (
      <button className="btn-download">
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
    <div className="container">
      <div className="add-document-btn">
        <button onClick={handleShow}>
          <IoIosAddCircleOutline color="green" />
          <p>Adicionar documento</p>
        </button>
      </div>
      <table>
        <thead>
          <tr>
            {columns.map((column, index) => {
              return (
                <th scope="col" key={index}>
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

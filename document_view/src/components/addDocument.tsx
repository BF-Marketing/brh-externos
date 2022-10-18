import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'

type Props = {
  handleClose: () => void
  show: boolean
}
export const AddDocument = ({ handleClose, show }: Props) => {
  return (
    <Modal show={show} onHide={handleClose} backdrop="static">
      <Modal.Header closeButton>
        <div>
          <h5>Adicionar documento</h5>
          <small>Adicione o documento do colaborador</small>
        </div>
      </Modal.Header>
      <Modal.Body>
        <Form.Group controlId="formSelect" className="mb-3">
          <Form.Label>Tipo de documento</Form.Label>
          <Form.Select aria-label="Default select example">
            <option value="1">Documento de identificação</option>
            <option value="2">Documento de identificação</option>
            <option value="3">Documento de identificação</option>
          </Form.Select>
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Carregue ou arraste o documento</Form.Label>
          <Form.Control type="file" />
        </Form.Group>
        <Form.Group controlId="formImg" className="mb-3">
          <Form.Label>Escolha uma imagem para carregar</Form.Label>
          <Form.Control type="file" />
        </Form.Group>
        <Form.Group controlId="formDate">
          <Form.Label>Data de validade</Form.Label>
          <Form.Control type="date" />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer className="justify-content-center">
        <Button variant="success" onClick={handleClose}>
          Adicionar
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

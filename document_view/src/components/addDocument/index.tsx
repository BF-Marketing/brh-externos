import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import './style.css'

type Props = {
  handleClose: () => void
  show: boolean
}
export const AddDocument = ({ handleClose, show }: Props) => {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      contentClassName="modal"
    >
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="header-title">Adicionar documento</h5>
          <small className="header-small">
            Adicione o documento do colaborador
          </small>
        </div>
        <div className="modal-body">
          <Form.Group className="form-field">
            <Form.Label className="field-label">Tipo de documento</Form.Label>
            <Form.Select aria-label="Default select example">
              <option value="1">Documento de identificação</option>
              <option value="2">Documento de identificação</option>
              <option value="3">Documento de identificação</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="form-field">
            <Form.Label className="field-label">
              Carregue ou arraste o documento
              <div className="btn-file-document">
                <small>Arraste ou suba os arquivos aqui se preferir..</small>
                <input type="file" />
              </div>
            </Form.Label>
          </Form.Group>
          <Form.Group className="form-field">
            <label className="btn-file-image">
              Escolha uma imagem para carregar
              <input type="file" accept="image/*" />
            </label>
          </Form.Group>
          <Form.Group className="form-field-date">
            <Form.Label className="field-label">Data de validade</Form.Label>
            <Form.Control type="date" />
          </Form.Group>
        </div>
        <div className="modal-footer">
          <Button className="form-btn-submit" onClick={handleClose}>
            Adicionar
          </Button>
          <p className="form-btn-cancel" onClick={handleClose}>
            Cancelar
          </p>
        </div>
      </div>
    </Modal>
  )
}

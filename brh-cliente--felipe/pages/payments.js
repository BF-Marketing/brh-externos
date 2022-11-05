import styles from '../styles/Pages.module.css'
import { BsArrowUpCircle } from 'react-icons/bs'
import { IoIosArrowDown } from 'react-icons/io'

import { paymentPointer, payments } from './api/data'

export default function Payments() {
  return (
    <section className={styles['payments-page']}>
      <div className={styles['page-title-left']}>
        <h1>Meus Pagamentos</h1>
        <p>Lista com todos os pagamentos</p>
      </div>
      <div className={styles['payments-actions']}>
        <button type="button" className="btn">
          Enviar comprovativo
          <BsArrowUpCircle />
        </button>
        <button type="button" className="btn">
          Filtros
          <IoIosArrowDown />
        </button>
      </div>
      <div className={styles['payments-table']}>
        <table>
          <thead>
            <tr>
              <th>Plano escolhido</th>
              <th>Valor</th>
              <th>Último pagamento</th>
              <th>Próximo pagamento</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, idx) => (
              <tr key={idx}>
                <td>{payment.plano}</td>
                <td>{payment.value}</td>
                <td>{payment.lastPayment}</td>
                <td>{payment.nextPayment}</td>
                <td>{paymentPointer[payment.status]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

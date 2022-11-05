import styles from '../styles/Pages.module.css'

export default function Support() {
  return (
    <section className={styles['support-page']}>
      <div className={styles['page-title']}>
        <h1>Suporte Técnico</h1>
        <p>Solucione o seu problema</p>
        <form className={styles['support-form']}>
          <div className={styles['form-group']}>
            <label for="formSelect">Selecione o assunto do seu ticket</label>
            <select id="formSelect" required>
              <option value="" selected disabled hidden>
                Selecione um assunto
              </option>
              <option value={'valor'}>2</option>
              <option value={'valor'}>3</option>
              <option value={'valor'}>4</option>
              <option value={'valor'}>5</option>
            </select>
          </div>
          <div className={styles['form-group']}>
            <label for="formTextarea">Digite sua mensagem para o suporte</label>
            <textarea required id="formTextarea"></textarea>
          </div>
          <div className={styles['form-buttons']}>
            <button type="submit" className="btn">
              Enviar
            </button>
            <button type="reset" className="btn">
              Cancelar
            </button>
          </div>
        </form>
        <address className={styles['contact-sup']}>
          <p>Para suporte técnico, contacte-nos:</p>
          <span>+244 000 000 000</span>
          <span>
            <a href="mailto:Brhsoftware@comercial.com">
              Brhsoftware@comercial.com
            </a>
          </span>
        </address>
      </div>
    </section>
  )
}

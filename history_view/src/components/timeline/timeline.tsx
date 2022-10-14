import { icons } from '../../App'
import './timeline.css'

type timelineProps = {
  history: {
    name: string
    admissionDate: Date
    birthDay: Date
    events: {
      event: string
      type: string
      description: string
      salary: number
      year: number
    }[]
  }
}

/**
 *
 * @description calcula a diferença em anos
 * @returns número de anos
 */
const elapsedTime = (date: Date) => {
  const today = new Date()
  let years = today.getFullYear() - date.getFullYear()
  let months = today.getMonth() - date.getMonth()

  if (months < 0 || (months === 0 && today.getDate() < date.getDate())) {
    years--
  }

  return years
}

export const Timeline = ({ history }: timelineProps) => {
  const contractTime = elapsedTime(history.admissionDate)

  return (
    <div className="timeline-content">
      <div className="timeline">
        <ol>
          {history.events.map((item, index) => {
            if (index % 2 === 0) {
              return (
                <li key={index}>
                  <div className="img-handler">
                    <span>{item.year}</span>
                    <img src={icons[item.type]} alt="" />
                  </div>
                  <span className="sp-line-bot"></span>
                  <div className="ps-bot">
                    <p>
                      <b>{item.event}</b>
                      <br />
                      {item.description}
                    </p>
                  </div>
                  <span className="span-bot"></span>
                </li>
              )
            } else {
              return (
                <li key={index}>
                  <div className="img-handler">
                    <span>{item.year}</span>
                    <img src={icons[item.type]} alt="" />
                  </div>
                  <span className="sp-line-bot"></span>
                  <div className="ps-bot-bot">
                    <p>
                      <b>{item.event}</b>
                      <br />
                      {item.description}
                    </p>
                  </div>
                  <span className="span-bot"></span>
                </li>
              )
            }
          })}
        </ol>
      </div>
      <div className="contract-time">
        <div className="n-year">
          {contractTime} <br />
          {contractTime > 1 ? 'anos' : 'ano'}
        </div>
        <span className="sp-label">Antiguidade</span>
      </div>
    </div>
  )
}

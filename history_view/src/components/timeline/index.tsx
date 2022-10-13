import './styles.css'
type timelineProps = {
  history: { event: string; label: string; year: number; icon: string }[]
}
export const Timeline = ({ history }: timelineProps) => {
  return (
    <div className="timeline">
      <ol>
        {history.map((item, index) => {
          if (index % 2 === 0) {
            return (
              <li key={index}>
                <div className="img-handler">
                  <img src={item.icon} alt="" />
                </div>
                <div className="ps-bot">
                  <p>
                    <b>{item.event}</b>
                    <br />
                    {item.label}
                  </p>
                </div>
                <span className="span-top"></span>
              </li>
            )
          } else {
            return (
              <li key={index}>
                <div className="img-handler">
                  <img src={item.icon} alt="" />
                </div>
                <div className="ps-bot">
                  <p className="p-bot">
                    <b>{item.event}</b>
                    <br />
                    {item.label}
                  </p>
                </div>
                <span className="span-bot"></span>
              </li>
            )
          }
        })}
      </ol>
    </div>
  )
}

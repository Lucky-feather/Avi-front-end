import { Link } from "react-router-dom";
import styles from './EventCard.module.css';
import moment from 'moment/moment'

const EventCard = ({ event }) => {
  const d = event.date
  const t = event.date
  const formattedTime = moment(t).format('h:mm A')
  const formattedDate= moment(d).format('L')

  return (
    
      <article className={styles.event}>
        <header>
          <>
            <Link to={`/events/${event._id}`}>
              <h1>{event.title}</h1>
            </Link>
          </>
        </header>
        <p>{event.location}</p>
        <p>{event?.owner?.name}</p>
        <p>{formattedDate} - {formattedTime}</p>
        <p>{event.details}</p>
      </article>
    
  )
}

export default EventCard
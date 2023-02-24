import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import moment from 'moment/moment'

// components
import Loading from "../Loading/Loading"
import styles from "./EventDetails.module.css"

// Services
import * as eventService from "../../services/eventService"

const EventDetails = (props) => {
  const { id } = useParams()
  const [event, setEvent] = useState(null)

  const d = event?.date
  const t = event?.date
  const formattedTime = moment(t).format('h:mm A')
  const formattedDate= moment(d).format('L')

  useEffect(() => {
    const fetchEvent = async () => {
      const data = await eventService.show(id)
      setEvent(data)
    }
    fetchEvent()
  }, [id])

  if (!event) return <Loading />
  return (
    <main className={styles.event}>
      <article>
        <header>
          <h1>{event.title}</h1>
        </header>
        <p>{event.title}</p>
        <p>{event.location}</p>
        <p>{event.owner.name}</p>
        <p>{event.details}</p>
        <p>{formattedDate} - {formattedTime}</p>
        <span>
          <>
            <Link to={`/events/${id}/edit`} state={event}>Edit</Link>
            <button
              onClick={() => props.handleDeleteEvent(id)}
            >
              Delete
            </button>
          </>
        </span>
      </article>
    </main>
  )
}

export default EventDetails
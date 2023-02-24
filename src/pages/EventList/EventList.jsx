import styles from "./EventList.module.css"
import EventCard from "../../components/EventCard/EventCard";
import { useNavigate } from "react-router-dom";


const EventList = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <main className={styles.event}>
        <h1>EVENT LIST</h1>
        <button onClick={() => {navigate("/events/new")}}>ADD AN EVENT</button>
        {props.events.map(event => (
          <EventCard event={event} key={event._id}/>
        ))}
      </main>
    </>
  )
}


export default EventList
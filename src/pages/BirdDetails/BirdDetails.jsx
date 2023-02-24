import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import BirdIcon from '../../assets/branding/profile.png'

// components
import Loading from "../Loading/Loading"

import styles from "./BirdDetails.module.css"

// Services
import * as birdService from "../../services/birdService"

const BirdDetails = (props) => {
  const { id } = useParams()
  const [bird, setBird] = useState(null)

  useEffect(() => {
    const fetchBird = async () => {
      const data = await birdService.show(id)
      setBird(data)
    }
    fetchBird()
  }, [id])


  if (!bird) return <Loading />

  return (
    <main className={styles.birdDetails}>
      <article>
        <div>
          {
            bird.photo ?
            <img src={bird.photo} className="birdPhoto" alt={bird.name} />
            :
            <img src={BirdIcon} alt="Default bird" />
          }
          <header>
            <h1>{bird.name.toUpperCase()}</h1>
            <p>{bird.description}</p>
            <span>
              {bird.author._id === props.user.profile &&
                <>
                  <Link to={`/birds/${id}/edit`} state={bird}>edit</Link>
                  <button onClick={() => props.handleDeleteBird(id)}>delete</button>
                </>
              }
            </span>
            <span>
              <Link to={`/birds`} state={bird}>Back to bird list</Link>
            </span>
          </header>
        </div>
      </article>
    </main>
  )
}

export default BirdDetails
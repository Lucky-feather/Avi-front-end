import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import styles from './SupplyListDetails.module.css'
import * as supplyListService from '../../services/supplyListService'

import Loading from "../Loading/Loading"
//import AuthorInfo from "../../components/AuthorInfo/AuthorInfo"

const SupplyListDetails = (props) => {
  const { id } = useParams()
  const [supplylist, setsupplylist] = useState(null)

  useEffect(() => {
    const fetchSupplylist = async () => {
      const data = await supplyListService.show(id)
      setsupplylist(data)
    }
    fetchSupplylist()
  }, [id])

  if (!supplylist) return <Loading />

  return (
    <div>
      <main className={styles.supplylist}>
        <article>
          <header>
            <h2>{supplylist.title.toUpperCase()}</h2>
            <span>
              {/* <AuthorInfo content={supplylist} /> */}
            </span>
          </header>
          <p><strong>Owner: </strong> {supplylist.owner.name}</p>
          <p><strong>Description: </strong> {supplylist.description}</p>
          <p><strong>Items: </strong> {supplylist.items}</p>
        </article>
        <section>
        <span>
          {/* <AuthorInfo content={supplylist} /> */}
          {supplylist.owner._id === props.user.profile &&
            <>
              <Link to={`/supplylists/${id}/edit`} state={supplylist}>Edit</Link>
              <button onClick={() => props.handleDeleteSupplyList(id)}>Delete</button>
            </>
          }
            </span>
        </section>
      </main>
    </div>
  )
}

export default SupplyListDetails
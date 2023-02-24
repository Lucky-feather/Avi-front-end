import { Link } from "react-router-dom"
import styles from './SupplyCard.module.css'


const SupplyListCard = ({ supplylist }) => {
  return (
    <Link to={`/supplylists/${supplylist._id}`}>
      <article className={styles.supplylist}>
        <header>
          <span>
            <h1>{supplylist.title}</h1>
          </span>
        </header>
      </article>
    </Link>
  )
}

export default SupplyListCard
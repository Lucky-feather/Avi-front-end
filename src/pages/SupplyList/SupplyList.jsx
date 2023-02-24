import styles from './SupplyList.module.css'
import SupplyListCard from '../../components/SupplyCard/SupplyCard'
import { useNavigate } from 'react-router-dom'

const SupplyList = (props) => {
  const navigate = useNavigate()

  return (
    <>
    <h1>Supply Lists</h1>
      <main className={styles.supplylist}>
        <button className="btn btn-secondary" onClick={() => {navigate('/supplylists/new')}}>Make A SupplyList</button>
        {props.supplyLists.map((supplylist) => (
          <SupplyListCard key={supplylist._id} supplylist={supplylist} />
          ))}
      </main>
    </>
  )
}

export default SupplyList
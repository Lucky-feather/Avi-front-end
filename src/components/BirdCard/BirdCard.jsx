import { Link } from "react-router-dom";
import styles from './BirdCard.module.css'
import { useLocation } from "react-router-dom";
import BirdIcon from '../../assets/branding/profile.png'

const BirdCard = (props) => {
  const location = useLocation();


  return (
    <>
      <article className={styles.birdCard}>
          <Link to={`/birds/${props.bird._id}`}><h1>{props.bird.name.toUpperCase()}</h1></Link>
        <header>
          {/* <span> */}
          {props.bird.photo ?
            <img src={props.bird.photo} className="birdPhoto" alt={props.bird.name} />
            :
            <img src={BirdIcon} alt="Default bird" />}
          {/* </span> */}

        <div>
        {(location.pathname ==='/birds') || (location.pathname !=='/birds' && props.wishlist ) ?

          <button onClick={() => props.handleSeen(props.bird) }>seen</button>
          :
          ''
        }
        {(location.pathname ==='/birds') || (location.pathname !=='/birds' && props.wishlist===false) ?

        <button onClick={() => props.handleAddWishlist(props.bird)}>+ wishlist</button>
          :
          ''
        }
          </div>
        </header>
      </article>
    </>
  )

}

export default BirdCard
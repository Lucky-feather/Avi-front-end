import { Link } from "react-router-dom";
import styles from './ProfileCard.module.css'
import ProfileIcon from '../../assets/branding/profile.png'

// Components
// import Icon from "../Icon/Icon"
// import AuthorInfo from "../AuthorInfo/AuthorInfo"

const ProfileCard = ({ profile }) => {
  return (
    <>
        <article className={styles.profileCard}>
          <header>
            <span>
              {profile.photo ?
              <img src={profile.photo} alt="User's avatar" style={{width: "40px"}}/>
              :
              <img src={ProfileIcon} alt="Default avatar" style={{width: "40px"}}/>}
            </span>
          </header>
        <Link to={`/profiles/${profile._id}`}>
          <h3>{profile.name.toUpperCase()}</h3>
        </Link>
        </article>
    </>
  )
}

export default ProfileCard
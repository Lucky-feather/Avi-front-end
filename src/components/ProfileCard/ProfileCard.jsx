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
            {profile.photo ?
            <img src={profile.photo} alt="User's avatar"/>
            :
            <img src={ProfileIcon} alt="Default avatar" />}
            <Link to={`/profiles/${profile._id}`}>
              <h3>{profile.name.toUpperCase()}</h3>
            </Link>
          </header>
        </article>
    </>
  )
}

export default ProfileCard
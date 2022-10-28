  import styles from "./ProfileDetails.module.css"
  import { useState, useEffect } from "react"
  import { useParams, Link } from "react-router-dom"
  import BirdCard from "../../components/BirdCard/BirdCard"
  import ProfileIcon from '../../assets/branding/profile.png'

  // components
  import Loading from "../Loading/Loading"

  // Services
  import * as profileService from "../../services/profileService"

  const ProfileDetails = (props) => {
    const { id } = useParams()
    const [profile, setProfile] = useState(null)

    useEffect(() => {
      const fetchProfile = async () => {
        const data = await profileService.show(id)
        setProfile(data)
      }
      fetchProfile()
    }, [id])

    if (!profile) return <Loading />

    return (
      <main className={styles.profileDetails}>
        <article>
          <header>
              {profile.photo ?
              <img src={profile.photo} alt="User's avatar"/>
              :
              <img src={ProfileIcon} alt="Default avatar"/>}
              <h1>{profile.name.toUpperCase()}</h1>
          </header>

          <h1>Seen</h1>
            {props.seen.map(bird => (
              <>
              <BirdCard  bird={bird} key={bird._id} />
              <span></span>
              <br></br>
              </>
              ))}
          <h1>Wishlist</h1>
            {props.wishlist.map(bird => (
              <>
              <BirdCard wishlist={true} handleSeen={props.handleSeen}  bird={bird} key={bird._id}/>
              <span></span>
              <br></br>
              </>
            ))}

        </article>
      </main>
    )
  }

  export default ProfileDetails

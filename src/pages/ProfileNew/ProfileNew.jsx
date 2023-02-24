import { useState } from "react";
import styles from './ProfileNew.module.css'

const ProfileNew = (props) => {
  const [form, setForm]  = useState({
    title: '',
    text: '',
    category: 'News',
  })

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleAddProfile(form)
  }

  return (
    <main className={styles.container}>
    <form onSubmit={handleSubmit}>
      <h1>Add Info to Your Profile</h1>
      {/* <label htmlFor="title-input">Name</label>
      <input
        required
        type="text"
        name="name"
        id="name-input"
        value={form.name}
        placeholder="Name"
        onChange={handleChange}
      /> */}
      <label htmlFor="text-input">About Me</label>
      <textarea
        required
        type="text"
        name="about"
        id="about-input"
        value={form.about}
        placeholder="About Me"
        onChange={handleChange}
      />
        {/* <label htmlFor="category-input">Photo</label> */}
        {/* <textarea
          required
          name="image"
          id="image-profile"
          value={form.image}
          onChange={handleChange}
        />    
        <button type="submit">add photo</button> */}

        <button type="submit">save</button>
      </form>
    </main>
  )
}

//! CHANGE OUT IMAGE CODE -- AFTER LECTURE ON HOW TO 

export default ProfileNew
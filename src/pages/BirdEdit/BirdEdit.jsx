import { useState } from "react"
import { useLocation } from "react-router-dom"
import styles from './BirdEdit.module.css'

const BirdEdit = (props) => {
  const { state } = useLocation()
  const [form, setForm] = useState(state)

  const [photoData, setPhotoData] = useState({})

  const handleChangePhoto = (evt) => {
		setPhotoData({ photo: evt.target.files[0] })
	}
  
  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleUpdateBird(form, photoData.photo)
  }

  return (
    <main className={styles.container}>
      <form onSubmit={handleSubmit}>
        <h1>Edit Bird</h1>
        <label htmlFor="title-input">Bird Name</label>
        <input
          required
          type="text"
          name="name"
          id="name-input"
          value={form.name}
          placeholder="Name"
          onChange={handleChange}
        />
        <label htmlFor="text-input">Description</label>
				<textarea
          required
          type="text"
          name="description"
          id="description-input"
          value={form.description}
          placeholder="Description"
          onChange={handleChange}
        />
        <label htmlFor="photo-upload" className="form-label">
						{photoData.photo ? "Replace existing photo" : "Add Photo"}
					</label>
					<input
						type="file"
						className="form-control"
						id="photo-upload"
						name="photo"
						onChange={handleChangePhoto}
					/>
        <button type="submit">save</button>
      </form>
    </main>
  )
}

export default BirdEdit
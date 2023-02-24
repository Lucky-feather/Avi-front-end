import { useState } from "react";
import styles from './BirdNew.module.css'

const BirdNew = (props) => {
  const [form, setForm]  = useState({
    name: '',
    description: '',
  })

  const [photoData, setPhotoData] = useState({})

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  const handleChangePhoto =(e) => {
    setPhotoData({ photo: e.target.files[0] })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleAddBird(form, photoData.photo)
  }

  return (
    <main className={styles.container}>
      <form onSubmit={handleSubmit}>
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
						Upload Photo
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

export default BirdNew
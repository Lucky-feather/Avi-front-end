import { useState } from "react"
import { useLocation } from "react-router-dom"
import styles from './SupplyListEdit.module.css'

const SupplyListEdit = (props) => {
  const { state } = useLocation()
  const [form, setForm] = useState(state)

  console.log(state)
  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleUpdateSupplyList(form)
  }

  return (
    <main className={styles.container}>
    <form onSubmit={handleSubmit}>
      <h1>Edit SupplyList</h1>
      <label htmlFor="title-input">Title</label>
      <input
        required
        type="text"
        name="title"
        id="title-input"
        value={form.title}
        placeholder="Title"
        onChange={handleChange}
      />
      <label htmlFor="items-input">Items</label>
      <textarea
        required
        type="text"
        name="items"
        id="text-input"
        value={form.text}
        placeholder="Text"
        onChange={handleChange}
      />
      <label htmlFor="description-input">Description</label>
      <textarea
        required
        type="text"
        name="description"
        id="text-input"
        value={form.text}
        placeholder="Text"
        onChange={handleChange}
      />
      <button type="submit">SUBMIT</button>
      </form>
    </main>
  )
}

export default SupplyListEdit
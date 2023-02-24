import { useState } from "react"

import styles from './SupplyListNew.module.css'

const SupplyListNew = (props) => {
  const [form, setForm] = useState({
    title: '',
    items: '',
    description: '',
  })

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
		props.handleAddSupplyList(form)
  }

  return (
    <main className={styles.container}>
    <form onSubmit={handleSubmit}>
      <label htmlFor="title-input">Title</label>
      <input
        required
        type="text"
        name="title"
        id="title-input"
        value={form.title}
        placeholder="eg. Went to see penguins"
        onChange={handleChange}
      />
      <label htmlFor="items-input">Items</label>
      <textarea
        required
        type="text"
        name="items"
        id="text-input"
        value={form.text}
        placeholder="eg. warm jacket"
        onChange={handleChange}
      />
      <label htmlFor="description-input">Description</label>
      <textarea
        required
        type="text"
        name="description"
        id="text-input"
        value={form.text}
        placeholder="additional details"
        onChange={handleChange}
      />
      <button className="btn btn-secondary" type="submit">SUBMIT</button>
      </form>
    </main>
  )
}

export default SupplyListNew
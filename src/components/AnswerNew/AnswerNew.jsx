import { useState } from "react"
import styles from './AnswerNew.module.css'


const NewAnswer = (props) => {
  const [form, setForm] = useState({ text: '' })

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleAddAnswer(form)
    setForm({ text: '' })
  }

  return (
    <main className={styles.container} >
    <form onSubmit={handleSubmit}>
      <textarea
        required
        type="text"
        name="text"
        id="text-input"
        value={form.text}
        placeholder="share your response"
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
    </main>
  )
}

export default NewAnswer
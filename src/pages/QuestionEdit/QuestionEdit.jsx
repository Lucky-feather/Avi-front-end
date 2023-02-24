import { useState } from "react"
import { useLocation } from "react-router-dom"
//import { update } from "../../services/questionService"
import styles from './QuestionEdit.module.css'

const QuestionEdit = (props) => {
  const { state } = useLocation()
  const [form, setForm] = useState(state)

  console.log(state)
  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleUpdateQuestion(form)
  }

  return (
    <main className={styles.container}>
    <h1>Edit Post</h1>
    <form onSubmit={handleSubmit}>
      <label htmlFor="text-input"></label>
				<textarea
          required
          type="text"
          name="question"
          id="text-input"
          value={form.question}
          placeholder={form.question}
          onChange={handleChange}
        />
      <button type="submit">SUBMIT</button>
      </form>
    </main>
  )
}

export default QuestionEdit
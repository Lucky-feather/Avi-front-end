import { useState } from "react";
import styles from './QuestionNew.module.css'


const NewQuestion = (props) => {
  const [form, setForm]  = useState({
    question: '',
  })

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleAddQuestion(form)
  }

  return (
    <main className={styles.container}>
      <h1>New Post</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="text-input"></label>
				<textarea
          required
          type="text"
          name="question"
          id="text-input"
          value={form.question}
          placeholder="ask a question or share an experience."
          onChange={handleChange}
        />
        
        <button type="submit">SUBMIT</button>
      </form>
    </main>
  )
}

export default NewQuestion
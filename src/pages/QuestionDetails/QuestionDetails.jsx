import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import styles from './QuestionDetails.module.css'
import * as questionService from '../../services/questionService'
import NewAnswer from "../../components/AnswerNew/AnswerNew"
import Answers from "../../components/Answers/Answers"
import Loading from "../Loading/Loading"

const QuestionDetails = (props) => {
  const { id } = useParams()
  const [question, setQuestion] = useState(null)


const handleAddAnswer = async (answerData) => {
  const newAnswer = await questionService.createAnswer(id, answerData)
  console.log('handleAddanswer', answerData)
  setQuestion({ ...question, answers: [...question.answers, newAnswer] })
  }

  useEffect(() => {
    const fetchQuestion = async () => {
      const data = await questionService.show(id)
      setQuestion(data)
    }
    fetchQuestion()
  }, [id])

if (!question) return <Loading />

  return (
    <main className={styles.container}>
      <article>
        <header>      
          <h3>{question.question}</h3>
          <p>by {question.author.name}</p>
          <span className={styles.btns}>
            {question.author._id === props.user.profile && 
            <>
            <button onClick={() => props.handleDeleteQuestion(id)}>Delete</button>
            <h2><Link to={`/questions/${id}/edit`} state={question}>Edit</Link></h2>
              </> 
            }
          </span>
        </header>
        <p>{question.text}</p>
      </article>
      <section>
        <h2>Responses</h2>
        <NewAnswer handleAddAnswer={handleAddAnswer}/>
        <h3><Answers answers ={question.answers} user={props.user} /></h3>
      </section>
      <span>
        <Link to={`/questions`} state={question}>Back to all field notes</Link>
      </span>
    </main>
  )
}

export default QuestionDetails
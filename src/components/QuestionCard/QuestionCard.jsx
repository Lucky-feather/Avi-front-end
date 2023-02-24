import { Link } from "react-router-dom";
import styles from './QuestionCard.module.css'
//import AuthorInfo from "../AuthorInfo/AuthorInfo"

// Components
//import AuthorInfo from "../AuthorInfo/AuthorInfo"

const QuestionCard = ({ question }) => {
  console.log(question.author.name)
  return (
    <Link to={`/questions/${question._id}`}>
      <article className={styles.container}>
        <header>
          <span>
            <h1>{question.question}</h1>
          </span>
        </header>
        <p>{question.text}</p>
      </article>
    </Link>
  )
}

export default QuestionCard
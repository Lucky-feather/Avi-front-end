import styles from './AnswerCard.module.css'

const AnswerCard = ({ answer }) => {
  return (
    <article className={styles.container}>
      <header key ={answer.id}>
      </header>
      {console.log(answer.author.name)}
      <h4>{answer.text}</h4>
    </article>
  )
}

export default AnswerCard
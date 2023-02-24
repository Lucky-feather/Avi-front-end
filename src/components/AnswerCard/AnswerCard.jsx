import './AnswerCard.module.css'

const AnswerCard = ({ answer }) => {
  return (
    <article className='answerCard'>
      <header key ={answer.id}>
      {console.log(answer.author.name)}
      <h4>{answer.text}</h4>
      </header>
    </article>
  )
}

export default AnswerCard
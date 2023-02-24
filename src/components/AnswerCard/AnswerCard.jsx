const AnswerCard = ({ answer }) => {
  return (
    <article>
      <header key ={answer.id}>
        {/* <AuthorInfo content={answer} /> */}
      </header>
      {console.log(answer.author.name)}
      <p>{answer.text}</p>
    </article>
  )
}

export default AnswerCard
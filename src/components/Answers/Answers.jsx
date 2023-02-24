import AnswerCard from "../AnswerCard/AnswerCard"
const Answers = (props) => {
  if (!props.answers) return <h4>No Responses</h4>

  return (
    <>
      {props.answers.map((answer) => (
        <AnswerCard
          key={answer._id}
          answer={answer}
          user={props.user}
        />
      ))}
    </>
  )
}

export default Answers
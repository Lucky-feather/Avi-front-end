import * as tokenService from '../services/tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/questions`

const index = async () => {
  try {
    const res = await fetch(BASE_URL, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const show = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const create = async (questionData) => {
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(questionData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const update = async (questionData) => {
  try {
    const res = await fetch(`${BASE_URL}/${questionData._id}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(questionData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const deleteQuestion = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      }
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const createAnswer = async (id, answerData) => {
  try {
    console.log('questionService', answerData)
    const res = await fetch(`${BASE_URL}/${id}/answers`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(answerData)
    })
    return res.json()
  } catch (error) {
    console.log('at questionservice', error)
  }
}

const updateAnswer = async (questionId, answerId, answerData) => {
  try {
    const res = await fetch(`${BASE_URL}/${questionId}/comments/${answerId}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(answerData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const deleteAnswer = async (questionId, answerId) => {
  try {
    const res = await fetch(`${BASE_URL}/${questionId}/comments/${answerId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      }
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

export { 
  index,
  show,
  create,
  update,
  deleteQuestion,
  createAnswer,
  updateAnswer,
  deleteAnswer,
}
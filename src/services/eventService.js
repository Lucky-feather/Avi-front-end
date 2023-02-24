import * as tokenService from "./tokenService"


const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/events`

const index = async () => {
  try {
    // GET http://localhost:3001/event
    const res = await fetch(BASE_URL, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}`}
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const show = async (id) => {
  try {
    // GET http://localhost:3001/events/:id
    const res = await fetch(`${BASE_URL}/${id}`, {
      headers: { "Authorization": `Bearer ${tokenService.getToken()}`}
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}



const create = async (eventData) => {
  // blogData will have a shape of:
//   {
//     "title": "string",
//     "category": "string",
//     "text": "string"
//   }
  try {
    // POST http://localhost:3001/events
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        "Authorization": `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(eventData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}
const update = async (eventData) => {
  try {
    const res = await fetch(`${BASE_URL}/${eventData._id}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(eventData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const deleteEvent = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
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
  deleteEvent
}
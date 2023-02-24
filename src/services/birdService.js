import * as tokenService from "./tokenService"

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/birds`

const index = async () => {
  try {
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
    const res = await fetch(`${BASE_URL}/${id}`, {
      headers: { "Authorization": `Bearer ${tokenService.getToken()}`}
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const create = async (birdData) => {
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        "Authorization": `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(birdData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const update = async (birdData) => {
  try {
    const res = await fetch(`${BASE_URL}/${birdData._id}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(birdData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const deleteBird = async (id) => {
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

async function addPhoto(photoData, birdId) {
  const res = await fetch(`${BASE_URL}/${birdId}/add-photo`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
    body: photoData
  })
  return await res.json()
}

export {
  index,
  show,
  create,
  update,
  deleteBird,
  addPhoto,
}